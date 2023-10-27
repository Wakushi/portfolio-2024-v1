import { useEffect, useRef } from "react"
import classes from "./landing-parallax.module.scss"
import AnimatedText from "../animated-text/animated-text"
import CloudTransition from "../cloud-transition/cloud-transition"

export default function LandingParallax() {
	const mountainsRef = useRef<HTMLDivElement | null>(null)
	const treesRef = useRef<HTMLDivElement | null>(null)
	const leftRockRef = useRef<HTMLDivElement | null>(null)
	const rightRockRef = useRef<HTMLDivElement | null>(null)
	const waterRef = useRef<HTMLDivElement | null>(null)
	const grainRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const handleScroll = () => {
			const top = window.scrollY
			const mountainSpeed = -0.25
			const treeSpeed = -0.38
			const leftRockSpeed = -0.35
			const rightRockSpeed = -0.4
			const waterSpeed = -0.36
			if (mountainsRef.current) {
				mountainsRef.current.style.transform = `translateY( ${
					top * mountainSpeed
				}px)`
			}

			if (treesRef.current) {
				treesRef.current.style.transform = `translateY( ${
					top * treeSpeed
				}px) scale(${1 + top / 8000})`
			}

			if (leftRockRef.current) {
				leftRockRef.current.style.transform = `translateY( ${
					top * leftRockSpeed
				}px) translateX( ${top * -0.1}px)`
			}

			if (rightRockRef.current) {
				rightRockRef.current.style.transform = `translateY( ${
					top * rightRockSpeed
				}px)  translateX( ${top * 0.1}px)`
			}

			if (waterRef.current) {
				waterRef.current.style.transform = `translateY( ${
					top * waterSpeed
				}px)`
			}

			if (grainRef.current) {
				grainRef.current.style.opacity = `${top / 500}`
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])
	return (
		<div className={`${classes.parallax_container}`}>
			<CloudTransition />

			<div className={`${classes.shooting_star} ${classes.star_a}`}></div>
			<div className={`${classes.shooting_star} ${classes.star_b}`}></div>
			<div className={`${classes.glowing_star}`}></div>

			<div
				ref={mountainsRef}
				className={`${classes.parallax_layer} ${classes.parallax_mountains}`}
			></div>
			<div
				ref={treesRef}
				className={`${classes.parallax_layer} ${classes.parallax_trees}`}
			></div>
			<div
				ref={leftRockRef}
				className={`${classes.parallax_layer} ${classes.parallax_left_rock}`}
			></div>
			<div
				ref={rightRockRef}
				className={`${classes.parallax_layer} ${classes.parallax_right_rock}`}
			></div>
			<div
				ref={waterRef}
				className={`${classes.parallax_layer} ${classes.parallax_water}`}
			></div>
			<div className={`${classes.landing_content_top_transition}`}></div>
			<div
				className={`${classes.hero_content} flex--center flex--column`}
			>
				<p>Hi, I'm Maxime</p>
				<AnimatedText text="A web developer" delay={20} fontSize="10" />
				<p className={classes.small_text}>
					with a passion for crafting experiences that are engaging,
					user-friendly and secure.{" "}
				</p>
			</div>
		</div>
	)
}
