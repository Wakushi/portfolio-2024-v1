import { ChatContext } from "@/services/ChatProvider"
import { useRouter } from "next/router"
import { useContext } from "react"
import Hamburger from "../ui/hamburger/hamburger"
import classes from "./header.module.scss"
import Navigation from "../navigation/navigation"

export default function Header() {
	const { toggleChatModal } = useContext(ChatContext)
	const router = useRouter()

	return (
		<header className={`${classes.header} flex fade-in-top-fast`}>
			<Navigation />
			<Hamburger />
		</header>
	)
}
