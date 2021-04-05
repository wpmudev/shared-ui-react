import React from "react";

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
		<div
			className={'undefined' !== typeof className && '' !== className
				? `sui-box-header ${className}`
				: 'sui-box-header'
			}
			{...props}>
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
		</div>
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

export const BoxFooter = ({ className, children, ...props }) => {
	return (
		<div
			className={'undefined' !== typeof className && '' !== className
				? `sui-box-footer ${className}`
				: 'sui-box-footer'
			}
			{...props}>
			{children}
		</div>
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
