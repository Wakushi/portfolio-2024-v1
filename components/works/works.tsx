import { useEffect, useState } from "react"
import classes from "./works.module.scss"
import AnimatedText from "../ui/animated-text/animated-text"

interface WorksProps {
	works: Work[]
	projectType: ProjectType
}

interface Work {
	title: string
	type: string
	image: string
}

export enum ProjectType {
	PERSO = "Side projects",
	PRO = "Works"
}

export default function Works({ works, projectType }: WorksProps) {
	const [userTouched, setUserTouched] = useState(false)

	const [displayedProject, setDisplayedProject] = useState<number>(0)

	const [lastInteractionTimestamp, setLastInteractionTimestamp] =
		useState<number>(0)

	const titleStyles = {
		transform: `translateY(-${displayedProject * 100 + 20}%)`,
		transition: "transform 1s ease-out"
	}

	const heightFactor = 70

	useEffect(() => {
		const interval = setInterval(() => {
			if (Date.now() - lastInteractionTimestamp > 4000) {
				setUserTouched(false)
			}
			if (userTouched) return
			setDisplayedProject((prev) => (prev + 1) % works.length)
		}, 6000)

		return () => clearInterval(interval)
	}, [userTouched, works.length])

	function onChangeProject(index: number): void {
		setDisplayedProject(index)
		setUserTouched(true)
		setLastInteractionTimestamp(Date.now())
	}

	function onHoverProject(): void {
		setUserTouched(true)
		setLastInteractionTimestamp(Date.now())
	}

	return (
		<section id="works" className={`${classes.works_section}`}>
			<h2 className={classes.works_type}>{projectType}</h2>
			<div className={`${classes.work_image_list}`}>
				<div
					className={`${classes.work_image_list_container} flex--column`}
				>
					{works.map((work, index) => {
						const frameStyles = {
							transform: `translateY(${
								110 - (817 + heightFactor) * displayedProject
							}px)`,
							transition: "transform 1s ease-out"
						}

						return (
							<div
								key={index}
								className={classes.work_image_container}
								style={frameStyles}
							>
								<img
									src={work.image}
									alt={work.title}
									onMouseOver={onHoverProject}
								/>
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
							<h3 style={titleStyles} key={index}>
								{work.title}
							</h3>
						)
					})}
				</div>
			</div>
			<div className={`${classes.work_type} flex gap-l`}>
				<AnimatedText
					text={works[displayedProject].type}
					delay={1}
					fontSize="1.25"
					subtitle={true}
				/>
			</div>
			<div className={`${classes.work_selector} flex--center`}>
				{works.map((_, index) => {
					return (
						<div
							className={`${classes.selector_container} ${
								displayedProject === index ? classes.active : ""
							} flex`}
							onClick={() => onChangeProject(index)}
							onMouseOver={() => onChangeProject(index)}
						>
							<div
								key={index}
								className={`${classes.selector} `}
							></div>
						</div>
					)
				})}
			</div>
			<div
				className={`${classes.gradient} ${classes.gradient_left}`}
			></div>
			<div
				className={`${classes.gradient} ${classes.gradient_right}`}
			></div>
		</section>
	)
}
