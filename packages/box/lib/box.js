import React from "react";

export const Box = ({ children, ...props }) => {
	return (
		<div className="sui-box" {...props}>
			{children}
		</div>
	);
};

export const BoxTitle = ({ icon, children, ...props }) => {
	return (
		<h3 className="sui-box-title" {...props}>
			{icon && "" !== icon && (
				<span className={`sui-icon-${icon} sui-md`} aria-hidden="true" />
			)}
			{children}
		</h3>
	);
};

export const BoxHeader = ({ title, titleIcon, children, ...props }) => {
	return (
		<div className="sui-box-header" {...props}>
			{title && "" !== title && <BoxTitle icon={titleIcon}>{title}</BoxTitle>}

			<div className="sui-actions-right">{children}</div>
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
