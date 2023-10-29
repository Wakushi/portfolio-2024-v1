import { useRouter } from "next/router"
import classes from "./work-details.module.scss"
import {
	getNextWork,
	getPrevWork,
	getWorkById,
	worksData
} from "@/public/assets/data/works"

export default function WorkDetails() {
	const router = useRouter()
	const { id } = router.query
	const work = getWorkById(id as string)

	if (!work) {
		return (
			<div
				className={`${classes.work_not_found} flex--column flex--center`}
			>
				<p>This project doesn't exist</p>
			</div>
		)
	}

	function goToNextWork() {
		if (!work) return
		let nextWorkId = +work.id === worksData.length ? 0 : +work.id + 1
		if (nextWorkId === 0) {
			nextWorkId++
		}
		router.push(`/work/${nextWorkId}`)
	}

	return (
		<div className={classes.work_detail_container}>
			<div className={classes.work_image_container}>
				<img
					className={classes.work_image}
					src={work?.image}
					alt="Project"
				/>
				<div className={classes.work_detail_content}>
					<div
						className={`${classes.work_detail_content_top} flex--between`}
					>
						<h1>{work?.title} </h1>
						<div
							className={`${classes.work_content_right} flex--column`}
						>
							<h3>{work?.stack}</h3>
							<div className="flex gap-l">
								{work.gitlink && (
									<a
										className=""
										target="_blank"
										href={work.gitlink}
									>
										<i className="fa-brands fa-github"></i>
									</a>
								)}
								{work.link && (
									<a
										className=""
										target="_blank"
										href={work.link}
									>
										<i className="fa-solid fa-globe"></i>
									</a>
								)}
							</div>
						</div>
					</div>
					<div
						className={`${classes.work_detail_content_bottom} flex`}
					>
						<div
							className={`${classes.work_screen_image_container} slide-in-top`}
						>
							<img src={work.screenImage} alt={work.title} />
						</div>
						<p
							className={`${classes.work_detail_description} slide-in-right`}
						>
							{work.desc}
						</p>
					</div>
				</div>
			</div>

			<div className={`${classes.navigation_button} flex gap-m`}>
				<a
					href="#"
					className={`${classes.next_work_button} flex--center gap-s`}
					onClick={(event) => {
						event.preventDefault()
						goToNextWork()
					}}
				>
					<i className="fa-solid fa-arrow-left"></i>
					{getNextWork(work?.id)?.title}
				</a>
				<a
					href="#"
					className={`${classes.next_work_button} flex--center gap-s`}
					onClick={(event) => {
						event.preventDefault()
						goToNextWork()
					}}
				>
					{getPrevWork(work?.id)?.title}
					<i className="fa-solid fa-arrow-right"></i>
				</a>
			</div>
		</div>
	)
}
