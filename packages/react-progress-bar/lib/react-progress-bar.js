import React from 'react';
import { ButtonIcon } from '@wpmudev/react-button-icon';

export const ProgressBar = ({
	classes,
	now,
	hasLoader = true,
	hasLabel = true,
	hasCancel = true,
	hasFrame = false,
	hasLegend = true,
	sourceLang,
	cbFunction = () => {},
	...props
}) => {
	const extraClasses = 'undefined' !== typeof classes && '' !== classes ? ' ' + classes : '';
	const currValue = Number(now);
	const value = currValue && currValue > 0 ? (currValue > 100 ? 100: currValue) : 0;
	const lang = Object.assign(
		{
			cancel: 'Cancel',
			legend: 'Status...',
		},
		sourceLang
	);

	const loaderMarkup = hasLoader && (
		<span className="sui-progress-icon">
			<span className="sui-icon-loader sui-loading" />
		</span>
	);

	const loaderText = hasLabel && (
		<span className="sui-progress-text">{value}%</span>
	);

	const loaderBar = (
		<div className="sui-progress-bar">
			<span style={{ width: `${value}%` }} />
		</div>
	);

	const innerMarkup = (
		<div className={`sui-progress${extraClasses}`} {...props}>
			{loaderMarkup}
			{loaderText}
			{loaderBar}
			{hasCancel && (
				<ButtonIcon icon="close" iconSize="sm" label={lang.cancel} onClick={() => cbFunction()} />
			)}
		</div>
	);

	return (
		<React.Fragment>
			{hasFrame && (
				<React.Fragment>
					<div className="sui-progress-block">{innerMarkup}</div>
					{hasLegend && (
						<div className="sui-progress-state">
							<span>{lang.legend}</span>
						</div>
					)}
				</React.Fragment>
			)}
			{!hasFrame && innerMarkup}
		</React.Fragment>
	);
};
