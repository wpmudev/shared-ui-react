import React from 'react';
import { WelcomePage, WelcomeBanner } from './components';

export default {
	title: 'Welcome',
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

export const Welcome = () => {
	return (
		<WelcomePage>
			<WelcomeBanner
				heading="SUI React."
				subheading={
					[
						'Find ',
						<span>documentation</span>,
						' and ',
						<span>resources</span>,
						' for the React components of ',
						<a href="https://wpmudev.com/" target="blank" rel="nofollow">WPMU DEV's</a>,
						' design system to build WordPress plugins using our ',
						<a
							href="https://wpmudev.github.io/shared-ui/"
							target="blank"
							rel="nofollow">
							Shared UI Library
						</a>,
						'.'
					]
				}
				ctaLabel="Get started"
				ctaLink="Getting Started"
			/>
		</WelcomePage>
	);
};