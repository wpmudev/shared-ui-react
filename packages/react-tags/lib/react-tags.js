import React from 'react';

export const Tags = ({
	size,
	label,
	childrenContent,
	ghost,
	color,
	truncated,
	multiline,
	uppercase,
	onClick,
	href,
	...props
}) => {
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
			ghost ? classes.push(`sui-tag-ghost sui-tag-${color}`) : classes.push(`sui-tag-${color}`);
			break;
		default:
			ghost && classes.push('sui-tag-ghost sui-tag-red');
			break;
	}

	// if props href is set, then set htmlTag to 'a' or if else onclick set then set html tag to 'button'
	if (href) {
		htmlTag = 'a';
	} else if (onClick) {
		htmlTag = 'button';
	} else {
		htmlTag = 'span';
	}

	return React.createElement(
		htmlTag,
		{
			className: classes.join(' '),
			style: truncated || multiline ? { maxWidth: '100px' } : {},
			onClick: onClick ? onClick : null,
			href: href ? href : null,
			...props,
		},
		truncated || childrenContent ? <span>{label}</span> : label,
	);
};
