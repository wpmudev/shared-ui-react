import React from 'react';

const Button = ({
	label,
	icon,
	iconRight,
	design,
	color,
	width,
	height,
	className,
	loading,
	...props
}) => {
	const loader = (
		<React.Fragment>
			{label ? <span className="sui-button__label">{label}</span> : ''}
			<span className="sui-button__loader sui-icon-loader sui-loading sui-sm" aria-hidden="true" />
		</React.Fragment>
	);

	let content = (
		<React.Fragment>
			{icon && !iconRight && '' !== icon && (
				<span className={'sui-button__icon sui-icon-' + icon + ' sui-sm'} aria-hidden="true" />
			)}
			{label ? <span className="sui-button__label">{label}</span> : ''}
			{icon && iconRight && '' !== icon && (
				<span className={'sui-button__icon sui-icon-' + icon + ' sui-sm'} aria-hidden="true" />
			)}
		</React.Fragment>
	);

	className = `sui-button${iconRight ? ' sui-button-icon-right' : ''}${
		className ? ' ' + className : ''
	}`;

	// Set button style.
	switch (design) {
		case 'solid':
		case 'light':
		case 'ghost':
			className += ' sui-button--' + design;
			break;

		case 'ghost-dashed':
			className += ' sui-button--dashed sui-button--ghost';
			break;

		case 'text':
			color !== 'gray' ? (className += ' sui-button-') : '';
			break;
		default:
			className += '';
			break;
	}

	// Set button color.
	switch (color) {
		case 'blue':
		case 'green':
		case 'red':
		case 'orange':
		case 'purple':
		case 'yellow':
		case 'white':
			className += '-' + color;
			break;

		case 'gray':
		default:
			className += '';
			break;
	}

	// Set button width.
	switch (width) {
		case 'full':
			className += ' sui-button--full-width';
			break;

		case 'default':
		default:
			className += '';
			break;
	}

	// set button height.
	switch (height) {
		case '50':
		case '60':
		case '70':
			className += ' sui-button--height-' + height;
			break;

		case '30':
		default:
			className += '';
			break;
	}

	// Set loading class.
	if (loading) {
		className += ' sui-button--loading';
	}

	let htmlTag = 'button';
	if (props.href) {
		htmlTag = 'a';
	} else if (props.htmlFor) {
		htmlTag = 'label';
	}

	return React.createElement(
		htmlTag,
		{
			className: className,
			disabled: props.disabled || loading,
			...props,
		},
		loading ? loader : content,
	);
};

export { Button };
