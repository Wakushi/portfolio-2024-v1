import classes from "./cloud-transition.module.scss"

export default function CloudTransition() {
	return (
		<div className={classes.cloud_container}>
			<div className={`${classes.cloud} ${classes.left_cloud}`}></div>

			<div className={`${classes.cloud} ${classes.right_cloud}`}></div>
		</div>
	)
}
