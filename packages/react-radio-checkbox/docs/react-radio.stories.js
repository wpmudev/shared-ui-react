import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { RadioCheckboxGroup } from '../lib/react-radio-checkbox';

export default {
	title: 'Components/Radio and Checkbox/Radio',
    args: {
        size: 'default',
        type: 'radio',
        options: [
            {
                id: 'radio1',
                name: 'radio',
                label: 'Unchecked',
                labelId: 'radio1-label',
                defaultChecked: false,
                disabled: false,
            },
            {
                id: 'radio2',
                name: 'radio',
                label: 'Unchecked',
                labelId: 'radio2-label',
                defaultChecked: false,
                disabled: false,
            },
            {
                id: 'radio3',
                name: 'radio',
                label: 'Checked',
                labelId: 'radio3-label',
                defaultChecked: true,
                disabled: false,
            }
        ],
    },
    argTypes: {
        size: {
            options: ['default', 'small'],
            control: {
                type: 'select',
            },
        },
        type: {
            options: ['radio', 'checkbox'],
            control: {
                type: 'select',
            },
        }
    },
};

const Template = ({ ...props }) => {
    return (
        <Box>
            <BoxBody>
                <RadioCheckboxGroup {...props} />
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
            id: 'radio1',
            name: 'radio',
            label: 'Disabled (Unchecked)',
            labelId: 'radio1-label',
            defaultChecked: false,
            disabled: true,
        },
        {
            id: 'radio2',
            name: 'radio',
            label: 'Disabled (Checked)',
            labelId: 'radio2-label',
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
            id: 'radio1',
            name: 'radio',
            label: 'Unchecked',
            labelId: 'radio1-label',
            defaultChecked: false,
            disabled: false,
            image: {
                src: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-smartcrawl-icon.png',
                srcset: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-smartcrawl-icon@2x.png 2x',
                alt: 'SmartCrawl plugin character in a red circular background',
            },
        },
        {
            id: 'radio2',
            name: 'radio',
            label: 'Unchecked',
            labelId: 'radio2-label',
            defaultChecked: false,
            disabled: false,
            image: {
                src: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-defender-icon.png',
                srcset: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-defender-icon@2x.png 2x',
                alt: 'Defender plugin character in a black circular background',
            },
        },
        {
            id: 'radio3',
            name: 'radio',
            label: 'Checked',
            labelId: 'radio3-label',
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