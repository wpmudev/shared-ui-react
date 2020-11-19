import React, { Component } from 'react';

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

export class Tutorials extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			posts: [],
			error: null,
			isLoaded: false,
		};

		this.openLink = this.openLink.bind( this );
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
		const BASE = 'https://premium.wpmudev.org/blog/wp-json/wp/v2/posts?tutorials_categories=';
		const CATEGORY = this.props.category;

		// GET request using fetch.
		fetch( BASE + CATEGORY )
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
			<li
				key={ post.id }
				className="sui-tutorial"
			>
				<div
					tabIndex="0"
					role="link"
					data-href={ post.link }
					onClick={ ( e ) => this.openLink( e ) }
					onKeyPress={ ( e ) => this.openLinkKey( e ) }
				>

					<div
						className="sui-tutorial--header"
						style={ { pointerEvents: 'none' } }
					>

						<div className="sui-tutorial--header-content">
							<h3 className="sui-tutorial--title">{ post.title.rendered }</h3>
						</div>

					</div>

					<div className="sui-tutorial--body" dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } } />

				</div>
			</li>
		) );

		if ( error ) {
			return (
				<div>Error: { error.message }</div>
			);
		} else if ( ! isLoaded ) {
			return (
				<div>Loading content...</div>
			);
		} else {
			return (
				<ul className="sui-tutorials">{ listPosts }</ul>
			);
		}
	}
}