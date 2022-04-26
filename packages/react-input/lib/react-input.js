import React from 'react';

const Input = ({
	id,
	size,
	label,
	description,
	type = 'text',
	errorStatus,
	errorDescription,
	suffix,
	...props
}) => {
	const uniqueId = id && '' !== id ? id : props.property;

	let clazz = 'sui-form-control';

	suffix && (clazz += ' sui-field-has-suffix');

	switch (size) {
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
		<div className={`sui-form-field${errorStatus ? ' sui-form-field-error' : ''}`}>
			{label && (
				<label htmlFor={uniqueId} className="sui-label">
					{label}
				</label>
			)}

			<input id={uniqueId} type={type} className={clazz} {...props} />

			{suffix && (
				<span class="sui-field-suffix">{suffix}</span>
			)}

			{errorStatus && errorDescription && (
				<div className="sui-error-message">{errorDescription}</div>
			)}
			{description && <p className="sui-description">{description}</p>}
		</div>
	);
};

export { Input };
