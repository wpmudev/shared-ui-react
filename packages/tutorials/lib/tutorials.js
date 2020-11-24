import React, { Component } from 'react';
import styled from 'styled-components';
import { Notifications } from '@wpmudev/react-notifications';
import './Tutorials.css';

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

const List = styled.li`
	display: block;
	margin: 0;
	padding: 0;
	border: 0;
	list-style: none;

	/* Device Size: Medium. */
	@media screen and (min-width: 1200px) {
		width: 33.33%;
		flex: 0 0 auto;
	}
`;

const ListWrapper = styled.ul`
	margin: 0;
	padding: 0;
	border: 0;

	/* Device Size: Medium. */
	@media screen and (min-width: 1200px) {
		display: flex;
		flex-flow: row nowrap;
	}
`;

const Card = styled.div`
	cursor: pointer;
	${ props => props.slides ? '' : 'overflow: hidden;' }
	padding: ${ props => props.slides ? '15px' : '20px 20px 30px' };
	border-radius: 4px;
	background-color: #FFF;
	${ props => props.slides ? '' : 'box-shadow: 0 0 0 1px #E6E6E6;' }
	transition: 0.2s ease all;

	* {
		pointer-events: none;
	}

	&:hover,
	&:focus {
		transform: scale(1.02);

		/* Device Size: Medium. */
		@media screen and (min-width: 783px) {
			transform: scale(1.05);
		}
	}

	&:hover {
		box-shadow: 0 2px 7px 0 rgba(0,0,0,0.05);

		/* Device Size: Medium. */
		@media screen and (min-width: 783px) {}
	}

	&:focus {
		outline: none;
		box-shadow: 0 2px 7px 0 rgba(0,0,0,0.05), 0 0 2px 0 #17A8E3;
	}

	/* Device Size: Medium. */
	@media screen and (min-width: 783px) {
		${ props => props.slides ? '' : 'min-height: 100%;' }
	}
`;

const CardHeader = styled.div`
	display: flex;
	flex-flow: row wrap;

	+ div {
		margin-top: 20px;
	}
`;

const CardBody = styled.div`
	display: block;
	margin: 0;
`;

const CardFooter = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	margin-top: 15px;
`;

const TitleWrapper = styled.div`
	min-width: 1px;
	flex: 1;

`;

const Title = styled.h3`
	overflow: hidden;
	display: -webkit-box !important;
	-webkit-box-orient: vertical;
	margin: 0 0 10px !important;
	padding: 0 !important;
	border: 0;
	color: #333;
	font-size: 13px !important;
	line-height: 18px !important;
	font-weight: 500 !important;
	letter-spacing: -0.2px;

	/* Device Size: Medium. */
	@media screen and (min-width: 783px) {
		-webkit-line-clamp: 2;
	}
`;

const Excerpt = styled.div`
	display: block;

	p {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		margin: 0 !important;
		padding: 0 !important;
		border: 0;
		color: #888 !important;
		font-size: 13px !important;
		line-height: 22px !important;
		letter-spacing: -0.2px;
		-webkit-line-clamp: ${ props => props.slides ? '2' : '3' };
	}
`;

const ReadMore = styled.p`
	min-width: 1px;
	flex: 1;
	margin: 0;
	color: #17A8E3 !important;
	font-size: 13px !important;
	line-height: 18px !important;
	font-weight: 500 !important;
	letter-spacing: -0.2px !important;
`;

const ReadTime = styled.p`
	flex: 0 0 auto;
	margin: 0 !important;
	padding: 0 !important;
	border: 0;
	color: #888 !important;
	font-size: 13px !important;
	line-height: 18px !important;
	letter-spacing: -0.2px;

	* + & {
		margin-left: 5px !important;
	}
`;

const FeaturedImage = styled.div`
	${ props => props.banner ? '' : 'width: 66px;' }
	height: ${ props => props.banner ? '140px' : '54px' };
	${ props => props.banner ? '' : 'flex: 0 0 auto;' }
	margin: ${ props => props.banner ? '-20px -20px 20px' : '0' };
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
					tabIndex="-1"
					aria-hidden="true"
					src={ media }
					{ ...this.props }
				/>
			);
		}
	}
}

export class TutorialsWidget extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			posts: [],
			error: null,
			isLoaded: false,
		};

		this.openLink = this.openLink.bind( this );
		this.openLinkKey = this.openLinkKey.bind( this );
	}

	openLink = ( e ) => {
		let ref = e.target !== null ? e.target : e.srcElement;

		if ( ref ) {
			window.open( ref.getAttribute( 'data-href' ), '_blank' );
		}
	}

	openLinkKey = ( e ) => {
		let key = e.which || e.keyCode;

		switch ( key ) {
			case aria.KeyCode.RETURN :
				this.openLink( e )
				break;
		}
	}

	componentDidMount() {
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

	render() {
		const { posts, error, isLoaded } = this.state;

		const listPosts = posts.map( post => (
			<List
				key={ post.id }
				className="sui-tutorial"
			>
				<Card
					tabIndex="0"
					role="link"
					data-href={ post.link }
					onClick={ ( e ) => this.openLink( e ) }
					onKeyPress={ ( e ) => this.openLinkKey( e ) }
					slides
				>

					<CardHeader>

						<TutorialsFeaturedImage media={ post.featured_media } />

						<TitleWrapper>

							<Title>{ post.title.rendered }</Title>

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

						</TitleWrapper>

					</CardHeader>

					<Excerpt dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } } />

					<ReadMore>Read article</ReadMore>

				</Card>
			</List>
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
						<div className="sui-box-header">{ this.props.title }</div>
					}

					<div className="sui-box-body">
						<ListWrapper>
							{ listPosts }
						</ListWrapper>
					</div>

				</div>
			);
		}
	}
}

export class TutorialsPage extends Component {
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
			<li
				key={ post.id }
				className="sui-tutorial"
			>
				<Card
					tabIndex="0"
					role="link"
					data-href={ post.link }
					onClick={ ( e ) => this.openLink( e ) }
					onKeyDown={ ( e ) => this.handleKeydown( e ) }
				>

					<TutorialsFeaturedImage media={ post.featured_media } banner />

					<CardBody>

						<Title>{ post.title.rendered }</Title>

						<Excerpt dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } } />

					</CardBody>

					<CardFooter>

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

					</CardFooter>

				</Card>
			</li>
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

						<ul className="sui-tutorials--page">{ listPosts }</ul>

					</div>

				</div>
			);
		}
	}
}

export class Tutorials extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		if ( this.props.widget ) {
			return <TutorialsWidget { ...this.props } />
		}

		return <TutorialsPage { ...this.props } />
	}
}