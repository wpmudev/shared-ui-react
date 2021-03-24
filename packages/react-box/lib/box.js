import React from "react";

export const Box = ({ children, ...props }) => {
	return (
		<div className="sui-box" {...props}>
			{children}
		</div>
	);
};

export const BoxTitle = ({ icon, extraClasses, children, ...props }) => {
	return (
		<h3 className={`sui-box-title ${extraClasses}`} {...props}>
			{icon && "" !== icon && (
				<span className={`sui-icon-${icon} sui-md`} aria-hidden="true" />
			)}
			{children}
		</h3>
	);
};

export const BoxHeader = ({ title, titleIcon, extraClasses, children, ...props }) => {
	return (
		<div className={`sui-box-header ${extraClasses || '' }`} {...props}>
			{title && "" !== title && <BoxTitle icon={titleIcon}>{title}</BoxTitle>}

			{children}
		</div>
	);
};

export const BoxBody = ({ children, ...props }) => {
	return (
		<div className="sui-box-body" {...props}>
			{children}
		</div>
	);
};

export const BoxFooter = ({ children, ...props }) => {
	return (
		<div className="sui-box-footer" {...props}>
			{children}
		</div>
	);
};

export const BoxSection = ({ title, description, children, ...props }) => {
	return (
		<div className="sui-box-settings-row" {...props}>
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
