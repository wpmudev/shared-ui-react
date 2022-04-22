import React from 'react';
import { WelcomePage, Article, Section } from './components';

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
				subheading="Welcome to SUI React! SUI React is WPMU DEV's design system for its plugins. If you're just getting started with designing or developing a WordPress plugin that matches our brand, you're in the right place."
			>
				<Section>
					<p>The goal of SUI React is to improve UI consistency and quality, while making our plugins design and development processes more efficient. SUI React also helps to establish a common vocabulary between everyone in our organization and ease collabo­ration between different teams and disciplines.</p>

					<p>SUI React is the Shared UI Library transformed into React components that has a core team of designers and developers inside WPMU DEV who are dedicated to building and supporting the system. The core team includes Ani Tandilyan, Leighton Sapir, Elena Riba and Pawan Kumar.</p>

					<p>Our documentation is public as it makes sharing and collaboration between different teams and third party vendors much easier as it increases the system's visibility and accountability. This also makes us push towards higher quality and enables us to be more transparent. Finally, it also serves as an amazing tool that we can leverage in recruiting.</p>

					<p>You can reach out to the team by heading over to <a href="https://wpmudev.com/contact/" target="_blank" rel="nofollow">our contact page</a>.</p>
				</Section>

				<Section title="How we work">
					<p>The following set of fundamental rules allows us to get to the highest level of productivity while benefiting both the company and our team members.</p>

					<ul>
						<li>We avoid meetings as much as possible. Instead of having them, we communicate asynchronous to each other via Slack and Figma, expecting responses within 24 hours.</li>
						<li>We don't do team wide standups or sync meetings, except one meeting at the start of every Linear cycle. Here we walk the through tasks in Linear and also discuss about how the team feels, what motivates them right now, and what would they want to change.</li>
						<li>Most collaboration and discussion happens in feedback loops, using the above mentioned tools, which requires clear and thoughtful communication from everyone.</li>
						<li>We don't have strict deadlines. We ship incrementally as we move through the backlog and cycles in Linear and launch new things as they become ready.</li>
						<li>Our team members should be able to work on what they think is fun, or rely on their intuition when picking tasks from the backlog. Our public <strong>design system roadmap</strong> holds us accountable.</li>
						<li>We focus on persistent iteration over flashy launches.</li>
					</ul>
				</Section>

				<Section title="Our Goals">
					<ul>
						<li>Efficiency</li>
						<li>Consistency</li>
						<li>Openness</li>
						<li>Standards</li>
					</ul>
				</Section>
			</Article>
		</WelcomePage>
	);
};