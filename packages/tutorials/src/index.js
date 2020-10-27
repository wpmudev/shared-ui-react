import React from 'react'

export const Tutorials = ({
	type,
	articles: [],
	viewAll
}) => {

	if ( 'widget' === type ) {

		return (
			<div className="sui-tutorials--wrapper">

				<div className="sui-tutorials--container">

					<ul className="sui-tutorials">

						{ articles.map( function( title, content, time, image, image2x, url ) {
							return (
								<li className="sui-tutorial">

									<div role="button">

										<div className="sui-tutorial--header">

											<img src={ image } srcSet={ image + ` 1x, ` + image2x + ` 2x` } />

											<h3 className="sui-tutorial--title">{ title }</h3>

											{ time &&
												<p className="sui-description" aria-hidden="true">*{ time }</p>
											}

										</div>

										<div className="sui-tutorial--body">

											<p className="sui-description">{ content }</p>

											<p className="sui-description"><a href={ url } target="_blank">Read article</a></p>

										</div>

									</div>

								</li>
							)
						})}

					</ul>

				</div>

				<div className="sui-tutorials--navigation">

					<button className="sui-tutorials--back sui-hidden">Back</button>

					<button className="sui-tutorials--next">Next</button>

					<button className="sui-tutorials--more sui-hidden">
						Show more
						<span className="sui-icon-chevron-down" aria-hidden="true"></span>
					</button>

				</div>

			</div>
		);
	}

	return (
		<ul className="sui-tutorials">

			{ articles.map( function( title, content, time, image, image2x, url ) {
				return (
					<li className="sui-tutorial">

						<div role="button">

							<div className="sui-tutorial--header">

								<img src={ image } srcSet={ image + ` 1x, ` + image2x + ` 2x` } />

								<h3 className="sui-tutorial--title">{ title }</h3>

								{ time &&
									<p className="sui-description" aria-hidden="true">*{ time }</p>
								}

							</div>

							<div className="sui-tutorial--body">

								<p className="sui-description">{ content }</p>

								<p className="sui-description"><a href={ url } target="_blank">Read article</a></p>

							</div>

						</div>

					</li>
				)
			})}

		</ul>
	);
}
