import React from 'react';
import { Radio } from '../lib/react-radio';

export default {
    title: 'Components/Form/Radio',
    component: Radio
}

const Template = ({ options, ...args }) => {
    return (
        <Radio { ...args }>
            { options.map( ( option ) => (
                <div { ...option } />
            ) ) }
        </Radio>
    );
};

export const text = Template.bind({});
text.storyName = 'Text Option';
text.args = {
    property: 'hot-beverages',
    options: [
        {
            label: 'Espresso',
            value: 'espresso'
        },
        {
            label: 'Moccacino',
            value: 'moccacino'
        },
        {
            label: 'Capuccino',
            value: 'capuccino'
        }
    ]
};
text.argTypes = {
    size: {
        control: {
            type: 'select',
            options: [
                'default',
                'small'
            ]
        }
    },
    alignment: {
        control: {
            type: 'select',
            options: [
                'inline',
                'stacked'
            ]
        }
    }
};

export const image = Template.bind({});
image.storyName = 'Image Option';
image.args = {
    property: 'wpmudev-plugins',
    options: [
        {
            label: 'SmartCrawl',
            value: 'smartcrawl',
            image: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-smartcrawl-icon.png',
            image2x: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-smartcrawl-icon@2x.png'
        },
        {
            label: 'Defender',
            value: 'defender',
            image: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-defender-icon.png',
            image2x: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-defender-icon@2x.png'
        },
        {
            label: 'Smush',
            value: 'smush',
            image: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-smush-icon.png',
            image2x: 'https://wpmudev.github.io/shared-ui/assets/images/plugins-smush-icon@2x.png'
        }
    ]
};
image.argTypes = {
    size: {
        control: {
            type: 'select',
            options: [
                'default',
                'small'
            ]
        }
    },
};