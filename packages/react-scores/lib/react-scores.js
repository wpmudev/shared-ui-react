import React from 'react';

export const Scores = ({ type, size, score }) => {
	let classes = ['sui-circle-score', 'loaded'];

	// add class based on type
	switch (type) {
		case 'error':
			classes.push('sui-grade-f');
			break;
		case 'warning':
			classes.push('sui-grade-c');
			break;
		case 'success':
			classes.push('sui-grade-a');
			break;
		default:
			break;
	}

	// switch size of score element
	switch (size) {
		case 'large':
			classes.push('sui-circle-score-lg');
			break;
		case 'default':
		default:
			break;
	}

	return (
		<div className={classes.join(' ')} data-score={score}>
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<circle strokeWidth="16" cx="50" cy="50" r="42"></circle>
				<circle
					strokeWidth="16"
					cx="50"
					cy="50"
					r="42"
					strokeDasharray="0,3943.4067435231395"
					style={{ animation: `3s ease 0s 1 normal forwards running sui${score}` }}
				></circle>
			</svg>
			<span className="sui-circle-score-label">{score}</span>
		</div>
	);
};
