import React from 'react'

export default ( props ) => {
	return (
		<div id="wpcontent">

				<div role="main" id="wpbody">

					<div id="wpbody-content" style={{ overflow: 'hidden' }}>

						<main className="sui-wrap">

							{ props.children }

						</main>

					</div>

				</div>

				<div className="clear"></div>

			</div>
	)
}
