import React, { Component }  from 'react';
import styled from 'styled-components';
import { device } from './style-helpers';
import { Notifications } from '@wpmudev/react-notifications';
import { TutorialsFeaturedImage } from './tutorial-image';
import {
	Title,
	Excerpt,
	ReadMore,
	ReadTime
} from './commons';

let aria = aria || {};

aria.KeyCode = {
	TAB: 9,
	RETURN: 13,
	ESC: 27,
	SPACE: 32,
	PAGE_UP: 33,
	PAGE_DOWN: 34,
	END: 35,
	HOME: 36,
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	DELETE: 46
};

const ListWrapper = styled.ul`
	display: block;
	margin: 0;
	padding: 0;
	border: 0;

	@media ${ device.tablet } {
		display: flex;
		flex-flow: row wrap;
		margin: -15px;
	}
`;

const ListItem = styled.li`
	display: block;
	margin: 0 0 20px;

	&:last-child {
		margin-bottom: 0;
	}

	@media ${ device.tablet } {
		width: 50%;
		margin: 0;
		flex: 0 0 auto;
		padding: 15px;
	}

	@media ${ device.laptop } {
		width: 33.33%;
	}

	@media ${ device.desktop } {
		width: 25%;
	}

	@media (min-width: 1800px) {

		.sui-tutorials--page li {
			width: 20%;
		}
	}
`;

const Card = styled.div.attrs( props => ({
	tabIndex: 0,
	role: 'link',
	'data-href': props.link
}) )`
	overflow: hidden;
	cursor: pointer;
	padding: 20px 20px 30px;
	border-radius: 4px;
	background-color: #FFF;
	box-shadow: 0 0 0 1px #E6E6E6;
	transition: 0.2s ease all;

	* {
		pointer-events: none;
	}

	&:hover,
	&:focus {
		transform: scale(1.02);

		@media ${ device.tablet } {
			transform: scale(1.05);
		}
	}

	&:hover {
		box-shadow: 0 2px 7px 0 rgba(0,0,0,0.05);
	}

	&:focus {
		outline: none;
		box-shadow: 0 2px 7px 0 rgba(0,0,0,0.05), 0 0 2px 0 #17A8E3;
	}

	@media ${ device.tablet } {
		min-height: 100%;
	}
`;

const Footer = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	margin-top: 15px;
`;

export class TutorialsList extends Component {
	_isMounted = false;

	constructor( props ) {
		super( props );

		this.state = {
			posts: [],
			error: null,
			isLoaded: false,
		};

		this.openLink = this.openLink.bind( this );
		this.handleKeydown = this.handleKeydown.bind( this );
	}

	openLink = ( e ) => {
		let ref = e.target !== null ? e.target : e.srcElement;

		if ( ref ) {
			window.open( ref.getAttribute( 'data-href' ), '_blank' );
		}
	}

	keyNavigate = ( direction ) => {
		const focusedPost = document.activeElement.closest( '.sui-tutorial' );

		// Abort if the focused element doesn't have a .sui-tutorial parent.
		if ( ! focusedPost ) {
			return;
		}

		let newFocusedPost;
		if ( 'prev' === direction ) {
			newFocusedPost = focusedPost.previousElementSibling;
			// We reached the start of the list.
			if ( ! newFocusedPost ) {
				newFocusedPost = focusedPost.closest( '.sui-tutorials--page' ).lastElementChild;
			}
		} else {
			newFocusedPost = focusedPost.nextElementSibling;
			// We reached the end of the list.
			if ( ! newFocusedPost ) {
				newFocusedPost = focusedPost.closest( '.sui-tutorials--page' ).firstElementChild;
			}
		}
		newFocusedPost.firstElementChild.focus();
	}

	handleKeydown = ( e ) => {
		let key = e.which || e.keyCode;

		switch ( key ) {
			case aria.KeyCode.RETURN :
				this.openLink( e )
				break;
			case aria.KeyCode.LEFT :
				this.keyNavigate( 'prev' )
				break;
			case aria.KeyCode.RIGHT :
				this.keyNavigate( 'next' )
				break;
		}
	}

	componentDidMount() {
		this._isMounted = true;

		const API_URL = 'https://premium.wpmudev.org/blog/wp-json/wp/v2/posts?tutorials_categories=';
		const QUERY_ID = this.props.category;

		// GET posts using fetch.
		fetch( API_URL + QUERY_ID )
			.then( response => response.json() )
			.then(
				( data ) => {
					this.setState({
						isLoaded: true,
						posts: data
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

	componentWillUnmount() {
		this._isMounted = false;
	}

	render() {
		const { posts, error, isLoaded } = this.state;

		const listPosts = posts.map( post => (
			<ListItem
				key={ post.id }
				className="sui-tutorial"
			>
				<Card
					link={ post.link }
					onClick={ ( e ) => this.openLink( e ) }
					onKeyDown={ ( e ) => this.handleKeydown( e ) }
				>

					<TutorialsFeaturedImage
						media={ post.featured_media }
					/>

					<Title>{ post.title.rendered }</Title>

					<Excerpt dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } } />

					<Footer>

						<ReadMore>Read article</ReadMore>

						<ReadTime>
							<span
								className="sui-icon-clock sui-sm"
								aria-hidden="true"
								style={ {
									verticalAlign: 'middle',
									marginRight: 5,
								} }
							/>
							5 min read
						</ReadTime>

					</Footer>

				</Card>
			</ListItem>
		) );

		if ( error ) {
			return (
				<Notifications type="error" message={ error.message } />
			);
		} else if ( ! isLoaded ) {
			return (
				<Notifications type="loading" message="Loading tutorials..." />
			);
		} else {
			return (
				<div className="sui-box">

					{ this.props.title &&
						<div className="sui-box-header">
							<h3 className="sui-box-title">{ this.props.title }</h3>
						</div>
					}

					<div
						className="sui-box-body"
						style={ {
							backgroundColor: '#FAFAFA',
							borderBottomRightRadius: '4px',
							borderBottomLeftRadius: '4px',
						} }
					>

						<ListWrapper>{ listPosts }</ListWrapper>

					</div>

				</div>
			);
		}
	}
}
