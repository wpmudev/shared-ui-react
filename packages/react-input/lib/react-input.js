import React from 'react';

const Input = ({
	id,
	constrainedField,
	size,
	label,
	description,
	type = 'text',
	errorStatus,
	errorDescription,
	prefix,
	suffix,
	...props
}) => {
	const uniqueId = id && '' !== id ? id : props.property;

	let clazz = 'sui-form-control' + (suffix ? ' sui-field-has-suffix' : '') + (prefix ? ' sui-field-has-prefix' : '');
	let sizeClass = '';

	switch (size) {
		case 'sm':
		case 'small':
			sizeClass += ' sui-input-sm';
			break;

		case 'md':
		case 'medium':
			sizeClass += ' sui-input-md';
			break;
	}

	return (
		<div className={`sui-form-field${errorStatus ? ' sui-form-field-error' : ''}${constrainedField ? sizeClass : ''}`}>
			{label && (
				<label htmlFor={uniqueId} className="sui-label">
					{label}
				</label>
			)}
			
			{prefix && (<span className="sui-field-prefix">{prefix}</span>)}
			<input id={uniqueId} type={type} className={`${!constrainedField ? clazz + sizeClass : clazz}`} {...props} />
			{suffix && (<span className="sui-field-suffix">{suffix}</span>)}
			
			{errorStatus && errorDescription && (
				<div className="sui-error-message">{errorDescription}</div>
			)}
			{description && <p className="sui-description">{description}</p>}
		</div>
	);
};

export { Input };
