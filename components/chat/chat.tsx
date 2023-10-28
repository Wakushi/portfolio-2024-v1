import React, { useContext, useRef, useState } from "react"
import classes from "./chat.module.scss"
import { ChatContext } from "@/services/ChatProvider"
import Loader from "../ui/loader/loader"

export default function Chat() {
	const { toggleChatModal, sendMessage } = useContext(ChatContext)

	const [loading, setLoading] = useState(false)

	const chatModalRef = useRef<HTMLDivElement | null>(null)

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	})

	function handleInputChange(event: any) {
		const { name, value } = event.target
		setFormData({
			...formData,
			[name]: value
		})
	}

	function onSendMessage(event: any) {
		event.preventDefault()
		setLoading(true)
		const { name, email, message } = formData
		if (name && email && message) {
			sendMessage(formData)
				.then(() => {
					chatModalRef.current?.classList.add("slide-out-right")
					setTimeout(() => {
						toggleChatModal()
						setLoading(false)
					}, 1500)
				})
				.catch((error) => {
					console.error(error)
					alert("There was an error. " + error)
					setLoading(false)
				})
		} else {
			alert("Please fill in all information.")
		}
	}

	return (
		<div
			ref={chatModalRef}
			className={`${classes.chat_modal} slide-in-right`}
		>
			<div className={`${classes.chat_modal__header} flex--around`}>
				<div className={`${classes.chat_modal__header__picture}`}>
					<img
						src="/assets/images/pro_pfp.webp"
						alt="a picture of me"
					></img>
				</div>
				<div className={`${classes.chat_modal__header__text} flex`}>
					<span>Makushi Bot</span>
					<span>Write me a message!</span>
				</div>
				<i className="fa-solid fa-xmark" onClick={toggleChatModal}></i>
			</div>
			<form className={`${classes.chat_modal__form} flex`}>
				<div
					id="form-content"
					className={`${classes.form_content} flex`}
				>
					<label htmlFor="name">Name</label>
					<input
						id="name"
						name="name"
						placeholder="Sarah"
						required
						type="text"
						onChange={handleInputChange}
					></input>
					<label htmlFor="email">Email</label>
					<input
						id="email"
						name="email"
						placeholder="sarah@gmail.com"
						required
						type="email"
						onChange={handleInputChange}
					></input>
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="message"
						placeholder="I like your work !"
						required
						rows={8}
						onChange={handleInputChange}
					></textarea>
				</div>
				{loading ? (
					<Loader />
				) : (
					<button
						id="sendBtn"
						onClick={onSendMessage}
						className="classic-button"
					>
						Send
					</button>
				)}
			</form>
		</div>
	)
}
