import React from 'react'

export const Box = ( props ) => {
	const title = ( props.title && '' !== props.title ) ? props.title : false;
	const close = ( props.close && '' !== props.close )
		? <button className="sui-button-icon">
			<span className="sui-icon-close sui-md" aria-hidden="true" />
			<span className="sui-screen-reader-text">{ props.close }</span>
		</button>
		: false;

	const children = React.Children.map( props.children, child => {
		return child;
	} );

	return (
		<div className="sui-box">

			{ ( title || close ) &&
				<div className="sui-box-header">

					{ title &&
						<h2 className="sui-box-title">{ title }</h2>
					}

					{ close &&
						<div className="sui-actions-right">
							{ close }
						</div>
					}

				</div>
			}

			{ children }

		</div>
	);
}
