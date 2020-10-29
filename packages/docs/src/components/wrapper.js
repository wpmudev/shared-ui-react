import React from 'react'
import { Styled } from 'theme-ui'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Box, Flex } from 'rebass'
import { globalHistory } from '@reach/router'

export const wrapper = ({
  title,
  ...props
}) => {
	const children = React.Children.toArray( props.children )
		.reduce( ( acc, child ) => {
			return [
				...acc,
				child,
			]
		}, [] )

	return (
		<React.Fragment>
		<Helmet
			bodyAttributes={{
				class: 'wp-admin wp-core-ui js auto-fold sui-2-9-6 auto-fold admin-bar admin-color-fresh sticky-menu svg'
			}}
		/>
		{ children }
		</React.Fragment>
	)
}
