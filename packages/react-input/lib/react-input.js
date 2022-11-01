import React from 'react';

const Input = ({
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
}) => {
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

			<input id={ uniqueId } type={ type } className={ inputClasses } { ...props } />

			{suffix && (
				<span class="sui-field-suffix">{suffix}</span>
			)}

			{ errorStatus && errorDescription && (
				<div className="sui-error-message">{ errorDescription }</div>
			)}

			{ description && <p className="sui-description">{ description }</p> }
		</div>
	);
};

const InputWithRef = React.forwardRef(({
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
	const [showIcon, setShowIcon] = useState(true);

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

			{ type === 'password' ? (
				<div className="sui-with-button sui-with-button-icon">

					<input id={ uniqueId } type={ showIcon ? type : 'text' } className={ inputClasses } ref={ ref } { ...props } />

					<ButtonIcon icon={ showIcon ? "eye" : "eye-hide" } label={ showIcon ? "Show password" : "Hide password" } onClick={() => { setShowIcon(!showIcon);  }}/>

				</div>
			) : (
				<input id={ uniqueId } type={ type } className={ inputClasses } ref={ ref } { ...props } />
			)}

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

export { 
	Input,
	InputWithRef
};
