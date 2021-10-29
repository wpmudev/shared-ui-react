import React from 'react';

export const ProgressBar = ({ progress, ...args }) => {
	return (
		<div className={args.outlined && 'sui-progress-block'}>
			<div className="sui-progress">{args.content(progress)}</div>
		</div>
	);
};
export const bar = (progress) => {
	return (
		<div className="sui-progress-bar" aria-hidden="true">
			<span style={{ width: progress + '%' }}></span>
		</div>
	);
};

export const pecentage = (progress) => {
	return <span className="sui-progress-text">{progress}%</span>;
};

export const progressIcon = () => {
	return (
		<span className="sui-progress-icon" aria-hidden="true">
			<span className="sui-icon-loader sui-loading"></span>
		</span>
	);
};
export const closeBtn = (func) => {
	return (
		<button onClick={func} className="sui-button-icon sui-tooltip" data-tooltip="Cancel">
			<span className="sui-icon-close" aria-hidden="true"></span>
		</button>
	);
};
