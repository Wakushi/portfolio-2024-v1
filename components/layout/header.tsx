import { ChatContext } from "@/services/ChatProvider"
import classes from "./header.module.scss"
import { useRouter } from "next/router"
import { useContext } from "react"

export default function Header() {
	const { toggleChatModal } = useContext(ChatContext)
	const router = useRouter()

	return (
		<header className={`${classes.header} fade-in-top-fast`}>
			<nav className="flex">
				<ul className="flex--center gap-xl">
					<li>
						<a
							href="#"
							onClick={(event) => {
								event.preventDefault()
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
							onClick={toggleChatModal}
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
		</header>
	)
}
