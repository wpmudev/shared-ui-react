import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { RadioAndCheckboxGroup } from '../lib/react-radio-checkbox';

export default {
	title: 'Components/Radio and Checkbox/Checkbox',
    args: {
        size: 'default',
        type: 'checkbox',
        options: [
            {
                id: 'checkbox1',
                name: 'checkbox',
                label: 'Unchecked',
                labelId: 'checkbox1-label',
                defaultChecked: false,
                disabled: false,
            },
            {
                id: 'checkbox2',
                name: 'checkbox',
                label: 'Unchecked',
                labelId: 'checkbox2-label',
                defaultChecked: false,
                disabled: false,
            },
            {
                id: 'checkbox3',
                name: 'checkbox',
                label: 'Checked',
                labelId: 'checkbox3-label',
                defaultChecked: true,
                disabled: false,
            }
        ],
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['default', 'small'],
            },
        },
        type: {
            control: {
                type: 'select',
                options: ['radio', 'checkbox'],
            },
        }
    },
};

const Template = ({ ...props }) => {
    return (
        <Box>
            <BoxBody>
                <RadioAndCheckboxGroup {...props} />
            </BoxBody>
        </Box>
    );
}

export const primary = Template.bind({});
primary.storyName = 'Default';
primary.args = {
    stacked: false,
};

export const stacked = Template.bind({});
stacked.storyName = 'Stacked';
stacked.args = {
    stacked: true,
}

export const small = Template.bind({});
small.storyName = 'Small';
small.args = {
    size: 'small',
    stacked: false,
}

export const disabled = Template.bind({});
disabled.storyName = 'Disabled';
disabled.args = {
    stacked: false,
    options: [
        {
            id: 'checkbox1',
            name: 'checkbox',
            label: 'Disabled (Unchecked)',
            labelId: 'checkbox1-label',
            defaultChecked: false,
            disabled: true,
        },
        {
            id: 'checkbox2',
            name: 'checkbox',
            label: 'Disabled (Checked)',
            labelId: 'checkbox2-label',
            defaultChecked: true,
            disabled: true,
        },
    ],
}

export const image = Template.bind({});
image.storyName = 'Image';
image.args = {
    options: [
        {
            id: 'checkbox1',
            name: 'checkbox',
            label: 'Unchecked',
            labelId: 'checkbox1-label',
            defaultChecked: false,
            disabled: false,
            image: {
                src: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-smartcrawl-icon.png',
                srcset: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-smartcrawl-icon@2x.png 2x',
                alt: 'SmartCrawl plugin character in a red circular background',
            },
        },
        {
            id: 'checkbox2',
            name: 'checkbox',
            label: 'Unchecked',
            labelId: 'checkbox2-label',
            defaultChecked: false,
            disabled: false,
            image: {
                src: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-defender-icon.png',
                srcset: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-defender-icon@2x.png 2x',
                alt: 'Defender plugin character in a black circular background',
            },
        },
        {
            id: 'checkbox3',
            name: 'checkbox',
            label: 'Checked',
            labelId: 'checkbox3-label',
            defaultChecked: true,
            disabled: false,
            image: {
                src: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-smush-icon.png',
                srcset: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-smush-icon@2x.png 2x',
                alt: 'Smush plugin character in a green circular background',
            },
        }
    ],
}