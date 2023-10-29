import { useEffect, useRef } from "react"
import classes from "./index.module.scss"
import {
	ProjectType,
	getProWorks,
	getSideWorks
} from "@/public/assets/data/works"
import LandingParallax from "@/components/ui/parallax/landing-parallax"
import Works from "@/components/works/works"
import About from "@/components/about/about"

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

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<div>
			<div ref={grainRef} className={`${classes.grain}`}></div>
			<LandingParallax />
			<div className={`${classes.landing_content}`}>
				{/* WORK SECTION */}
				<div className={classes.white_line}></div>
				<Works
					key="team-projects"
					works={getProWorks()}
					projectType={ProjectType.PRO}
				/>
				<div className={classes.white_line}></div>
				<Works
					key="solo-projects"
					works={getSideWorks()}
					projectType={ProjectType.PERSO}
				/>
				{/* PROFILE SECTION */}
				<div className={classes.white_line}></div>
				<About />
			</div>
		</div>
	)
}
