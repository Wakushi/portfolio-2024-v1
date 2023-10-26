import { StaticImageData } from "next/image"
import classes from "./card.module.scss"

interface CardProps {
	image: StaticImageData
	A?: CardBox
	B?: CardBox
	C?: CardBox
	D?: CardBox
}

interface CardBox {
	cardNumber: string
	bottomtext: string
}

export default function Card(props: CardProps) {
	const LETTER_DELAY_SLOWNESS = 8

	const cardImageStyle = {
		backgroundImage: `url(${props.image.src})`
	}

	function randomSmoothDisplay(word: string) {
		return word.split("").map((letter, index) => {
			const styles = {
				animationDelay: `${
					Math.floor(Math.random() * LETTER_DELAY_SLOWNESS) * 0.1
				}s`
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

	function renderBoxes() {
		return Object.entries(props).map((box, index) => {
			if (box[0] === "image") return null
			const [letter, cardBoxData] = box
			const { cardNumber, bottomtext } = cardBoxData

			const letterClassMap: { [key: string]: string } = {
				A: classes.card_box_a,
				B: classes.card_box_b,
				C: classes.card_box_c,
				D: classes.card_box_d
			}
			const cardBoxClass = letterClassMap[letter]
			const cardNumbers = cardNumber ? cardNumber.split("") : []

			return (
				<div
					key={index + cardBoxClass}
					className={`${cardBoxClass} ${classes.card_box}`}
				>
					<span className={classes.box_upper_text}>
						<span className={classes.box_number_1}>
							{cardNumbers[0]}
						</span>
						<span className={classes.box_number_2}>
							{cardNumbers[1]}
						</span>
					</span>
					<div className={`${classes.box_lower_text}`}>
						<span>{randomSmoothDisplay(bottomtext)}</span>
					</div>
				</div>
			)
		})
	}

	return (
		<div className={`${classes.card} ${classes.card_reduce_animation}`}>
			<div
				style={cardImageStyle}
				className={`${classes.card_image}`}
			></div>
			{renderBoxes()}
		</div>
	)
}
