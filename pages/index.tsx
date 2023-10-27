import { useEffect, useRef } from "react"
import classes from "./index.module.scss"
import LandingParallax from "@/components/ui/parallax/landing-parallax"
import Works from "@/components/works/works"
import { proWorks, sideWorks } from "@/public/assets/data/works"
import { ProjectType } from "@/components/works/works"

export default function Landing() {
	const grainRef = useRef<HTMLDivElement | null>(null)
	const profilePic = useRef<HTMLDivElement | null>(null)

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

	const handleMouseMove = (event: any) => {
		const { offsetX, offsetY, target } = event.nativeEvent
		const { clientWidth: width, clientHeight: height } = target

		const x = (offsetX / width) * 100 - 50
		const y = (offsetY / height) * 100 - 50

		if (profilePic.current) {
			profilePic.current.style.backgroundPosition = `${50 + x / 2}% ${
				50 + y / 2
			}%`
		}
	}

	const handleMouseLeave = () => {
		if (profilePic.current) {
			profilePic.current.style.transition =
				"background-position 1s ease-out"
			profilePic.current.style.backgroundPosition = "center"
		}
	}

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
				<section
					id="profile"
					className={`${classes.profile_section} flex`}
				>
					<div className={`${classes.profile_part} flex--center`}>
						<div
							onMouseMove={handleMouseMove}
							onMouseLeave={handleMouseLeave}
							className={classes.profile_image_container}
							ref={profilePic}
						></div>
					</div>

					<div className={`${classes.profile_part}`}></div>
				</section>
			</div>
		</div>
	)
}
