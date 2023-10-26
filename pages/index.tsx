import { useEffect, useRef } from "react"
import classes from "../styles/landing.module.scss"
import LandingParallax from "@/components/ui/parallax/landing-parallax"

export default function Landing() {
	const grainRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const handleScroll = () => {
			const top = window.scrollY
			if (grainRef.current) {
				grainRef.current.style.opacity = `${top / 500}`
			}
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])
	return (
		<section className={`${classes.main_container}`}>
			<div ref={grainRef} className={`${classes.grain}`}></div>
			<LandingParallax />
			<section className={`${classes.landing_content}`}></section>
		</section>
	)
}
