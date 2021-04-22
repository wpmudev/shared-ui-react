import React from "react";

const ButtonIcon = React.forwardRef( ({
	label,
	icon,
	design = "solid",
	color,
	className,
	...props
}, ref) => {
	const loader = (
		<span
			className="sui-icon-loader sui-loading"
			style={{ position: "relative" }}
			aria-hidden="true"
		/>
	);

	let content = (
		<React.Fragment>
			<span className={"sui-icon-" + icon} aria-hidden="true" />
			<span className="sui-screen-reader-text">{label}</span>
		</React.Fragment>
	);

	className = '' !== className
		? 'sui-button-icon ' + className
		: 'sui-button-icon';

	// Set button color.
	switch (color) {
		case "blue":
		case "green":
		case "red":
		case "orange":
		case "purple":
		case "yellow":
		case "white":
			className += " sui-button-" + color;
			break;

		case "gray":
		default:
			className += "";
			break;
	}

	// Set button style.
	switch (design) {
		case "ghost":
		case "outlined":
			className += " sui-button-" + design;
			break;

		case "solid":
		default:
			className += "";
			break;
	}

	// Set loading class.
	if (props.loading) {
		className += " sui-button-onload";
	}

	const htmlTag = props.href ? 'a' : 'button';

	return React.createElement(
		htmlTag,
		{
			className: className,
			disabled: props.disabled || props.loading,
			...props
		},
		props.loading ? loader : content
	)
});

export { ButtonIcon };
