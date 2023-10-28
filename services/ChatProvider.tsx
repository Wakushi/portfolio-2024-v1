import { ReactNode, createContext, useState } from "react"

const API_URL = process.env.NEXT_PUBLIC_API_URL

interface ChatProviderProps {
	children: ReactNode
}

export interface MessageFormData {
	name: string
	email: string
	message: string
}

interface ChatContextProps {
	chatOpen: boolean
	toggleChatModal: () => void
	sendMessage: (formData: MessageFormData) => Promise<any>
}

const ChatContext = createContext<ChatContextProps>({
	chatOpen: false,
	toggleChatModal: () => {},
	sendMessage: (formData: MessageFormData) => Promise.resolve()
})

export default function ChatProvider(props: ChatProviderProps) {
	const [chatOpen, setChatOpen] = useState(false)

	function toggleChatModal() {
		setChatOpen((prevState) => !prevState)
	}

	function sendMessage(formData: MessageFormData): Promise<any> {
		return fetch(`${API_URL}/contact/discord`, {
			body: JSON.stringify({
				content: formData
			}),
			headers: {
				"Content-Type": "application/json"
			},
			method: "POST"
		})
	}

	const context: ChatContextProps = {
		chatOpen: chatOpen,
		toggleChatModal: toggleChatModal,
		sendMessage: sendMessage
	}

	return (
		<ChatContext.Provider value={context}>
			{props.children}
		</ChatContext.Provider>
	)
}

export { ChatContext }
