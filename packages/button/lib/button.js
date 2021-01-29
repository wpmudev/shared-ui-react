import React, { Component } from "react";

export class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const loader = (
			<span className="sui-icon-loader sui-loading" aria-hidden="true" />
		);

		let label = (
			<React.Fragment>
				{this.props.icon && (
					<span className={"sui-icon-" + this.props.icon} aria-hidden="true" />
				)}
				{this.props.label}
			</React.Fragment>
		);

		// @note Remove on SUI3.
		if (this.props.loading) {
			label = <span className="sui-loading-text">{label}</span>;
		}

		let className = "sui-button";

		// Set button color.
		switch (this.props.color) {
			case "blue":
			case "green":
			case "red":
			case "orange":
			case "purple":
			case "yellow":
			case "white":
				className += " sui-button-" + this.props.color;
				break;
		}

		// Set button style.
		switch (this.props.design) {
			case "ghost":
			case "outlined":
				className += " sui-button-" + this.props.design;
				break;
		}

		// Set loading class.
		if (this.props.loading) {
			className += " sui-button-onload";
		}

		if (this.props.href) {
			return (
				<a
					className={className}
					disabled={this.props.disabled || this.props.loading}
					{...this.props}>
					{this.props.loading ? loader : label}
				</a>
			);
		}

		return (
			<button
				className={className}
				disabled={this.props.disabled || this.props.loading}
				{...this.props}>
				{this.props.loading && loader}
				{label}
			</button>
		);
	}
}
