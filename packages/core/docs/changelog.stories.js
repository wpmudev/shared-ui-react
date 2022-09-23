import CustomDocs from './changelog.mdx';

import './css/log.css';

export default {
	title: "Changelog",
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

export const Changelog = () => {};