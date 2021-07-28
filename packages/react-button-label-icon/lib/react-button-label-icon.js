import React from "react";

const ButtonLabelIcon = ({ label, icon, placeIconRight, iconSize, design = "solid", color, className, loading, ...props }) => {
	const loader = <span className="sui-icon-loader sui-loading" style={{ position: "relative" }} aria-hidden="true" />;

	let content = (
		<React.Fragment>
			{!placeIconRight && <span className={`sui-icon-${icon}${iconSize ? " sui-" + iconSize : ""}`} aria-hidden="true" />}
			{label}
			{placeIconRight && <span className={`sui-icon-${icon}${iconSize ? " sui-" + iconSize : ""}`} aria-hidden="true" />}
		</React.Fragment>
	);

	className = `sui-button ${placeIconRight ? "sui-button-icon-right" : ""} ${className || ""}`;

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
	if (loading) {
		className += " sui-button-onload";
	}

	const htmlTag = props.href ? "a" : "button";

	return React.createElement(
		htmlTag,
		{
			className,
			disabled: props.disabled || loading,
			...props,
		},
		loading ? loader : content
	);
};

export { ButtonLabelIcon };
