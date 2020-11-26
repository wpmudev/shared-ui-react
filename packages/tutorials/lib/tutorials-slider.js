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
		margin: 0;
	}

	@media ${ device.desktop } {
		width: 25%;
	}
`;

const Card = styled.div.attrs( props => ({
	tabIndex: 0,
	role: 'link',
	'data-href': props.link,
}) )`
	cursor: pointer;
	padding: 10px;
	border-radius: 4px;
	background-color: #FFF;
	transition: 0.2s ease all;

	* {
		pointer-events: none;
	}

	&:hover,
	&:focus {
		background-color: #FAFAFA;
	}

	&:focus {
		outline: none;
	}

	@media ${ device.tablet } {
		padding: 15px;
	}
`;

const Header = styled.div`
	display: flex;
	flex-flow: row wrap;

	+ div {
		margin-top: 20px;
	}
`;

const Wrapper = styled.div`
	min-width: 1px;
	flex: 1;
`;

const Navigation = styled.div`
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

	button {
		pointer-events: initial;
	}
`;

export class TutorialsSlider extends Component {
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
			<ListItem key={ post.id }>

				<Card
					link={ post.link }
					onClick={ ( e ) => this.openLink( e ) }
					onKeyPress={ ( e ) => this.openLinkKey( e ) }
				>

					<Header>

						<TutorialsFeaturedImage
							slider
							media={ post.featured_media }
							className="post-featured-image"
						/>

						<Wrapper>

							<Title slider>{ post.title.rendered }</Title>

							{ '' !== post.meta.blog_reading_time &&
								<ReadTime slider>*{ post.meta.blog_reading_time } min read</ReadTime>
							}

						</Wrapper>

					</Header>

					<Excerpt
						slider
						dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } }
					/>

					<ReadMore slider>Read article</ReadMore>

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
									View all
								</Link>
							}

							<button
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
								>Close tutorials</span>
							</button>

						</div>
					</div>

					<Box>

						<ListWrapper>
							{ listPosts }
						</ListWrapper>

						<Navigation>

							<button
								className="sui-button-icon prev"
							>
								<span
									className="sui-icon-chevron-left sui-sm"
									aria-hidden="true"
								/>
								<span
									className="sui-screen-reader-text"
								>
									Previous post
								</span>
							</button>

							<button
								className="sui-button-icon next"
							>
								<span
									className="sui-icon-chevron-right sui-sm"
									aria-hidden="true"
								/>
								<span
									className="sui-screen-reader-text"
								>
									Next post
								</span>
							</button>

						</Navigation>

					</Box>

				</div>
			);
		}
	}
}