import React from 'react';
import cx from 'clsx';
import styles from './styles.css';

const Button = ({ children, className, color, ...rest }) => {
	const classes = cx(
		styles.Button,
		{
			[styles.ButtonPrimary]: color === '',
			[styles.ButtonBlue]: color === 'blue'
		},
		className
	);

	return (
		<button
			{ ...rest }
			className={ classes }
		>
			{ children }
		</button>
	);
};

export { Button };