import React from 'react';

export const Tags = ({ size, text, ghost, color, truncated, uppercase, type, ...props }) => {
	let classes = [
			'sui-tag',
			truncated ? 'sui-tag-truncated' : '',
			uppercase ? 'sui-tag-uppercase' : '',
		],
		htmlTag = '';

	// switch size
	switch (size) {
		case 'sm':
		case 'pro':
		case 'beta':
			classes.push(`sui-tag-${size}`);
			break;
		default:
			break;
	}

	// switch color
	switch (color) {
		case 'red':
		case 'yellow':
		case 'green':
		case 'blue':
		case 'purple':
		case 'disabled':
			classes.push(`sui-tag-${color}`);
			break;
		default:
			break;
	}

	// type switch
	if (ghost) {
		classes.push('sui-tag-ghost');
	}

	// switch type of tag
	switch (type) {
		case 'a':
		case 'label':
		case 'button':
			htmlTag = type;
			break;
		default:
			htmlTag = 'span';
			break;
	}

	return React.createElement(
		htmlTag,
		{
			className: classes.join(' '),
			style: { maxWidth: '100px' },
			...props,
		},
		truncated ? <span>{text}</span> : text,
	);
};
