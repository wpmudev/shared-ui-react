import React from 'react';

export const Tags = ({ size, text, ghost, color, truncated, uppercase }) => {
	let classes = [
		'sui-tag',
		truncated ? 'sui-tag-truncated' : '',
		uppercase ? 'sui-tag-uppercase' : '',
	];

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

	return (
		<span className={classes.join(' ')} style={{ maxWidth: '100px' }}>
			{truncated ? <span>{text}</span> : text}
		</span>
	);
};
