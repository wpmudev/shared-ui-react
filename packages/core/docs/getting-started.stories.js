import React from 'react';
import { WelcomePage, Article } from './components';

export default {
	title: 'Getting Started',
	parameters: {
		notes: {
			disable: true,
		},
		previewTabs: {
			'storybook/docs/panel': {
				hidden: true,
			},
		},
	},
};

export const GettingStarted = () => {
	return (
		<WelcomePage>
			<Article
				heading="Getting Started"
				subheading="Welcome to SUI React! SUI React is WPMU DEV’s design system for its plugins. If you’re just getting started with designing or developing something, you’re in the right place."
			>
				<p>The goal of SUI React is to improve UI consistency and quality, while making our plugins design and development processes more efficient. SUI also helps to establish a common vocabulary between everyone in our organization and ease collabo­ration between different teams and disciplines.</p>

				<p>SUI React is part of Shared UI Library that has a core team of designers and developers inside WPMU DEV who are dedicated to building and supporting the system. The core team includes Leighton Sapir, Ani Tandilyan, Elena Riba and Pawan Kumar.</p>

				<p>Our documentation is public as it makes sharing and collaboration between different teams and third party vendors much easier as it increases the system’s visibility and accountability. This also makes us push towards higher quality and enables us to be more transparent. Finally, it also serves as an amazing tool that we can leverage in recruiting.</p>

				<p>You can reach out to the team by heading over to <a href="https://wpmudev.com/contact/" target="_blank" rel="nofollow">our contact page</a>.</p>
			</Article>
		</WelcomePage>
	);
};