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
			const type = child.props.mdxType
			if ( type !== 'h1' ) return [ ...acc, child ]
			return [
				...acc,
				child,
			]
		}, [] )

	return (
		<React.Fragment>
		{ title && (
			<Helmet>
			<title>{ title } | SUI React</title>
			</Helmet>
		)}
		{ children }
		</React.Fragment>
	)
}
