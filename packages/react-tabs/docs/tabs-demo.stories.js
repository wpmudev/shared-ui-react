import React from 'react';
import { Tabs } from '../lib/react-tabs';

export default {
	title: 'Components/Tabs',
	component: Tabs,
	parameters: {
		notes: {
			disabled: true,
		},
	},
};

export const demo = args => <Tabs { ...args } />;
demo.storyName = 'Demo';
demo.args = {
    tabs: [
        {
            id: 'tab-1',
            title: 'Tab 1',
            content_id: 'tab-1-content',
            content: <p>Content. Tab 1.</p>,
        },
        {
            id: 'tab-2',
            title: 'Tab 2',
            content_id: 'tab-2-content',
            content: <p>Content. Tab 2.</p>,
        },
        {
            id: 'tab-3',
            title: 'Tab 3',
            content_id: 'tab-3-content',
            content: <p>Content. Tab 3.</p>,
        },
        {
            id: 'tab-4',
            title: 'Tab 4',
            content_id: 'tab-4-content',
            content: <p>Content. Tab 4.</p>,
        }
    ],
    radio: false,
    type: 'default',
    orientation: 'vertical',
};
demo.argTypes = {
    tabs: {
        description: 'The array of content, title, and id for tabs.',
        table: {
            type: {
                summary: 'array',
            },
            defaultValue: {
                summary: '[]',
            },
        },
        control: {
            type: 'array',
        },
    },
    radio: {
        description: 'Enable with **true** value to display radio with tab buttons.',
        table: {
            type: {
                summary: 'boolean',
            },
            defaultValue: {
                summary: 'false',
            },
        },
        control: {
            type: 'boolean',
        },
    },
    type: {
        description: 'Different variations or template of tabs.',
        table: {
            type: {
                summary: 'string',
            },
            defaultValue: {
                summary: 'default',
            },
        },
        control: {
            type: 'select',
            options: ['default', 'flushed', 'overflow'],
        },
    },
    orientation: {
        description: 'The orientation of the tabs and change the arrow keys function in tabs.',
        table: {
            type: {
                summary: 'string',
            },
            defaultValue: {
                summary: 'horizontal',
            },
        },
        control: {
            type: 'select',
            options: ['horizontal', 'vertical'],
        },
    },
}