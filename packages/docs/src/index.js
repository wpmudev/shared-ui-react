import React from 'react'
import Layout from './components/layout'
import './styles/wordpress.scss'
import './styles/shared-ui.scss'

export const wrapPageElement = ({ element, props }) =>
	<Layout { ...props }>
		{ element }
	</Layout>
