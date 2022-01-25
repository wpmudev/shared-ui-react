import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Button } from '@wpmudev/react-button';

const Wrapper = styled.span`
	position: relative;
	display: inline-block;

	&.sui-tooltip:after,
	&.sui-tooltip:before {
		content: unset !important;
	}

	[role='tooltip'] {
		opacity: 0;
		position: absolute;
		left: 50%;
		bottom: 100%;
		margin-bottom: 7px;
		padding: 8px 12px;
		border-radius: 4px;
		background-color: #333;
		box-sizing: border-box;
		transform: translateX(-50%);
		color: #fff;
		font: 500 12px/18px Roboto, Arial, sans-serif;
		letter-spacing: -0.25px;
		text-transform: none;
		white-space: nowrap;
		transition: 0.2s;
	}

	.sui__tooltip-elem {
		margin-right: 0 !important;
		&:after {
			content: ' ';
			position: absolute;
			backface-visibility: hidden;
			pointer-events: none;
			position: absolute;
			z-index: 9990;
			-webkit-transition: 0.2s;
			transition: 0.2s;
			left: 50%;
			bottom: 100%;
			border: 5px solid transparent;
			border-top-color: #333;
			transform: translateX(-50%);
			opacity: 0;
		}
	}

	&.show {
		.sui__tooltip-elem {
			+ [role='tooltip'],
			&:after {
				opacity: 1;
				transition: 0.2s;
			}
		}
	}

	&.sui-tooltip-top-left [role='tooltip'] {
		left: 0;
		transform: translateX(0);
	}

	&.sui-tooltip-top-right [role='tooltip'] {
		left: unset;
		right: 0;
		transform: translateX(0);
	}

	&.sui-tooltip-bottom [role='tooltip'] {
		top: 100%;
		bottom: unset;
		margin-top: 10px;
		margin-bottom: 0;
	}

	&.sui-tooltip-bottom-left [role='tooltip'] {
		left: unset;
		right: 0;
		transform: translateX(0);
	}

	&.sui-tooltip-bottom-right [role='tooltip'] {
		left: unset;
		right: 0;
		transform: translateX(0);
	}
`;

export default function ToolTips({ buttonText, tooltipText, position, id }) {
	const [isOpen, setIsOpen] = useState(false);
	let classes = isOpen ? 'sui-tooltip show ' : 'sui-tooltip ';

	// when escape key is pressed close the tooltip
	const escFunction = useCallback(
		(event) => {
			if (event.keyCode === 27 && isOpen) {
				setIsOpen(false);
			}
		},
		[isOpen],
	);

	useEffect(() => {
		document.addEventListener('keydown', escFunction);

		return () => {
			document.removeEventListener('keydown', escFunction);
		};
	}, [escFunction]);

	// switch position
	switch (position) {
		case 'top':
		case 'top-left':
		case 'top-right':
		case 'bottom':
		case 'bottom-left':
		case 'bottom-right':
		case 'left':
		case 'right':
			classes = classes + ' sui-tooltip-' + position;
			break;
		default:
			break;
	}

	return (
		<Wrapper className={classes}>
			<Button
				label={buttonText}
				className="sui__tooltip-elem"
				aria-describedby={id}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
				onMouseEnter={() => setIsOpen(true)}
				onMouseLeave={() => setIsOpen(false)}
			/>
			<div
				id={id}
				role="tooltip"
				aria-hidden={!isOpen}
				aria-live="polite"
				tab-index={isOpen ? '0' : '-1'}
			>
				{tooltipText}
			</div>
		</Wrapper>
	);
}
