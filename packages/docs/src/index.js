import React from 'react'
import Layout from './components/layout'

export const wrapPageElement = ({ element, props }) =>
	<div className="sui-2-9-6">
		<Layout { ...props }>
			{ element }
		</Layout>
	</div>
