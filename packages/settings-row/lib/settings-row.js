import React from 'react';

export const SettingsRow = ({
	title,
	description,
	children,
	...props
}) => {
	let sidebar = '';
	let sidebarTitle = '';
	let sidebarDescription = '';

	if ( '' !== title ) {
		sidebarTitle = <h4 className="sui-settings-label">{ title }</h4>;
	}

	if ( '' !== description ) {
		sidebarDescription = <p className="sui-description">{ description }</p>;
	}

	if ( '' !== title || '' !== description ) {
		sidebar = (
			<div className="sui-box-settings-col-1">
				{ sidebarTitle }
				{ sidebarDescription }
			</div>
		);
	}

	return (
		<div
			className="sui-box-settings-row"
			{ ...props }
		>

			{ sidebar }

			<div className="sui-box-settings-col-2">
				{ children }
			</div>

		</div>
	);
}