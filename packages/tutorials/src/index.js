import React from 'react'

export const Tutorials = ({
	as,
	posts
}) => {
	const listPosts = posts.map( ( post, index ) =>
		<li key={ index } className="sui-tutorial">

			<div tabIndex="0" role="link" data-href={ post.link } aria-label={ post.title }>

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
		<ul className="sui-tutorials">
			{ listPosts }
		</ul>
	);

	if ( 'widget' === as ) {
		return (
			<div className="sui-tutorials--widget">

				<div className="sui-tutorials--container">

					{ tutorials }

				</div>

				<div className="sui-tutorials--navigation">

					<button className="sui-tutorials--back sui-button-icon">
						<span className="sui-icon-chevron-left" aria-hidden="true"></span>
					</button>

					<button className="sui-tutorials--next sui-button-icon">
						<span className="sui-icon-chevron-right" aria-hidden="true"></span>
					</button>

					<button className="sui-tutorials--more sui-hidden">
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
}
