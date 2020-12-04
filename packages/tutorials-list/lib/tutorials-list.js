import React, { Component } from 'react';
import styled from 'styled-components';
import { Notifications } from '@wpmudev/react-notifications';
import { Post } from '@wpmudev/react-post';

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

const screen = {
	mobile: 480,
	tablet: 783,
	laptop: 1200,
	desktop: 1500,
};

const device = {
	mobile: `(min-width: ${screen.mobile}px)`,
	tablet: `(min-width: ${screen.tablet}px)`,
	laptop: `(min-width: ${screen.laptop}px)`,
	desktop: `(min-width: ${screen.desktop}px)`,
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
				newFocusedPost = focusedPost.closest( 'ul' ).lastElementChild;
			}
		} else {
			newFocusedPost = focusedPost.nextElementSibling;
			// We reached the end of the list.
			if ( ! newFocusedPost ) {
				newFocusedPost = focusedPost.closest( 'ul' ).firstElementChild;
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

		const translate = this.props.translate;

		const loading = translate && translate[0].loading
			? translate[0].loading
			: 'Loading tutorials...';

		const read_article = translate && translate[0].read_article
			? translate[0].read_article
			: '';

		const min_read = translate && translate[0].min_read
			? translate[0].min_read
			: '';

		const listPosts = posts.map( post => (
			<ListItem
				key={ post.id }
				className="sui-tutorial"
			>
				<Post
					banner
					role="link"
					data-href={ post.link }
					title={ post.title.rendered }
					time={ post.meta.blog_reading_time }
					excerpt={ post.excerpt.rendered }
					media={ post.featured_media }
					translate={[ {
						read_article: read_article,
						min_read: min_read,
					} ]}
					onClick={ ( e ) => this.openLink( e ) }
					onKeyDown={ ( e ) => this.handleKeydown( e ) }
				/>
			</ListItem>
		) );

		if ( error ) {
			return (
				<Notifications type="error" message={ error.message } />
			);
		} else if ( ! isLoaded ) {
			return (
				<Notifications type="loading" message={ loading } />
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