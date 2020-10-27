import React from 'react'

export const SettingsRow = ({
	title,
	description
}) => {
	const content = React.Children.map(
		this.props.children,
		children => {
			return children;
		}
	);

	return (
		<div className="sui-box-settings-row">

			{ ( title || description ) &&
				<div className="sui-box-settings-col-1">
					{ label && <h3 className="sui-settings-label">{ label }</h3> }
					{ description && <p className="sui-description">{ description }</p> }
				</div>
			}

			<div className="sui-box-settings-col-2">
				{ content }
			</div>

		</div>
	)
}
