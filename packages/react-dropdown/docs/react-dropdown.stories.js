import React from 'react';
import { Dropdown } from '../lib/react-dropdown';

export default {
    title: 'Components/Dropdown'
}

const Template = ({ children, ...args }) => {
    return (
        <Dropdown { ...args }>
            { children.map( ( child, key ) => (
                <div key={ key } { ...child } />
            ) ) }
        </Dropdown>
    );
};

export const primary = Template.bind({});
primary.storyName = 'Default';
primary.args = {
    position: 'left',
    children: [
        {
            name: 'Option 1'
        },
        {
            name: 'Option 2'
        },
        {
            name: 'Option 3'
        },
    ]
};
primary.argTypes = {
    position: {
        control: {
            type: 'select',
            options: [
                'left',
                'center',
                'right'
            ]
        }
    }
};

export const secondary = Template.bind({});
secondary.storyName = 'Option Icon';
secondary.args = {
    position: 'left',
    children: [
        {
            name: 'Option 1',
            icon: 'check'
        },
        {
            name: 'Option 2',
            icon: 'close'
        },
        {
            name: 'Option 3',
            icon: 'pencil'
        },
    ]
};
secondary.argTypes = {
    ...primary.argTypes
};

export const tertiary = Template.bind({});
tertiary.storyName = 'Option Tag';
tertiary.args = {
    position: 'left',
    children: [
        {
            name: 'Option 1',
            tag: 'Coming Soon'
        },
        {
            name: 'Option 2',
            tag: 'Coming Soon'
        },
        {
            name: 'Option 3',
            tag: 'Coming Soon'
        },
    ]
};
tertiary.argTypes = {
    ...primary.argTypes
};