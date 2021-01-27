import React from "react";

const Button = ({
	label,
	icon,
	iconRight,
	large,
	color,
	outlined,
	...props
}) => {
	let content = label;
	let classes = "sui-button";

	if (outlined) {
		classes += " sui-button-ghost";
	}

	switch (color) {
		case "blue":
		case "green":
		case "red":
		case "orange":
		case "yellow":
		case "purple":
			classes += " sui-button-" + color;
			break;
	}

	if (large) {
		classes += " sui-button-lg";
	}

	if (icon) {
		content = !iconRight ? (
			<React.Fragment>
				<span className={"sui-icon-" + icon} aria-hidden="true" /> {label}
			</React.Fragment>
		) : (
			<React.Fragment>
				{label} <span className={"sui-icon-" + icon} aria-hidden="true" />
			</React.Fragment>
		);
		classes += !iconRight ? "" : " sui-button-icon-right";
	}

	return (
		<button className={classes} {...props}>
			{content}
		</button>
	);
};

export { Button };
