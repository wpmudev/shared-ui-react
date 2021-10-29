import React, { useState, useEffect } from "react";

export const ProgressBar = ({ progress, ...args }) => {
	return (
		<div className={args.outlined && "sui-progress-block"}>
			<div className="sui-progress">{args.content(progress)}</div>
		</div>
	);
};
export const bar = progress => {
	return (
		<div className="sui-progress-bar" aria-hidden="true">
			<span style={{ width: progress + "%" }}></span>
		</div>
	);
};

export const pecentage = progress => {
	return <span class="sui-progress-text">{progress}%</span>;
};

export const progressIcon = () => {
	return (
		<span class="sui-progress-icon" aria-hidden="true">
			<span class="sui-icon-loader sui-loading"></span>
		</span>
	);
};
export const closeBtn = func => {
	return (
		<button onClick={func} class="sui-button-icon sui-tooltip" data-tooltip="Cancel">
			<span class="sui-icon-close" aria-hidden="true"></span>
		</button>
	);
};
