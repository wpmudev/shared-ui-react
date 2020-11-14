import React from 'react';

const Button = ({
	label,
	icon,
	iconPosition,
	size,
	color,
	ghost,
	...props
}) => {
	let content = label;
	let classes = 'sui-button';

	if ( ghost ) {
		classes += ' sui-button-ghost';
	}

	switch ( color ) {
		case 'blue':
		case 'green':
		case 'red':
		case 'orange':
		case 'yellow':
		case 'purple':
			classes += ' sui-button-' + color;
			break;
	}

	switch ( size ) {
		case 'lg':
		case 'large':
			classes += ' sui-button-lg';
			break;
	}

	if ( icon ) {
		content = 'right' === iconPosition
			? <React.Fragment>{ label } <span className={ 'sui-icon-' + icon } aria-hidden="true" /></React.Fragment>
			: <React.Fragment><span className={ 'sui-icon-' + icon } aria-hidden="true" /> { label }</React.Fragment>
	}

	return (
		<button
			className={ classes }
			{ ...props }
		>
			{ content }
		</button>
	);
};

export { Button };