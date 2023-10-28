import { useRef } from "react"
import classes from "./about.module.scss"

export default function About() {
	const profilePic = useRef<HTMLDivElement | null>(null)

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
		<section
			id="profile"
			className={`${classes.profile_section} flex--center gap-l`}
		>
			<div className={`${classes.profile_part} flex--center`}>
				<div
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					className={classes.profile_image_container}
					ref={profilePic}
				></div>
			</div>

			<div className={`${classes.profile_part} flex--center`}>
				<div className={classes.profile_description}>
					<h2>About me</h2>
					<p>
						Hello, my name is Maxime, I'm a french web developer
						based in Paris. I'm also a blockchain enthusiast and a
						web3 security researcher.
					</p>
					<p>
						I'm currently employed as a junior web developer,
						creating tailor-made web applications to help our
						clients boost their productivity and profitabily.{" "}
					</p>
					<p>
						When I'm not working, I enjoy building side projects,
						making music, performing in musicals and scuba diving.
					</p>
				</div>
			</div>
		</section>
	)
}
