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
	return <p>Welcome to Shared UI React</p>;
};