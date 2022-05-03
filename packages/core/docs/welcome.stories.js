import CustomDocs from './welcome.mdx';

export default {
	title: 'Welcome',
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

export const Welcome = () => {
	return <p>On the sidebar, click on the "Welcome" page again to see the real docs.</p>;
};