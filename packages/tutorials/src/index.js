import React, { useState, useEffect } from 'react'

export const Tutorials = ({
	as,
	posts,
	...props
}) => {
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

	const max = 100;
	const uniqueId = Math.floor( Math.random() * Math.floor( max ) );

	const openLink = ( e ) => {

		let ref = e.target !== null ? e.target : e.srcElement;

		if ( ref ) {
			window.open( ref.getAttribute( 'data-href' ), '_blank' );
		}

	}

	const openLinkKey = ( e ) => {

		let key = e.which || e.keyCode;
		let ref = e.target !== null ? e.target : e.srcElement;

		switch ( key ) {

			case aria.KeyCode.RETURN :
				if ( ref ) {
					window.open( ref.getAttribute( 'data-href' ), '_blank' );
				}
				break;
		}
	}

	const nextPost = ( direction, e ) => {
		let current, nextGroup;
		const tuts = document.querySelectorAll( '#tutorials-' + uniqueId + ' .sui-tutorial' );

		// Screen smaller than 783.
		if ( window.innerWidth < 783 ) {

		// Screen larger and equal than 783 but smaller than 1200.
		} else if ( window.innerWidth >= 783 && window.innerWidth < 1200 ) {

		// Screen larger and equal than 1200px.
		} else if ( window.innerWidth >= 1200 ) {}

		// const next = 'next' === direction ? current + 1 : current - 1;

		// nextPost = document.getElementById( 'tutorials-' + uniqueId + '-post-' + next );

		// When we are at the end and moving forward, or at the beginning and moving backward.
		// if ( ! nextPost.length ) {
		// 	const reset = 'next' === direction ? 0 : tuts.length - 1;
		// 	nextPost = document.getElementById( 'tutorials-' + uniqueId + '-post-' + reset );
		// }

		// nextPost.focus();

		// Screen smaller than 783.
		// if ( window.innerWidth < 783 ) {
		// 	// nothing.
		// } else {
		// 	nextPost.focus();
		// }

		// // Screen larger and equal than 783 but smaller than 1200.
		// if ( window.innerWidth >= 783 && window.innerWidth < 1200 ) {}

		// // Screen larger and equal than 1200px.
		// if ( window.innerWidth >= 1200 ) {}
	}

	const nextPostKey = ( direction, e ) => {

		if ( 0 === document.querySelectorAll( '#tutorials-' + uniqueId + ' .sui-tutorial [role="link"]:focus' ).length ) {
			console.log( 'nothing is focused' );
		} else {
			console.log( 'something is focused' );
		}
	}

	const smallDevice = () => {
		if ( window.innerWidth <= 480 ) {
			console.log( 'Mobile detected' );
		}
	}

	const listPosts = posts.map( ( post, index ) =>
		<li
			key={ index }
			id={ 'tutorials-' + uniqueId + '-post-' + index }
			className="sui-tutorial"
		>

			<div
				tabIndex="0"
				role="link"
				data-href={ post.link }
				aria-label={
					( post.readMore && '' !== post.readMore )
						? post.readMore + ' ' + post.title
						: post.title
				}
				onClick={ openLink }
				onKeyPress={ openLinkKey }
			>

				<div className="sui-tutorial--header">

					{ ( post.image && '' !== post.image ) &&
						<div tabIndex="-1" className="sui-tutorial--image" aria-hidden="true">
							<img src={ post.image } />
						</div>
					}

					<div className="sui-tutorial--header-content">

						<h3 className="sui-tutorial--title">{ post.title }</h3>

						{ ( post.time && '' !== post.time ) &&
							<p className="sui-tutorial--time sui-description" aria-hidden="true">*{ post.time }</p>
						}

					</div>

				</div>

				<div className="sui-tutorial--body">

					<p className="sui-description">{ post.content }</p>

					{ ( post.readMore && '' !== post.readMore ) &&
						<p className="sui-description pseudo-link" aria-hidden="true">{ post.readMore }</p>
					}

				</div>

			</div>

		</li>
	);

	const tutorials = (
		<ul id={ 'tutorials-' + uniqueId } className="sui-tutorials" { ...props }>
			{ listPosts }
		</ul>
	);

	// TEST: Small device checker.
	// window.addEventListener( 'resize', smallDevice );

	if ( 'widget' === as ) {
		return (
			<div className="sui-tutorials--widget">

				<div className="sui-tutorials--container">

					{ tutorials }

				</div>

				<div className="sui-tutorials--navigation">

					<button
						className="sui-tutorials--back sui-button-icon sui-hidden-important"
						aria-hidden="true"
						hidden
						onClick={ () => nextPost( 'next' ) }
					>
						<span className="sui-icon-chevron-left" aria-hidden="true"></span>
					</button>

					<button
						className="sui-tutorials--next sui-button-icon sui-hidden-important"
						aria-hidden="true"
						hidden
						onClick={ () => nextPost( 'back' ) }
					>
						<span className="sui-icon-chevron-right" aria-hidden="true"></span>
					</button>

					<button
						className="sui-tutorials--more sui-hidden-important"
						aria-hidden="true"
						hidden
					>
						Show more
						<span className="sui-icon-chevron-down" aria-hidden="true"></span>
					</button>

				</div>

			</div>
		);
	}

	return (
		<div className="sui-tutorials--page">

			{ tutorials }

		</div>
	);
};
