import AudioReactiveBackground from "@/components/backgrounds/audio-reactive/audio-reactive"
import classes from "./music.module.scss"
import Card from "@/components/ui/card/card"
import snowflakeCover from "@/public/assets/images/music/snowflake.jpg"
import smoothieCover from "@/public/assets/images/music/smoothie.png"

export default function MusicPage() {
	return (
		<main className={classes.music_page}>
			<AudioReactiveBackground />
			<section className={classes.music_page_content}>
				<Card
					image={snowflakeCover}
					A={{
						cardNumber: "01",
						bottomtext: "#ether #web3"
					}}
					D={{
						cardNumber: "",
						bottomtext: "Multisig Wallet"
					}}
				/>
				<Card
					image={snowflakeCover}
					A={{
						cardNumber: "01",
						bottomtext: "#ether #web3"
					}}
					D={{
						cardNumber: "",
						bottomtext: "Multisig Wallet"
					}}
				/>
				<Card
					image={smoothieCover}
					A={{
						cardNumber: "01",
						bottomtext: "#ether #web3"
					}}
					D={{
						cardNumber: "",
						bottomtext: "Multisig Wallet"
					}}
				/>
				<Card
					image={snowflakeCover}
					A={{
						cardNumber: "01",
						bottomtext: "#ether #web3"
					}}
					D={{
						cardNumber: "",
						bottomtext: "Multisig Wallet"
					}}
				/>
				<Card
					image={smoothieCover}
					A={{
						cardNumber: "01",
						bottomtext: "#ether #web3"
					}}
					D={{
						cardNumber: "",
						bottomtext: "Multisig Wallet"
					}}
				/>
				<Card
					image={snowflakeCover}
					A={{
						cardNumber: "01",
						bottomtext: "#ether #web3"
					}}
					D={{
						cardNumber: "",
						bottomtext: "Multisig Wallet"
					}}
				/>
			</section>
		</main>
	)
}
