import React from 'react';
import { Accordion, AccordionItem } from '../lib/react-accordion';

import LogoImage from './assets/images/logo.png';

export default {
	title: 'Containers/Accordion',
	component: AccordionItem,
	parameters: {
		notes: {
			disabled: true,
		},
	},
}

export const Demo = ({ children, ...props }) => {
	return (
		<div className="sui-box">
			<Accordion>
				<AccordionItem { ...props }>
					{ children }
				</AccordionItem>
			</Accordion>
		</div>
	);
};
Demo.args = {
	title: 'Accordion Item',
	icon: 'wpmudev-logo',
	image: LogoImage,
	children: <div className="sui-box">
		<div className="sui-box-body">
			<p>Accordion content goes here.</p>
		</div>
	</div>,
	checkboxInput: true,
	checkboxId: 'accordion-item-1',
};
Demo.argTypes = {
	title: {
		type: {
			required: true,
		},
		description: 'This required property adds some bold text to the **AccordionItem**.',
		table: {
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
	icon: {
		description:
			'Use this property to include an icon before the accordion item title. ' +
			'Check out the available icons <a href="https://wpmudev.github.io/shared-ui/icons/" target="_blank">here</a>.',
		table: {
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
	image: {
		description: 'Use this property to include an image before the accordion item title.',
		table: {
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
	children: {
		type: {
			required: true,
		},
		description: 'Place the content you would like to display inside the component.',
		table: {
			type: {
				summary: 'element[]',
			},
		},
		control: {
			type: null,
		},
	},
	checkboxSelected: {
		description: 'Whether to show or hide checkbox.',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: 'boolean',
		},
	},
	checkboxId: {
		description: 'Id of accordion checkbox.',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'null' },
		},
		control: {
			type: 'text',
		},
	},
	checkboxSelected: {
		description: 'Whether the checkbox should be default selected.',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
		control: {
			type: 'boolean',
		},
	},
	checkboxClickHandler: {
		description: 'Checkbox click event handler.',
		table: {
			type: { summary: 'function' },
			defaultValue: { summary: 'null' },
		},
		control: {
			type: null,
		},
	},
};
