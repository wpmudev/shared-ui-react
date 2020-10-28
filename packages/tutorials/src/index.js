import React from 'react'
import styles from './styles.module.css'

export const Tutorials = ({
	as
}) => {
	const posts = [
		{
			title: 'How to Stop Hackers in Their Tracks with Defender',
			content: 'Defender deters hackers with IP banning, login lockout, updating security keys, and more.',
			image: 'https://premium.wpmudev.org/blog/wp-content/uploads/2020/06/HowToStopHackersDefender.png',
			link: 'https://premium.wpmudev.org/blog/stop-hackers-with-defender-wordpress-security-plugin/'
		},
		{
			title: "Find Out if You're Hacked: How to Find and Delete Suspicious Code with Defender",
			content: "Detecting suspicious code within a site isn't always that simple and can easily go unnoticed.",
			image: 'https://premium.wpmudev.org/blog/wp-content/uploads/2020/07/A-SuspiciousCodeDefender.png',
			link: 'https://premium.wpmudev.org/blog/delete-suspicious-code-defender/'
		},
		{
			title: 'How to Get the Most Out of Defender Security',
			content: 'Keeping your WordPress site safe often requires no more than the click of a button with Defender.',
			image: 'https://premium.wpmudev.org/blog/wp-content/uploads/2020/07/A-Defender2.png',
			link: 'https://premium.wpmudev.org/blog/how-to-get-the-most-out-of-defender-security/'
		}
	];

	const listPosts = posts.map( ( post ) =>
		<li className={styles.suiTutorial}>

			<div role="button">

				<div className="sui-tutorial--header">

					{ ( post.image && '' !== post.image ) &&
						<div className="sui-tutorial--image">
							<img src={ post.image } aria-hidden="true" />
						</div>
					}

					<h3 className="sui-tutorial--title">{ post.title }</h3>

					<p className="sui-description" aria-hidden="true">*5 min read</p>

				</div>

				<div className="sui-tutorial--body">

					<p className="sui-description">{ post.content }</p>

					<p className="sui-description"><a href="" target="_blank">Read article</a></p>

				</div>

			</div>

		</li>
	);

	const tutorials = (
		<ul className={styles.suiTutorials}>
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

					<button className="sui-tutorials--back sui-hidden">Back</button>

					<button className="sui-tutorials--next sui-hidden">Next</button>

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
