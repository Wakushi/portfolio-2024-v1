import { ReactNode, createContext, useState } from "react"

interface NavigationProviderProps {
	children: ReactNode
}

interface NavigationContextProps {
	showNavigation: boolean
	toggleNavigation: () => void
}

const NavigationContext = createContext<NavigationContextProps>({
	showNavigation: false,
	toggleNavigation: () => {}
})

export default function NavigationProvider(props: NavigationProviderProps) {
	const [showNavigation, setShowNavigation] = useState(false)

	function toggleNavigation() {
		setShowNavigation((prevState) => !prevState)
	}

	const context: NavigationContextProps = {
		showNavigation: showNavigation,
		toggleNavigation: toggleNavigation
	}

	return (
		<NavigationContext.Provider value={context}>
			{props.children}
		</NavigationContext.Provider>
	)
}

export { NavigationContext }
