import React from 'react';
import { Button } from '@wpmudev/react-button';
import styled from 'styled-components';

const ButtonWrapper = styled(Button)`
	&.sui-button.sui-tag {
		font-size: 75px;
	}
`;

export const Tags = ({ size, text, ghost, color, truncated, uppercase, type = 'span' }) => {
	let classes = [
			'sui-tag',
			truncated ? 'sui-tag-truncated' : '',
			uppercase ? 'sui-tag-uppercase' : '',
		],
		Wrapper = type;

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
			Wrapper = ButtonWrapper;
			break;
		case 'link':
			Wrapper = 'a';
			break;
		case 'text':
		default:
			break;
	}

	if (type === 'button') {
		return <Wrapper className={classes.join(' ')} label={text} />;
	}

	return (
		<Wrapper className={classes.join(' ')} style={{ maxWidth: '100px' }}>
			{truncated ? <span>{text}</span> : text}
		</Wrapper>
	);
};
