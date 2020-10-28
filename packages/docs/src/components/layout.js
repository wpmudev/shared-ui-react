import React from 'react'

export default ( props ) => {
	return (
		<div className="sui-wrap">
			<main id='content'>
				{ props.children }
			</main>
		</div>
	)
}
