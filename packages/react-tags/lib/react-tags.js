import React from 'react';
import styled from 'styled-components';

export const Tags = ({ size, text, ghost, color, truncated, uppercase, type }) => {
	let classes = [
			'sui-tag',
			truncated ? 'sui-tag-truncated' : '',
			uppercase ? 'sui-tag-uppercase' : '',
		],
		Wrapper = 'span';

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
		case 'button':
		case 'a':
		case 'span':
			Wrapper = type;
			break;
		default:
			break;
	}

	return (
		<Wrapper className={classes.join(' ')} style={{ maxWidth: '100px' }}>
			{truncated ? <span>{text}</span> : text}
		</Wrapper>
	);
};
