import React from "react"
import Header from "./header"

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
	return (
		<>
			<Header />
			<main>{props.children}</main>
		</>
	)
}
