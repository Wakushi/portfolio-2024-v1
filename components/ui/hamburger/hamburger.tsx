import { useContext, useRef } from "react"
import classes from "./hamburger.module.scss"
import { NavigationContext } from "@/services/NavigationProvider"

export default function Hamburger() {
	const hamburgerMenu = useRef<HTMLDivElement>(null)

	const { toggleNavigation, showNavigation } = useContext(NavigationContext)

	function hamburgerMenuToggle() {
		toggleNavigation()
	}

	return (
		<>
			<div
				className={classes.hamburger_icon}
				onClick={hamburgerMenuToggle}
			>
				<div
					ref={hamburgerMenu}
					className={`${classes.hamburger_menu} ${
						showNavigation ? classes.open : ""
					}`}
				>
					<div className={`${classes.bar} ${classes.top}`}></div>
					<div className={`${classes.bar} ${classes.middle}`}></div>
					<div className={`${classes.bar} ${classes.bottom}`}></div>
				</div>
			</div>
		</>
	)
}
