export enum ProjectType {
	PERSO = "Solo projects",
	PRO = "Professional projects"
}

export interface WorksProps {
	works: Work[]
	projectType: ProjectType
}

export interface Work {
	id: string
	context: string
	image: string
	screenImage?: string
	desc: string
	type: string
	stack: string
	title: string
	gitlink: string
	link: string
}
export const worksData: Work[] = [
	{
		id: "1",
		context: "pro",
		image: "/assets/images/projects/art-crowdfunding.webp",
		screenImage: "/assets/images/projects/art-crowdfunding-screen.webp",
		desc: "A platform that allows users to invest in various work of art, manage their shares and wallet. I've worked as a team member on the front-end of this application.",
		type: "Web application for investors",
		stack: "Angular / NestJS / Stripe / AWS",
		title: "Art crowdfunding",
		gitlink: "",
		link: ""
	},
	{
		id: "2",
		context: "pro",
		image: "/assets/images/projects/medical.webp",
		screenImage: "/assets/images/projects/medical-screen.webp",
		desc: "The platform facilitates online booking and payment for both teleconsultations and physical appointments with doctors, available through a convenient mobile application for iOS and Android users. Payment processing is handled securely via Stripe, with a commission deducted before transferring the consultation fees to the doctor's bank account..",
		type: "Web application for doctors",
		stack: "Angular / NestJS / AWS / Elastic Search / Stripe",
		title: "Medical platform",
		gitlink: "",
		link: ""
	},
	{
		id: "3",
		context: "pro",
		image: "/assets/images/projects/housing.webp",
		screenImage: "/assets/images/projects/housing-screen.webp",
		desc: "The platform serves as a comprehensive administration interface that uses algorithms to match client files with housing based on specific criteria, and provides administrators with tools to manage file statuses, send automatic emails, and exchange files with clients, all while ensuring data security and offering the ability to export data in Excel format.",
		type: "Web application for HRs",
		stack: "Angular / NodeJS / NestJS / AWS / SQS / SES ",
		title: "Housing platform",
		gitlink: "",
		link: ""
	},
	{
		id: "4",
		context: "pro",
		image: "/assets/images/projects/driver.webp",
		screenImage: "/assets/images/projects/driver-screen.webp",
		desc: "This app helps drivers to manage their rides, their clients, invoices and even share their rides with their partners so they can focus more on providing excellent service to their passengers. I've worked as a team member on front-end of this application",
		type: "Android/iOS application",
		stack: "Ionic / PHP / SQL",
		title: "Driver mobile app",
		gitlink: "",
		link: ""
	},
	{
		id: "5",
		context: "pro",
		image: "/assets/images/projects/presse.webp",
		screenImage: "/assets/images/projects/presse-screen.webp",
		desc: "This application allows companies to provide news and informations for journalists and media. I've worked as a team member on both front-end and back-end of this application.",
		type: "Web service ",
		stack: "Angular / NestJS / AWS / MongoDB ",
		title: "News sharing service",
		gitlink: "",
		link: ""
	},
	{
		id: "6",
		context: "perso",
		image: "/assets/images/projects/multisig.webp",
		screenImage: "/assets/images/projects/multisig-screen.webp",
		desc: "MultiSig Factory is a web app that allows anyone to create and manage a MultiSig wallet. Users can easily create, confirm and execute transactions from their multi-signature wallet. (Sepolia testnet only)",
		type: "dApp",
		stack: "NextJS / Solidity / Foundry / Ethers.js / Alchemy",
		title: "Multi-sig Factory",
		gitlink: "https://github.com/Wakushi/multisig-wallet-factory",
		link: "https://multisig-wallet-factory.vercel.app/"
	},
	{
		id: "7",
		context: "perso",
		image: "/assets/images/projects/stablecoin.webp",
		screenImage: "/assets/images/projects/stablecoin-screen.webp",
		desc: "An algorithmic dollar pegged Stablecoin smart contract made using Foundry. This contract allows anyone to mint stablecoins by depositing ETH, and burn stablecoins to withdraw ETH. The contract is also connected to Chainlink's ETH/USD price feed to ensure the stability of the stablecoin",
		type: "Smart Contract",
		stack: "Solidity / Foundry / Chainlink",
		title: "Stablecoin",
		gitlink: "https://github.com/Wakushi/foundry-defi-stablecoin",
		link: ""
	},
	{
		id: "8",
		context: "perso",
		image: "/assets/images/projects/paths.png",
		screenImage: "/assets/images/projects/paths-screen.webp",
		desc: "Paths is a Reigns-like game. You're a time and space traveler, captain of your own ship. All of your decisions will impact the fate of your crew and your journey through the universe.",
		type: "Mobile Game",
		stack: "Angular / Ionic",
		title: "Paths",
		gitlink: "https://github.com/Wakushi/paths",
		link: "https://paths-one.vercel.app/"
	},
	{
		id: "9",
		context: "perso",
		image: "/assets/images/projects/lottery.png",
		screenImage: "/assets/images/projects/lottery-screen.webp",
		desc: "Solidity Lottery Smart Contract made using Foundry and Chainlink. This contracts allows anyone to buy a ticket to enter the lottery and a random winner selected every X minutes will win the pot. All this process is automated using the Chainlink VRF and Chainlink Automation.",
		type: "Smart Contract",
		stack: "Solidity / Foundry / Chainlink",
		title: "Smart lottery",
		gitlink: "https://github.com/Wakushi/foundry-smart-contract-lottery",
		link: "none"
	},
	{
		id: "10",
		context: "perso",
		image: "/assets/images/projects/helix-vault.png",
		screenImage: "/assets/images/projects/helix-vault-screen.webp",
		desc: "Helix Vault is a web app that allows anyone to get information about any Helix holder's staked items, without the need for wallet connection.",
		type: "Web3 App",
		stack: "React / Typescript / Vite",
		title: "Helix Vault",
		gitlink: "https://github.com/Wakushi/helix-vaults",
		link: "https://helix-vaults.vercel.app/"
	},
	{
		id: "11",
		context: "perso",
		image: "/assets/images/projects/crowdfunding.webp",
		screenImage: "/assets/images/projects/fundme-screen.webp",
		desc: "Solidity Smart Contract made using Foundry. It's a crowd funding contract that registers donators' addresses and allows the deployer to withdraw the funds.",
		type: "Smart Contract",
		stack: "Solidity / Foundry / Chainlink",
		title: "Crowd Funding",
		gitlink: "https://github.com/Wakushi/foundry-fund-me-f23",
		link: "none"
	},
	{
		id: "12",
		context: "perso",
		image: "/assets/images/projects/kanga.webp",
		screenImage: "/assets/images/projects/kanga-screen.webp",
		desc: "Kanga is an image generative website based on AI, which goal is to make text-to-image more user-friendly with different features.",
		type: "Web App",
		stack: "React / OpenAI API",
		title: "Kanga",
		gitlink: "none",
		link: "none"
	}
]

export function getProWorks() {
	return worksData.filter((work) => work.context === "pro")
}

export function getSideWorks() {
	return worksData.filter((work) => work.context === "perso")
}

export function getWorkById(id: string) {
	return worksData.find((work) => work.id === id)
}
