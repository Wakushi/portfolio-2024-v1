import React, { useContext } from "react"
import Header from "./header"
import Chat from "../chat/chat"
import { ChatContext } from "@/services/ChatProvider"
import { NavigationContext } from "@/services/NavigationProvider"
import classes from "./layout.module.scss"
import { useRouter } from "next/router"
import Navigation from "../navigation/navigation"

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
	const { chatOpen, toggleChatModal } = useContext(ChatContext)
	const { showNavigation } = useContext(NavigationContext)
	const router = useRouter()

	return (
		<>
			<Header />
			<main>{props.children}</main>
			{chatOpen && <Chat />}
			<div onClick={toggleChatModal} className="chat-icon">
				<img src="/assets/images/chat.webp" alt="chatbox icon"></img>
			</div>
			{showNavigation && (
				<div className={`${classes.navigation_modal} slide-in-right`}>
					<Navigation modalView={true} />
				</div>
			)}
		</>
	)
}
