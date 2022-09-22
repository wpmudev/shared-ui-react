import React from 'react';
import '@wpmudev/shared-ui/dist/css/shared-ui.min.css'; // Get latest SUI styles.
import "./preview-scripts";

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

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
	  disable: true,
  },
  viewport: {
	  viewports: customViewports
  },
  viewMode: 'canvas',
  options: {
	  storySort: {
		  order: [
			  'Welcome',
			  'Getting Started',
			  'Changelog',
			  'Roadmap',
			  '*',
		  ],
	  },
  },
}

export const decorators = [
	( Story ) => (
		<div className="sui-wrap">
			<Story />
		</div>
	),
]


// Hacky way of clicking on Docs button on first load of page.
// https://github.com/storybookjs/storybook/issues/13128
function clickDocsButtonOnFirstLoad() {
	window.removeEventListener("load", clickDocsButtonOnFirstLoad);
  
	try {
	  const docsButtonSelector = window.parent.document.evaluate(
		"//button[contains(., 'Docs')]",
		window.parent.document,
		null,
		XPathResult.ANY_TYPE,
		null
	  );
  
	  const button = docsButtonSelector.iterateNext();
  
	  button.click();
	} catch (error) {
	  // Do nothing if it wasn't able to click on Docs button.
	}
}
  
window.addEventListener("load", clickDocsButtonOnFirstLoad);