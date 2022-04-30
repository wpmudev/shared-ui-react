import CustomDocs from './getting-started.mdx';

export default {
	title: 'Getting Started',
	parameters: {
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},
		docs: {
			page: CustomDocs,
		},
		viewMode: 'docs',
	},
};

export const GettingStarted = () => {};