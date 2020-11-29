import React from 'react';

export const Box = ({
	children,
	...props
}) => {
	return (
		<div
			className="sui-box"
			{ ...props }
		>
			{ children }
		</div>
	);
}

export const BoxHeader = ({
	title,
	titleIcon = '',
	titleTag = '',
	titleTagColor = '',
	children,
	...props
}) => {
	let titleTagClass = 'sui-tag';

	switch( titleTagColor ) {
		case 'red':
		case 'yellow':
		case 'green':
		case 'blue':
		case 'purple':
			titleTagClass += ' sui-tag-' + titleTagColor;
			break;
	}

	return (
		<div
			className="sui-box-header"
			{ ...props }
		>
			{ '' !== title &&
				<h3 className="sui-box-title">
					{ '' !== titleIcon &&
						<span
							className={ `sui-icon-${ titleIcon } sui-md` }
							aria-hidden="true"
						/>
					}
					{ title }
					{ '' !== titleTag &&
						<span
							className={ titleTagClass }
							style={ {
								verticalAlign: 'top',
								marginTop: 2,
								marginLeft: 10,
							} }
						>{ titleTag }</span>
					}
				</h3>
			}

			<div className="sui-actions-right">
				{ children }
			</div>

		</div>
	);
}

export const BoxBody = ({
	children,
	...props
}) => {
	return (
		<div
			className="sui-box-body"
			{ ...props }
		>
			{ children }
		</div>
	);
}

export const BoxFooter = ({
	children,
	...props
}) => {
	return (
		<div
			className="sui-box-footer"
			{ ...props }
		>
			{ children }
		</div>
	);
}

export const BoxSection = ({
	title,
	description,
	children,
	...props
}) => {
	return (
		<div
			className="sui-box-settings-row"
			{ ...props }
		>
			{ (
				( title && '' !== title ) ||
				( description && '' !== description )
			) &&
				<div className="sui-box-settings-col-1">

					{ '' !== title &&
						<h4 className="sui-settings-label">{ title }</h4>
					}

					{ '' !== description &&
						<p className="sui-description">{ description }</p>
					}

				</div>
			}
			<div className="sui-box-settings-col-2">
				{ children }
			</div>
		</div>
	);
}
