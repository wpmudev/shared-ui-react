import React from 'react';
import { Dropdown } from '../lib/react-dropdown';

export default {
    title: 'Components/Dropdown',
    argTypes: {
        position: {
            type: {
                name: 'string',
                required: false
            },
            description: 'This property will determine where the dropdown menu will be placed.',
            defaultValue: 'left',
            control: {
                type: 'select',
                options: [
                    'left',
                    'center',
                    'right'
                ]
            },
            table: {
                type: {
                    summary: 'options',
                    detail: '"left", "center", "right"'
                },
                defaultValue: {
                    summary: 'left'
                }
            },
        },
        children: {
            data: {
                type: 'array'
            },
            control: {
                type: null
            }
        }
    }
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
            name: 'Option 3',
            color: 'red'
        },
    ]
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