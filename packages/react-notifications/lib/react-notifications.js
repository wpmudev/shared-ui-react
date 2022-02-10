import React, { Component } from 'react';
import { ButtonIcon } from '@wpmudev/react-button-icon';

export class Notifications extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hide: false
		};

		this.close = this.close.bind( this );
	}

	close = () => {
		this.setState({
			hide: true
		});
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({ hide:true})
		}, this.props.hideAfter);
	}

	render() {
		const { hide } = this.state;
		
		let classMain = "sui-notice";
		let classIcon = "sui-notice-icon sui-md";

		switch (this.props.type) {
			case "info":
			case "success":
			case "warning":
			case "error":
			case "upsell":
				classMain += " sui-notice-" + this.props.type;
				classIcon += " sui-icon-info";
				break;

			case "loading":
				classIcon += " sui-icon-loader sui-loading";
				break;

			default:
				classIcon += " sui-icon-info";
				break;
		}

		const message = (
			<div className="sui-notice-message">
				<span className={classIcon} aria-hidden="true" />
				{this.props.children}
			</div>
		);

		const actions = (
			<div className="sui-notice-actions">
				<ButtonIcon
					icon="check"
					label="Hide"
					onClick={ e => this.close(e) }
				/>
			</div>
		);

		if ( !hide ) {
			return (
				<div className={classMain}>
					<div className="sui-notice-content">
						{ message }
						{ this.props.dismiss && actions }
					</div>
				</div>
			);
		}

		return null;
	}
}
