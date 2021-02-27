import React, { Component } from "react";

export class ButtonIcon extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.href && "" !== this.props.href) {
			return (
				<a className="sui-button-icon" {...this.props}>
					<span className={`sui-icon-${this.props.icon}`} aria-hidden="true" />
					<span className="sui-screen-reader-text">
						{this.props.label && "" !== this.props.label
							? this.props.label
							: "Button"}
					</span>
				</a>
			);
		}

		return (
			<button className="sui-button-icon" {...this.props}>
				<span className={`sui-icon-${this.props.icon}`} aria-hidden="true" />
				<span className="sui-screen-reader-text">
					{this.props.label && "" !== this.props.label
						? this.props.label
						: "Button"}
				</span>
			</button>
		);
	}
}
