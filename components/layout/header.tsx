import classes from "./header.module.scss"
import { useRef } from "react"

export default function Header() {
	const linkBubble = useRef<HTMLDivElement | null>(null)

	function onLinkClick(event: any) {
		const linkName = event.target.innerText
		const linkPos = event.target.getBoundingClientRect().x
		if (linkBubble.current) {
			linkBubble.current.style.transform = `translateX(${
				linkPos - 292
			}px)`

			switch (linkName) {
				case "Contact":
					linkBubble.current.style.width = "100px"
					break
				case "About":
					linkBubble.current.style.width = "90px"
					break
				case "Work":
					linkBubble.current.style.width = "80px"
					break

				default:
					linkBubble.current.style.width = "70px"
					break
			}
		}
	}

	return (
		<header className={`${classes.header} fade-in-top`}>
			<nav className="flex">
				<ul className="flex--center gap-xl">
					<span
						className={classes.active_link_bubble}
						ref={linkBubble}
					></span>
					<li>
						<a
							href="#works"
							onClick={onLinkClick}
							onMouseOver={onLinkClick}
						>
							<span className={classes.nav_link}>Work</span>
						</a>
					</li>
					<li>
						<a
							href="#profile"
							onClick={onLinkClick}
							onMouseOver={onLinkClick}
						>
							<span className={classes.nav_link}>About</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							onClick={onLinkClick}
							onMouseOver={onLinkClick}
						>
							<span className={classes.nav_link}>Blog</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							onClick={onLinkClick}
							onMouseOver={onLinkClick}
						>
							<span className={classes.nav_link}>Contact</span>
						</a>
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
