import React from "react";

const Button = ({
	label,
	icon,
	design = "solid",
	color,
	className,
	loading,
	...props
}) => {
	const loader = (
		<span
			className="sui-icon-loader sui-loading"
			style={{ position: "relative" }}
			aria-hidden="true"
		/>
	);

	let content = (
		<React.Fragment>
			{icon && "" !== icon && (
				<span className={"sui-icon-" + icon} aria-hidden="true" />
			)}
			{label}
		</React.Fragment>
	);

	className = `sui-button${ className ? ' ' + className : '' }`;

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
	if ( loading ) {
		className += " sui-button-onload";
	}

	let htmlTag = 'button';
	if ( props.href ) {
		htmlTag = 'a';
	} else if ( props.htmlFor ) {
		htmlTag = 'label';
	}

	return React.createElement(
		htmlTag,
		{
			className: className,
			disabled: props.disabled || loading,
			...props
		},
		loading ? loader : content
	)
};

export { Button };
