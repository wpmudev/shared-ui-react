import React from 'react';
import '@wpmudev/shared-ui/dist/css/shared-ui.min.css'; // Get latest SUI styles.

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
	  default: 'wordpress',
	  values: [
		  { name: 'wordpress', value: '#f1f1f1' }
	  ]
  }
}

export const decorators = [
	( Story ) => (
		<div className="sui-2-10-0">
			<div className="sui-wrap">
				<Story />
			</div>
		</div>
	),
]