import React, { Component }  from 'react';
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

const Box = styled.div`
	position: relative;
	padding: 10px;

	@media ${ device.tablet } {
		padding: 15px 25px;
	}
`;

const Link = styled.a.attrs( props => ({
	href: props.viewAll,
	target: '_blank',
}) )`
	margin-top: 1px;
	margin-right: 23px;
	font-size: 13px;
	line-height: 22px;
	letter-spacing: -0.2px;

	[class*="sui-icon-"] {
		margin-right: 5px;

		&:before {
			color: inherit;
		}
	}
`;

const ListWrapper = styled.ul`
	margin: 0;
	padding: 0;
	border: 0;

	@media ${ device.tablet } {
		overflow: hidden;
		display: flex;
		flex-flow: row nowrap;
	}
`;

const ListItem = styled.li`
	display: block;
	margin: 0 0 20px;
	padding: 0;
	border: 0;
	list-style: none;

	&:last-child {
		margin-bottom: 0;
	}

	@media ${ device.tablet } {
		width: 33.33%;
		flex: 0 0 auto;
		margin: 0 1px 0 0;
	}

	@media ${ device.desktop } {
		width: 25%;
	}
`;

const Navigation = styled.div`
	display: block;

	button[class*="sui-button-"] {
		display: none !important;

		@media ${ device.tablet } {
			display: block !important;
			pointer-events: initial;
		}
	}

	button:not([class*="sui-button-"]) {
		width: 100%;
		cursor: pointer;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
		margin: 20px 0 10px !important;
		padding: 10px !important;
		border: 0;
		border-radius: 4px;
		background-color: #FFF;
		color: #17A8E3 !important;
		transition: 0.2s ease all;

		* {
			pointer-events: none;
		}

		strong {
			min-width: 1px;
			flex: 0 1 auto;
			color: inherit;
			font-size: 13px;
			line-height: 22px;
			font-weight: 500;
		}

		[class*="sui-icon-"] {
			flex: 0 0 auto;
			margin-left: 5px;
			transition: 0.2s ease all;

			&:before {
				color: inherit;
			}
		}

		&:hover,
		&:focus {
			outline: none;
			box-shadow: none;
		}

		&:hover {
			background-color: #FAFAFA;
		}

		&:focus {
			background-color: #E1F6FF;
		}

		@media ${ device.tablet } {
			display: none !important;
		}
	}

	.open & {

		button:not([class*="sui-button-"]) {

			[class*="sui-icon-"] {
				transform: rotate(180deg);
			}
		}
	}

	@media ${ device.tablet } {
		pointer-events: none;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
		position: absolute;
		top: 50%;
		right: 6px;
		left: 6px;
		transform: translateY(-50%);
	}
`;

export class TutorialsSlider extends Component {
	constructor( props ) {
		super( props );

		this.secondTutorial = React.createRef();

		this.state = {
			posts: [],
			error: null,
			isLoaded: false,
			isFirstSlide: true,
			isLastSlide: false,
			isShowingAll: window.innerWidth > screen.tablet,
		};

		this.closeButtonClicked = this.closeButtonClicked.bind( this );
		this.openLink = this.openLink.bind( this );
		this.handleKeydown = this.handleKeydown.bind( this );
		this.navigationButtonClicked = this.navigationButtonClicked.bind( this );
		this.handleScroll = this.handleScroll.bind( this );
	}

	closeButtonClicked = ( e ) => {
		const sliderBox = e.currentTarget.closest( '.sui-tutorials-slider-box' );
		sliderBox.remove();

		const event = new Event( 'sliderTutorialClosed' );
		sliderBox.dispatchEvent( event );
	}

	openLink = ( e ) => {
		let ref = e.target !== null ? e.target : e.srcElement;

		if ( ref ) {
			window.open( ref.getAttribute( 'data-href' ), '_blank' );
		}
	}

