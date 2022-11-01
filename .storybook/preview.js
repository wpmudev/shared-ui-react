import React from 'react';
import { addParameters } from '@storybook/react';
import '@wpmudev/shared-ui/dist/css/shared-ui.min.css'; // Get latest SUI styles.
import "./body-class";

addParameters({
	badgesConfig: {
		sui: {
			contrast: '#17A8E3',
			color: '#FFF',
			title: 'SUI 2.12.8'
		},
		beta: {
			contrast: '#FFF',
			color: '#8D00B1',
			title: 'Beta'
		},
		deprecated: {
			contrast: '#FFF',
			color: '#FF6D6D',
			title: 'Deprecated'
		}
	}
});

// List custom viewports.
const customViewports = {
	xl: {
		name: 'Desktop',
		styles: {
			width: '1500px',
			height: '938px'
		},
		type: 'desktop'
	},
	lg: {
		name: 'Laptop',
		styles: {
			width: '1200px',
			height: '750px'
		},
		type: 'desktop'
	},
	md: {
		name: 'Tablet',
		styles: {
			width: '783px',
			height: '1253px'
		},
		type: 'tablet'
	},
	sm: {
		name: 'Mobile',
		styles: {
			width: '480px',
			height: '800px'
		},
		type: 'mobile'
	},
	xs: {
		name: 'Smaller',
		styles: {
			width: '375px',
			height: '667px'
		},
		type: 'mobile'
	},
};

// Edit parameters.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
	  default: 'WordPress',
	  values: [
		  { name: 'WordPress', value: '#f1f1f1' }
	  ]
  },
  viewport: {
	  viewports: customViewports
  },
  viewMode: 'canvas',
  badges: [ 'sui' ]
}

// Edit "preview" markup.
const Wrapper = ({ children }) => {
	return (
		<div className="sui-wrap">
			{ children }
		</div>
	);
};

export const decorators = [
	( Story ) => (
		<Wrapper>
			<Story />
		</Wrapper>
	),
];