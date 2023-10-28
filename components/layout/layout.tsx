import React, { useContext } from "react"
import Header from "./header"
import Chat from "../chat/chat"
import { ChatContext } from "@/services/ChatProvider"

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
	const { chatOpen, toggleChatModal } = useContext(ChatContext)

	return (
		<>
			<Header />
			<main>{props.children}</main>
			{chatOpen && <Chat />}
			<div onClick={toggleChatModal} className="chat-icon">
				<img src="/assets/images/chat.png" alt="chatbox icon"></img>
			</div>
		</>
	)
}
