import classes from "./animated-text.module.scss"

interface AnimatedTextProps {
	text: string
	delay: number
	fontSize?: string
}

export default function AnimatedText({
	text,
	delay,
	fontSize
}: AnimatedTextProps) {
	function randomSmoothDisplay(word: string) {
		return word.split("").map((letter, index) => {
			const styles = {
				animationDelay: `${Math.floor((index / 10) * delay) * 0.1}s`,
				fontSize: fontSize ? `${fontSize}vw` : "inherit"
			}

			const displayLetter = letter === " " ? "\u00A0" : letter

			return (
				<span
					className={classes.animated_letter}
					style={styles}
					key={index + letter}
				>
					{displayLetter}
				</span>
			)
		})
	}

	return (
		<div className={`${classes.animated_text}`}>
			<span>{randomSmoothDisplay(text)}</span>
		</div>
	)
}
