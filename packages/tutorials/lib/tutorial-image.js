import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from './style-helpers';

const FeaturedImage = styled.div.attrs( () => ({
	tabIndex: '-1',
	'aria-hidden': true
}) )`
	${ props => props.slider ? 'width: 66px;' : '' }
	height: ${ props => props.slider ? '54px' : '140px' };
	margin: ${ props => props.slider ? '0 10px 0 0' : '-20px -20px 20px' };
	${ props => props.slider ? 'border-radius: 4px;' : '' }
	display: block;
	background-color: #FFF;
	background-image: url(${ props => props.src || 'none' });
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export class TutorialsFeaturedImage extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			media: []
		};
	}

	componentDidMount() {
		const API_URL = 'https://premium.wpmudev.org/blog/wp-json/wp/v2/media/';
		const QUERY_ID = this.props.media;

		// GET media using fetch.
		fetch( API_URL + QUERY_ID )
			.then( response => response.json() )
			.then(
				( data ) => {
					this.setState({
						isLoaded: true,
						media: data.guid.rendered
					});
				},
				( error ) => {
					this.setState({
						isLoaded: true,
						error
					});
				},
			);
	}

	render() {
		const { media, error, isLoaded } = this.state;

		if ( error ) {
			return;
		} else if ( ! isLoaded ) {
			return <div>Loading...</div>;
		} else {
			return (
				<FeaturedImage
					src={ media }
					{ ...this.props }
				/>
			);
		}
	}
}