import React from 'react';

const Input = ({
	id,
	size,
	label,
	description,
	type = 'text',
	errorStatus,
	errorDescription,
	prefix,
	...props
}) => {
	const uniqueId = id && '' !== id ? id : props.property;

	let clazz = 'sui-form-control';

	prefix && (clazz += ' sui-field-has-prefix');

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

			{prefix && (
				<span class="sui-field-prefix">{prefix}</span>
			)}

			<input id={uniqueId} type={type} className={clazz} {...props} />
			{errorStatus && errorDescription && (
				<div className="sui-error-message">{errorDescription}</div>
			)}
			{description && <p className="sui-description">{description}</p>}
		</div>
	);
};

export { Input };
