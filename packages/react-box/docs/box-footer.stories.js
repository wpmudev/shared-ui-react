import React from "react";
import { Box, BoxFooter } from '../lib/box';
import { Button } from '@wpmudev/react-button';

// Import documentation.
import DocsFooter from "./notes/docs-footer.md";

export default {
	title: "Containers/Box/Elements/Footer",
	component: BoxFooter
};

const Template = args => {
	return (
		<Box>
			<BoxFooter {...args} />
		</Box>
	);
};

export const SimpleFooter = Template.bind({});
SimpleFooter.storyName = 'Single Action';
SimpleFooter.args = {};
SimpleFooter.argTypes = {
    display: {
        name: 'Display',
        type: {
            name: 'string',
            required: false
        },
        description: 'Description goes here...',
        control: {
            type: 'select',
            options: {
                block: 'block',
                inline: 'inline'
            }
        },
    },
    alignment: {
        name: 'Alignment',
        type: {
            name: 'string',
            required: false
        },
        description: 'Description goes here...',
        control: {
            type: 'select',
            options: {
                default: '',
                center: 'center'
            }
        },
    },
    paddingTop: {
        name: 'Padding Top',
        type: {
            name: 'string',
            required: false
        },
        description: 'Description goes here...',
        defaultValue: 30,
        control: {
            type: 'number',
            min: 0
        },
    },
    paddingRight: {
        name: 'Padding Right',
        type: {
            name: 'string',
            required: false
        },
        description: 'Description goes here...',
        defaultValue: 30,
        control: {
            type: 'number',
            min: 0
        },
    },
    paddingBottom: {
        name: 'Padding Bottom',
        type: {
            name: 'string',
            required: false
        },
        description: 'Description goes here...',
        defaultValue: 30,
        control: {
            type: 'number',
            min: 0
        },
    },
    paddingLeft: {
        name: 'Padding Left',
        type: {
            name: 'string',
            required: false
        },
        description: 'Description goes here...',
        defaultValue: 30,
        control: {
            type: 'number',
            min: 0
        },
    },
    border: {
        name: 'Border',
        type: {
            name: 'string',
            required: false
        },
        description: 'Description goes here...',
        defaultValue: 1,
        control: {
            type: 'number',
            min: 0
        },
    },
    className: {
        name: 'Extra Class(es)',
        type: {
            name: 'string',
            required: false
        },
        description: 'Description goes here...',
        control: {
            type: 'text'
        }
    },
    children: {
        defaultValue: <Button label="Save Changes" color="blue" />
    }
};
SimpleFooter.parameters = {
    notes: DocsFooter,
    controls: {
        hideNoControlsWarning: true
    }
};