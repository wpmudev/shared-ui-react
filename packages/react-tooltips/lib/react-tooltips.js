import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Button } from '@wpmudev/react-button';
import { ButtonIcon } from '@wpmudev/react-button-icon';

const Wrapper = styled.span`
	position: relative;
	display: inline-block;

	&.sui-tooltip {
		&.sui-tooltip:after {
			content: unset;
		}
		[role='tooltip'] {
			min-width: var(--tooltip-width, 40px);
			opacity: 0;
			position: absolute;
			left: 50%;
			bottom: 100%;
			margin-bottom: 10px;
			padding: 8px 12px;
			border-radius: 4px;
			background-color: #333;
			transform: translateX(-50%);
			color: #fff;
			font: 500 12px/18px Roboto, Arial, sans-serif;
			letter-spacing: -0.25px;
			text-transform: none;
			white-space: nowrap;
			transition: 0.2s;
			pointer-events: none;
			@media (max-width: 782px) {
				&.sui-tooltip-mobile {
					min-width: var(--tooltip-width-mobile, 120px);
					white-space: normal;
				}
			}
		}

		button.sui__tooltip-elem {
			&.sui-button,
			&.sui-button-icon {
				margin-right: 0;
			}
		}
	}

	&.show {
		.sui__tooltip-elem + [role='tooltip'],
		&:before {
			opacity: 1 !important;
			transition: 0.2s !important;
		}
	}

	&.hide {
		.sui__tooltip-elem + [role='tooltip'],
		&:before {
			opacity: 0 !important;
			transition: 0.2s !important;
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

	&[class*='sui-tooltip-bottom-'] [role='tooltip'],
	&.sui-tooltip-bottom [role='tooltip'] {
		top: 100%;
		bottom: unset;
		margin-top: 10px;
		margin-bottom: 0;
	}

	&.sui-tooltip-bottom-left [role='tooltip'] {
		left: 0;
		right: unset;
		transform: translateX(0);
	}

	&.sui-tooltip-bottom-right [role='tooltip'] {
		left: unset;
		right: 0;
		transform: translateX(0);
	}

	&.sui-tooltip-right [role='tooltip'] {
		top: 50%;
		bottom: unset;
		left: 100%;
		margin-left: 10px;
		margin-bottom: 0;
		transform: translateY(-50%);
	}

	&.sui-tooltip-left [role='tooltip'] {
		top: 50%;
		right: 100%;
		bottom: unset;
		left: unset;
		margin-right: 10px;
		margin-bottom: 0;
		transform: translateY(-50%);
	}
`;

export default function ToolTips({
	className,
	buttonText,
	tooltipText,
	position,
	id,
	customWidth,
	icon,
	iconLabel,
	iconName,
	customMobileWidth,
}) {
	const [isOpen, setIsOpen] = useState(false);
	let tooltipWidth = {};
	let classes = isOpen ? 'sui-tooltip show ' : 'sui-tooltip hide';

	// add classname in class
	className ? (classes += ` ${className}`) : null;

	// if custom width is set, use it
	customWidth ? (tooltipWidth['--tooltip-width'] = `${customWidth}px`) : '';

	// if custom mobile width is set, use it
	customMobileWidth ? (tooltipWidth['--tooltip-width-mobile'] = `${customMobileWidth}px`) : '';

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

	// if mobile width is set, add class
	if (customMobileWidth) {
		classes = classes + ' sui-tooltip-mobile';
	}

	return (
		<Wrapper className={classes}>
			{icon ? (
				<ButtonIcon
					label={iconLabel}
					icon={iconName}
					className="sui__tooltip-elem"
					aria-describedby={id}
					onFocus={() => setIsOpen(true)}
					onBlur={() => setIsOpen(false)}
					onMouseEnter={() => setIsOpen(true)}
					onMouseLeave={() => setIsOpen(false)}
				/>
			) : (
				<Button
					label={buttonText}
					className="sui__tooltip-elem"
					aria-describedby={id}
					onFocus={() => setIsOpen(true)}
					onBlur={() => setIsOpen(false)}
					onMouseEnter={() => setIsOpen(true)}
					onMouseLeave={() => setIsOpen(false)}
				/>
			)}
			<div
				id={id}
				role="tooltip"
				aria-hidden={!isOpen}
				aria-live="polite"
				tab-index={isOpen ? '0' : '-1'}
				style={tooltipWidth}
			>
				{tooltipText}
			</div>
		</Wrapper>
	);
}
