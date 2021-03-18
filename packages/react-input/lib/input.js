import React, { Component } from 'react';

export class Input extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const uniqueId = ( this.props.id && '' !== this.props.id )
			? this.props.id
			: this.props.property;

		const type = ( this.props.type && '' !== this.props.type )
			? this.props.type
			: 'text';

		let clazz = 'sui-form-control';

		return <input
			id={ uniqueId }
			type={ type }
			{ ... ( this.props.min && 'number' === type ) && { min: this.props.min } }
			{ ... ( this.props.max && 'number' === type ) && { max: this.props.max } }
			{ ... ( this.props.maxLength && 'text' === type ) && { maxlength: this.props.maxLength } }
			{ ... ( this.props.placeholder && '' !== this.props.placeholder ) && { placeholder: this.props.placeholder } }
			className={ clazz }
			{ ... this.props.disabled && { disabled: true } }
		/>;
	}
}