import React, { Component } from 'react';

export class Notifications extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		let classMain = 'sui-notice';
		let classIcon = 'sui-notice-icon sui-md';

		switch( this.props.type ) {
			case 'info':
			case 'success':
			case 'warning':
			case 'error':
			case 'upsell':
				classMain += ' sui-notice-' + this.props.type;
				break;

			case 'loading':
				classIcon += ' sui-icon-loader sui-loading';
				break;

			default:
				classIcon += ' sui-icon-info';
				break;
		}

		return (
			<div className={ classMain }>

				<div className="sui-notice-content">

					<div className="sui-notice-message">

						<span className={ classIcon } aria-hidden="true" />

						<p>{ this.props.message }</p>

					</div>

				</div>

			</div>
		);
	}
}