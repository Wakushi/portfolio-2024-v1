import { useEffect, useRef, useState } from "react"
import classes from "./works.module.scss"
import { works } from "@/public/assets/data/works"
import AnimatedText from "../ui/animated-text/animated-text"

export default function Works() {
	const [displayedProject, setDisplayedProject] = useState<number>(0)

	const titleStyles = {
		transform: `translateY(-${displayedProject * 100 + 20}%)`,
		transition: "transform 1s ease-out"
	}

	return (
		<section id="works" className={`${classes.works_section}`}>
			<div className={`${classes.work_image_list}`}>
				<div
					className={`${classes.work_image_list_container} flex--column`}
				>
					{works.map((work, index) => {
						const frameStyles = {
							transform: `translateY(${
								110 - 817 * displayedProject
							}px)`,
							transition: "transform 1s ease-out"
						}

						return (
							<div
								key={index}
								className={classes.work_image_container}
								style={frameStyles}
							>
								<img src={work.image} alt={work.title} />
							</div>
						)
					})}
				</div>
			</div>
			<div className={`${classes.work_title} flex gap-l`}>
				<div className={`${classes.work_number} flex`}>
					<span>00.0{displayedProject + 1}</span>
				</div>
				<div className={`${classes.work_title_list} flex--column`}>
					{works.map((work, index) => {
						return (
							<h2 style={titleStyles} key={index}>
								{work.title}
							</h2>
						)
					})}
				</div>
			</div>
			<div className={`${classes.work_desc} flex gap-l`}>
				<AnimatedText
					text={works[displayedProject].type}
					delay={1}
					fontSize="1.5"
				/>
			</div>
			<div className={`${classes.work_selector} flex--center`}>
				{works.map((_, index) => {
					return (
						<div
							className={`${classes.selector_container} ${
								displayedProject === index ? classes.active : ""
							} flex`}
							onClick={() => setDisplayedProject(index)}
							onMouseOver={() => setDisplayedProject(index)}
						>
							<div
								key={index}
								className={`${classes.selector} `}
							></div>
						</div>
					)
				})}
			</div>
		</section>
	)
}
