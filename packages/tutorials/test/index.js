import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import { Tutorials } from '../src'

expect.extend( matchers )

const renderJSON = el => renderer.create( el ).toJSON()

describe( 'Tutorials', () => {
	test( 'renders', () => {
		const json = renderJSON(
			<Tutorials />
		)
		expect( json ).toMatchSnapshot()
	})
	test( 'passes ref', () => {
		const ref = React.createRef( null )
		render (
			<Tutorials ref={ ref } />
		)
		expect( ref.current.tagName ).toBe( 'TUTORIALS' )
	})
})