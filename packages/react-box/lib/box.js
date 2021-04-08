import React from "react";
import styled from 'styled-components';

// UTILS: Default Values.
const utils = {
	gutter: 30,
	gutter_md: 20
};

const screen = {
	mobile: 480,
	tablet: 783,
	laptop: 1200,
	desktop: 1500
};

const device = {
	mobile: `(min-width: ${screen.mobile}px)`,
	tablet: `(min-width: ${screen.tablet}px)`,
	laptop: `(min-width: ${screen.laptop}px)`,
	desktop: `(min-width: ${screen.desktop}px)`
};

export const Box = ({ children, className, ...props }) => {
	return (
		<div
			className={'undefined' !== typeof className && '' !== className
				? `sui-box ${className}`
				: 'sui-box'
			}
			{...props}>
			{children}
		</div>
	);
};

export const BoxTitle = ({
	icon,
	tagLabel,
	tagColor,
	tagSize,
	tagDesign,
	className,
	children,
	...props
}) => {
	let tagClass = 'sui-tag';

	switch (tagColor) {
		case 'red':
		case 'yellow':
		case 'green':
		case 'blue':
		case 'purple':
			tagClass += ' sui-tag-' + tagColor;
			break;
	}

	switch (tagSize) {
		case 'sm':
		case 'small':
			tagClass += ' sui-tag-sm';
			break;
	}

	switch (tagDesign) {
		case 'outlined':
			tagClass += ' sui-tag-ghost';
			break;
	}

	return (
		<h3
			className={'undefined' !== typeof className && '' !== className
				? `sui-box-title ${className}`
				: 'sui-box-title'
			}
			{...props}>
			{icon && "" !== icon && (
				<span className={`sui-icon-${icon} sui-md`} aria-hidden="true" />
			)}
			{children}
			{tagLabel && '' !== tagLabel && (
				<span
					className={tagClass}
					style={ { marginLeft: 10 } }>
					{tagLabel}
				</span>
			)}
		</h3>
	);
};

const Header = styled.div.attrs(props => ({ props }))`
padding: ${utils.gutter_md / 2}px ${utils.gutter_md}px;
border: 0 solid #E6E6E6;
border-bottom-width: ${props => props.border || '1'}px;

@media ${device.tablet} {
	display: ${props => props.stacked ? 'block' : 'flex'};
	${props => props.stacked ? '' : 'flex-wrap: row nowrap;'}
	padding: ${utils.gutter / 2}px ${utils.gutter}px;
}
`;

export const BoxHeader = ({
	title,
	titleIcon,
	titleTagLabel,
	titleTagColor,
	titleTagSize,
	titleTagDesign,
	className,
	children,
	...props
}) => {
	return (
		<Header {...props}>
			{title && '' !== title && (
				<BoxTitle
					icon={titleIcon}
					tagLabel={titleTagLabel}
					tagColor={titleTagColor}
					tagSize={titleTagSize}
					tagDesign={titleTagDesign}>
					{title}
				</BoxTitle>
			)}
			<div className="sui-actions-right">{children}</div>
		</Header>
	);
};

export const BoxBody = ({ className, children, ...props }) => {
	return (
		<div
			className={'undefined' !== typeof className && '' !== className
				? `sui-box-body ${className}`
				: 'sui-box-body'
			}
			{...props}>
			{children}
		</div>
	);
};

/**
 * display: block or inline
 * alignment: (block) left or center, (inline) sides or center
 * paddingTop: 30
 * paddingRight: 30
 * paddingBottom: 30
 * paddingLeft: 30
 * border: 1
 */
const Footer = styled.div.attrs(props => ({ props }))`
.sui-wrap && {
	flex-flow: row wrap;
	display: ${props => 'block' !== props.display ? 'flex' : 'block' };
	${props => 'block' !== props.display && 'flex-flow: row wrap;' }
	${props => 'block' !== props.display && (
		'center' !== props.alignment
			? 'justify-content: space-between;'
			: 'justify-content: center;'
	)}
	margin: 0;
	padding-top: ${props => props.paddingTop || 0 === props.paddingTop
		? ( props.paddingTop > 29
			? props.paddingTop - 10
			: props.paddingTop)
		: utils.gutter_md
	}px;
	padding-right: ${props => props.paddingRight || 0 === props.paddingRight
		? ( props.paddingRight > 29
			? props.paddingRight - 10
			: props.paddingRight)
		: utils.gutter_md
	}px;
	padding-bottom: ${props => props.paddingBottom || 0 === props.paddingBottom
		? ( props.paddingBottom > 29
			? props.paddingBottom - 10
			: props.paddingBottom)
		: utils.gutter_md
	}px;
	padding-left: ${props => props.paddingLeft || 0 === props.paddingLeft
		? ( props.paddingLeft > 29
			? props.paddingLeft - 10
			: props.paddingLeft)
		: utils.gutter_md
	}px;
	border: 0 solid #E6E6E6;
	border-top-width: ${props => props.border || (0 === props.border || '' === props.border)
		? props.border
		: 1
	}px;
	${props => 'block' === props.display && (
		'center' === props.alignment && 'text-align: center;'
	)}

	${props => 'block' !== props.display && '> * { max-width: 100%; flex: 0 0 auto; }' }
	${props => 'block' !== props.display && '> * + * { margin-left: 10px; }' }

	@media ${device.tablet} {
		padding-top: ${props => props.paddingTop || 0 === props.paddingTop
			? props.paddingTop
			: utils.gutter
		}px;
		padding-right: ${props => props.paddingRight || 0 === props.paddingRight
			? props.paddingRight
			: utils.gutter
		}px;
		padding-bottom: ${props => props.paddingBottom || 0 === props.paddingBottom
			? props.paddingBottom
			: utils.gutter
		}px;
		padding-left: ${props => props.paddingLeft || 0 === props.paddingLeft
			? props.paddingLeft
			: utils.gutter
		}px;
	}
}
`;

export const BoxFooter = ({ className, children, ...props }) => {
	return (
		<Footer className={ className } {...props}>
			{children}
		</Footer>
	);
};

export const BoxSection = ({ title, description, className, children, ...props }) => {
	return (
		<div
			className={'undefined' !== typeof className && '' !== className
				? `sui-box-settings-row ${className}`
				: 'sui-box-settings-row'
			}
			{...props}>
			{((title && "" !== title) || (description && "" !== description)) && (
				<div className="sui-box-settings-col-1">
					{"" !== title && <h4 className="sui-settings-label">{title}</h4>}

					{"" !== description && (
						<p className="sui-description">{description}</p>
					)}
				</div>
			)}
			<div className="sui-box-settings-col-2">{children}</div>
		</div>
	);
};
