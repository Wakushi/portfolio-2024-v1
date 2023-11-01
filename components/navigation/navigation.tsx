import { useContext } from "react"
import { useRouter } from "next/router"
import { ChatContext } from "@/services/ChatProvider"
import { NavigationContext } from "@/services/NavigationProvider"
import classes from "./navigation.module.scss"

interface NavigationProps {
	modalView?: boolean
}

export default function Navigation({ modalView }: NavigationProps) {
	const { toggleChatModal } = useContext(ChatContext)
	const { toggleNavigation } = useContext(NavigationContext)
	const router = useRouter()

	return (
		<nav
			className={`${classes.header_nav} ${
				modalView ? "flex--column" : ""
			} gap-xl`}
		>
			<ul
				className={`flex--center gap-xl ${
					modalView ? "flex--column" : ""
				}`}
			>
				<li>
					<a
						href="#"
						onClick={(event) => {
							event.preventDefault()
							toggleNavigation()
							router.push(`/#works`)
						}}
					>
						<span className={classes.nav_link}>Work</span>
					</a>
				</li>
				<li>
					<a
						href="#"
						onClick={(event) => {
							event.preventDefault()
							toggleNavigation()
							router.push(`/#profile`)
						}}
					>
						<span className={classes.nav_link}>About</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span className={classes.nav_link}>Blog</span>
					</a>
				</li>
				<li>
					<button
						className={classes.nav_link}
						onClick={() => {
							toggleNavigation()
							toggleChatModal()
						}}
					>
						Contact
					</button>
				</li>
			</ul>
			<ul className="flex--center gap-xl">
				<li>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/maxime-eliazord-8718ab259/"
					>
						<i className="remix-icon ri-linkedin-box-fill"></i>
					</a>
				</li>
				<li>
					<a target="_blank" href="https://github.com/Wakushi">
						<i className="remix-icon ri-github-fill"></i>
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://open.spotify.com/artist/3UpfeEs7V3bmv55WYtJnLf?si=ZgHqX-tnR5aBvcZJ7Qmhew"
					>
						<i className="remix-icon ri-spotify-fill"></i>
					</a>
				</li>
			</ul>
		</nav>
	)
}
