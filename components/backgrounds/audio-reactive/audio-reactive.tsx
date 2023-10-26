import React, { useEffect, useRef, useState } from "react"
import { AudioListener, Audio, AudioLoader, AudioAnalyser, Clock } from "three"
import {
	Scene,
	SphereGeometry,
	Vector3,
	PerspectiveCamera,
	WebGLRenderer,
	Color
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { createSculptureWithGeometry } from "../../../node_modules/shader-park-core/dist/shader-park-core.esm.js"
import { spCode } from "./spCode"
import classes from "./audio-reactive.module.scss"

export default function AudioReactiveBackground() {
	const [audioLoaded, setAudioLoaded] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)
	const containerRef = useRef<HTMLDivElement | null>(null)
	const soundRef = useRef<Audio | null>(null)

	useEffect(() => {
		if (!containerRef.current) return
		let container = containerRef.current

		let scene = new Scene()
		let camera = new PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		)
		camera.position.z = 1.5
		let renderer = new WebGLRenderer({ antialias: true })
		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.setPixelRatio(window.devicePixelRatio)
		renderer.setClearColor(new Color(1, 1, 1), 0)
		container.appendChild(renderer.domElement)

		let clock = new Clock()

		const listener = new AudioListener()
		camera.add(listener)
		const sound = new Audio(listener)
		const audioLoader = new AudioLoader()
		audioLoader.load("/assets/Future is ours.wav", (buffer) => {
			sound.setBuffer(buffer)
			sound.setLoop(true)
			sound.setVolume(0.5)
			setAudioLoaded(true)
		})
		soundRef.current = sound

		const analyser = new AudioAnalyser(sound, 32)
		let state = {
			mouse: new Vector3(),
			currMouse: new Vector3(),
			pointerDown: 0.0,
			currPointerDown: 0.0,
			audio: 0.0,
			currAudio: 0.0,
			time: 0.0
		}

		let geometry = new SphereGeometry(2, 45, 45)
		let mesh = createSculptureWithGeometry(geometry, spCode(), () => ({
			time: state.time,
			pointerDown: state.pointerDown,
			audio: state.audio,
			mouse: state.mouse,
			_scale: 0.5
		}))

		scene.add(mesh)
		let controls = new OrbitControls(camera, renderer.domElement)
		controls.enableZoom = false
		const onWindowResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight
			camera.updateProjectionMatrix()
			renderer.setSize(window.innerWidth, window.innerHeight)
		}

		window.addEventListener("resize", onWindowResize)

		const render = () => {
			requestAnimationFrame(render)
			state.time += clock.getDelta()
			controls.update()
			if (analyser) {
				state.currAudio +=
					Math.pow((analyser.getFrequencyData()[2] / 255) * 0.81, 8) +
					clock.getDelta() * 0.5
				state.audio = 0.2 * state.currAudio + 0.8 * state.audio
			}
			state.pointerDown =
				0.1 * state.currPointerDown + 0.9 * state.pointerDown
			state.mouse.lerp(state.currMouse, 0.05)
			renderer.render(scene, camera)
		}
		render()

		return () => {
			container.removeChild(renderer.domElement)
			window.removeEventListener("resize", onWindowResize)
			sound.stop()
		}
	}, [])

	return (
		<div className={classes.reactive_background} ref={containerRef}>
			{audioLoaded && !isPlaying && (
				<button
					className="play-button"
					onClick={() => {
						if (soundRef.current) soundRef.current.play()
						setIsPlaying(true)
					}}
				>
					Play Audio
				</button>
			)}
		</div>
	)
}
