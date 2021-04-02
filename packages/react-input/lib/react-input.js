import React from 'react';

const Input = ( {
	id,
	size,
	label,
	description,
	type = 'text',
	...props
} ) => {
	const uniqueId = ( id && '' !== id )
		? id
		: props.property;

	let clazz = 'sui-form-control';

	switch ( size ) {
		case 'sm':
		case 'small':
			clazz += ' sui-input-sm';
			break;

		case 'md':
		case 'medium':
			clazz += ' sui-input-md';
			break;
	}

	return (
		<div className="sui-form-field">
			{ label && (
				<label htmlFor={ uniqueId } className="sui-label">{ label }</label>
			) }

			<input
				id={ uniqueId }
				type={ type }
				className={ clazz }
				{ ... props }
			/>
			{ description && (
				<p className="sui-description">{ description }</p>
			) }
		</div>
	);
}

export { Input };