import React from 'react';

const Input = React.forwardRef(({
	id,
	label,
	description,
	type = 'text',
	errorStatus,
	errorDescription,
	size,
	fieldSize,
	suffix,
	prefix,
	...props
}, ref) => {
	const uniqueId = id && '' !== id ? id : props.property;

	let fieldClasses = 'sui-form-field';

	switch ( fieldSize ) {
		case 'sm':
		case 'small':
			fieldClasses += ' sui-input-sm';
			break;

		case 'md':
		case 'medium':
			fieldClasses += ' sui-input-md';
			break;

		default:
			// Nothing.
			break;
	}

	if ( errorStatus ) {
		fieldClasses += ' sui-form-field-error';
	}

	let inputClasses = 'sui-form-control';

	suffix && (inputClasses += ' sui-field-has-suffix');
	prefix && (inputClasses += ' sui-field-has-prefix');

	switch ( size ) {
		case 'sm':
		case 'small':
			inputClasses += ' sui-input-sm';
			break;

		case 'md':
		case 'medium':
			inputClasses += ' sui-input-md';
			break;

		default:
			// Nothing.
			break;
	}

	return (
		<div className={ fieldClasses }>
			{ label && (
				<label htmlFor={ uniqueId } className="sui-label">
					{ label }
				</label>
			)}

			{prefix && (
				<span class="sui-field-prefix">{prefix}</span>
			)}

			<input id={ uniqueId } type={ type } className={ inputClasses } ref={ref} { ...props } />

			{suffix && (
				<span class="sui-field-suffix">{suffix}</span>
			)}

			{ errorStatus && errorDescription && (
				<div className="sui-error-message">{ errorDescription }</div>
			)}

			{ description && <p className="sui-description">{ description }</p> }
		</div>
	);
});

export { Input };
