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

export const SingleAction = Template.bind({});
SingleAction.storyName = 'Single Action';
SingleAction.args = {
    children: <Button label="Save Changes" color="blue" />
};
SingleAction.argTypes = {
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
                center: 'center',
                right: 'right',
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
    }
};
SingleAction.parameters = {
    notes: DocsFooter,
    controls: {
        hideNoControlsWarning: true
    }
};

export const DoubleAction = Template.bind({});
DoubleAction.storyName = 'Double Action';
DoubleAction.args = {
    children: <><Button label="Save Changes" color="blue" /><Button label="Cancel" icon="close" design="ghost" /></>
};
DoubleAction.argTypes = {
    ...SingleAction.argTypes,
};

export const JointActions = Template.bind({});
JointActions.storyName = 'Joint Actions';
JointActions.args = {
    children: <><p className="sui-description" style={ { marginTop: 5, marginBottom: 5 } }>Save your progress</p><div><Button label="Save Changes" color="blue" /><Button label="Draft Changes" design="ghost" /></div></>
};
JointActions.argTypes = {
    ...SingleAction.argTypes,
};