import { useEffect, useRef } from "react"
import classes from "./index.module.scss"
import LandingParallax from "@/components/ui/parallax/landing-parallax"
import Works from "@/components/works/works"
import { proWorks, sideWorks } from "@/public/assets/data/works"
import { ProjectType } from "@/components/works/works"
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
		<div className={`${classes.main_container}`}>
			<div ref={grainRef} className={`${classes.grain}`}></div>
			<LandingParallax />
			<div className={`${classes.landing_content}`}>
				{/* WORK SECTION */}
				<div className={classes.white_line}></div>
				<Works works={proWorks} projectType={ProjectType.PRO} />
				<div className={classes.white_line}></div>
				<Works works={sideWorks} projectType={ProjectType.PERSO} />
				{/* PROFILE SECTION */}
				<div className={classes.white_line}></div>
				<About />
			</div>
		</div>
	)
}
