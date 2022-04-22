import React from 'react';
import { WelcomePage, Article, Section } from './components';

export default {
	title: 'Roadmap',
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

export const Roadmap = () => {
	return (
		<WelcomePage>
			<Article
				heading="Roadmap"
				subheading="This is the roadmap of SUI React, based on our planned design and development path. Subject to change based on user needs and feedback."
			>
				<Section title="Q1 2022">
					<ul style={ { marginBottom: 0 } }>
						<li>Plan 1</li>
						<li>Plan 2</li>
						<li>Plan 3</li>
					</ul>
				</Section>

				<Section title="Q2 2022">
					<ul style={ { marginBottom: 0 } }>
						<li>Plan 1</li>
						<li>Plan 2</li>
						<li>Plan 3</li>
					</ul>
				</Section>

				<Section title="Q3 2022">
					<ul style={ { marginBottom: 0 } }>
						<li>Plan 1</li>
						<li>Plan 2</li>
						<li>Plan 3</li>
					</ul>
				</Section>

				<Section title="Q4 2022">
					<ul style={ { marginBottom: 0 } }>
						<li>Plan 1</li>
						<li>Plan 2</li>
						<li>Plan 3</li>
					</ul>
				</Section>
			</Article>
		</WelcomePage>
	);
};