import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Accordion, AccordionItem } from '../lib/react-accordion';

import LogoImage from './assets/images/logo.png';

export default {
	title: 'Containers/Accordion',
}

const Template = ({ children, ...props }) => {
	return (
		<Box>
			<Accordion { ...props }>
				<AccordionItem { ...props }>
					{ children }
				</AccordionItem>
			</Accordion>
		</Box>
	);
}

export const demo = Template.bind({});
demo.storyName = 'Demo';
demo.args = {
	title: 'Accordion Item',
	icon: 'wpmudev-logo',
	image: LogoImage,
	children: <div className="sui-box">
		<div className="sui-box-body">
			<p>Accordion content goes here.</p>
		</div>
	</div>,
};
demo.argTypes = {
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
	children: {},
};