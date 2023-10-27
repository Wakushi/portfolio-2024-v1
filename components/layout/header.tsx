import Link from "next/link"
import classes from "./header.module.scss"
import { useRef } from "react"

export default function Header() {
	const linkBubble = useRef<HTMLDivElement | null>(null)

	function onLinkClick(event: any) {
		const linkName = event.target.innerText
		const linkPos = event.target.getBoundingClientRect().x
		if (linkBubble.current) {
			linkBubble.current.style.transform = `translateX(${
				linkPos - 673
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
		<header className={classes.header}>
			<nav>
				<ul className="flex--center gap-xl">
					<span
						className={classes.active_link_bubble}
						ref={linkBubble}
					></span>
					<a
						href="#works"
						className={classes.nav_link}
						onClick={onLinkClick}
						onMouseOver={onLinkClick}
					>
						<li>Work</li>
					</a>
					<a
						href="#profile"
						className={classes.nav_link}
						onClick={onLinkClick}
						onMouseOver={onLinkClick}
					>
						<li>About</li>
					</a>
					<a
						href="#"
						className={classes.nav_link}
						onClick={onLinkClick}
						onMouseOver={onLinkClick}
					>
						<li>Blog</li>
					</a>
					<a
						href="#"
						className={classes.nav_link}
						onClick={onLinkClick}
						onMouseOver={onLinkClick}
					>
						<li>Contact</li>
					</a>
				</ul>
			</nav>
		</header>
	)
}