	keyNavigate = ( direction ) => {
		const focusedPost = document.activeElement.closest( 'li' );

		// Abort if the focused element doesn't have a li parent.
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

	// TODO: Check this on RTL.
	handleScroll = ( e ) => {
		const tutorialsContainer = e.currentTarget;

		let isFirstSlide = false,
			isLastSlide = false;

		// We're at the first slide.
		if ( 0 === tutorialsContainer.scrollLeft ) {
			isFirstSlide = true;
		}

		// We're at the last slide.
		if ( tutorialsContainer.scrollWidth === ( tutorialsContainer.scrollLeft + tutorialsContainer.offsetWidth ) ) {
			isLastSlide = true;
		}

		this.setState({
			isFirstSlide,
			isLastSlide
		});
	}

	// TODO: check this on RTL.
	navigationButtonClicked = ( e ) => {
		const tutorialsContainer = e.currentTarget.parentNode.previousElementSibling;

		// Scroll to the next or previous "slide".
		if ( e.currentTarget.classList.contains( 'next' ) ) {
			tutorialsContainer.scrollLeft += tutorialsContainer.offsetWidth;
		} else {
			tutorialsContainer.scrollLeft -= tutorialsContainer.offsetWidth;
		}
	}

	componentDidUpdate( prevProps, prevState ) {
		// Handle the focused element when clicking on "show more"/"show lesss" on mobile.
		if ( this.state.isShowingAll !== prevState.isShowingAll && window.innerWidth < screen.tablet ) {
			if ( this.secondTutorial.current ) {
				let tutorialToFocus;

				if ( this.state.isShowingAll ) {
					tutorialToFocus = this.secondTutorial.current.nextElementSibling;
				} else {
					tutorialToFocus = this.secondTutorial.current;
				}
				tutorialToFocus.firstElementChild.focus();
			}
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
		const { posts, error, isLoaded, isShowingAll } = this.state;

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

		const prev_post = translate && translate[0].prev_post
			? translate[0].prev_post
			: 'Previous post';

		const next_post = translate && translate[0].next_post
			? translate[0].next_post
			: 'Next post';

		const view_all = translate && translate[0].view_all
			? translate[0].view_all
			: 'View all';

		const close_tutorials = translate && translate[0].close_tutorials
			? translate[0].close_tutorials
			: 'Close tutorials';

		const show_more = translate && translate[0].show_more
			? translate[0].show_more
			: 'Show more';

		const show_less = translate && translate[0].show_less
			? translate[0].show_less
			: 'Show less';

		const listPosts = posts.map( ( post, i ) => (
			<ListItem
				key={ post.id }
				className="sui-tutorial"
				className={ 1 < i && ! this.state.isShowingAll && 'sui-hidden' }
				ref={ 1 === i && this.secondTutorial }
			>

				<Post
					role="link"
					data-href={ post.link }
					title={ post.title.rendered }
					time={ post.meta.blog_reading_time }
					excerpt={ post.excerpt.rendered }
					media={ post.featured_media }
					translate={[ {
						min_read: min_read,
						read_article: read_article,
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
			const navigation = (
				<Navigation>

					{ ( ( 3 < posts.length && window.innerWidth < screen.desktop ) || 4 < posts.length ) &&
						[
							<button
								key="1"
								className="sui-button-icon prev"
								onClick={ ( e ) => this.navigationButtonClicked( e ) }
								style={ { visibility: this.state.isFirstSlide ? 'hidden' : 'visible' } }
								>
								<span
									className="sui-icon-chevron-left sui-sm"
									aria-hidden="true"
								/>
								<span
									className="sui-screen-reader-text"
								>
									{ prev_post }
								</span>
							</button>,
							<button
								key="2"
								className="sui-button-icon next"
								onClick={ ( e ) => this.navigationButtonClicked( e ) }
								style={ { visibility: this.state.isLastSlide ? 'hidden' : 'visible' } }
							>
								<span
									className="sui-icon-chevron-right sui-sm"
									aria-hidden="true"
								/>
								<span
									className="sui-screen-reader-text"
								>
									{ next_post }
								</span>
							</button>
						]
					}

					<button
						className="sui-label"
						onClick={ () => this.setState( { isShowingAll: ! isShowingAll } ) }
					>
						<strong>
							{ isShowingAll ? show_less : show_more }
						</strong>
						<span
							className="sui-icon-chevron-down sui-sm"
							aria-hidden="true"
						/>
					</button>

				</Navigation>
			);

			return (
				<div className="sui-box sui-tutorials-slider-box">

					<div className="sui-box-header">
						{ this.props.title &&
							<h3 className="sui-box-title">{ this.props.title }</h3>
						}
						<div className="sui-actions-right">

							{ this.props.viewAll &&
								<Link { ...this.props }>
									<span
										className="sui-icon-open-new-window sui-sm"
										aria-hidden="true"
									/>
									{ view_all }
								</Link>
							}

							<button
								onClick={ ( e ) => this.closeButtonClicked( e ) }
								className="sui-button-icon"
								style={ {
									marginRight: '-9px'
								} }
							>
								<span
									className="sui-icon-close sui-md"
									aria-hidden="true"
								/>
								<span
									className="sui-screen-reader-text"
								>{ close_tutorials }</span>
							</button>

						</div>
					</div>

					<Box className={ isShowingAll && 'open' }>

						<ListWrapper onScroll={ this.handleScroll }>
							{ listPosts }
						</ListWrapper>

						{ 2 < posts.length &&
							navigation
						}

					</Box>

				</div>
			);
		}
	}
}