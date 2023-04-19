import React, { Fragment, useState, useEffect } from 'react';

export const Toggle = ({
	id,
	label,
	hideLabel,
	description,
	hideDescription,
	checked,
	disabled,
	children,
	cbFunction = e => {},
	...args
}) => {
	const [state, setState] = useState( checked );

	const initialState = () => {
		if ( !isUndefined( checked, 'boolean' ) ) {
			setState( checked );
		}
	}

	const changeState = e => {
		setState( e.target.checked );
		cbFunction( e );
	}

	// Set initial state.
	useEffect( () => initialState, []);

	const hasLabel = !isUndefined( label ) ? true : false;
	const hasDescription = !isUndefined( description ) ? true : false;
	const hasContent = !isUndefined( children ) ? true : false;

	return (
		<Fragment>
			<label htmlFor={ id } className="sui-toggle">
				<input
					type="checkbox"
					id={ id }
					{ ... ( hasLabel && { 'aria-labelledby': id + '--label' } ) }
					{ ... ( hasDescription && { 'aria-describedby': id + '--description' } ) }
					{ ... ( hasContent && { 'aria-controls': id + '--content' } ) }
					{ ... ( true === disabled && { disabled: true } ) }
					defaultChecked={ state }
					onClick={ e => changeState( e ) }
					{ ...args }
					/>

				<span className="sui-toggle-slider" aria-hidden="true" />

				{ hasLabel && (
					<span
						id={`${ id }--label`}
						className={`sui-toggle-label${ !isUndefined( hideLabel ) ? ' sui-screen-reader-text' : '' }`}>
						{ label }
					</span>
				)}

				{ hasDescription && (
					<span
						id={`${ id }--description`}
						className={`sui-description${ true === hideDescription ? ' sui-screen-reader-text' : '' }`}>
						{ description }
					</span>
				)}
			</label>

			{( hasContent && state ) && (
				<div
					tabIndex={ 0 }
					id={`${ id }--content`}
					className="sui-toggle-content">
					{ children }
				</div>
			)}
		</Fragment>
	);
}

// Check if element is undefined.
const isUndefined = (element, type) => {
	const isValid = 'undefined' !== typeof element;
	const isNotEmpty = '' !== element;

	if ( element && isValid && isNotEmpty ) {
		if ( type === 'number' ) {
			if ( !Number.isNaN(element) ) {
				return false;
			}
		} else if ( type === 'boolean' ) {
			if ( 'boolean' === typeof element ) {
				return false;
			}
		} else {
			return false;
		}
	}

	return true;
}