import Link from "next/link"
import classes from "./header.module.scss"

export default function Header() {
	return (
		<header className={classes.header}>
			<nav>
				<ul className="flex--center gap-xl">
					<a
						href="#"
						className={`${classes.nav_link} ${classes.active}`}
					>
						<li>Work</li>
					</a>
					<a href="#" className={classes.nav_link}>
						<li>About</li>
					</a>
					<a href="#" className={classes.nav_link}>
						<li>Blog</li>
					</a>
					<a href="#" className={classes.nav_link}>
						<li>Contact</li>
					</a>
				</ul>
			</nav>
		</header>
	)
}
