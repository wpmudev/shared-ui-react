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
            title: 'Tab 1 Item',
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
            title: 'Tab 3 Name with text',
            content_id: 'tab-3-content',
            content: <p>Content. Tab 3.</p>,
        },
        {
            id: 'tab-4',
            title: 'Tab 4 text only',
            content_id: 'tab-4-content',
            content: <p>Content. Tab 4.</p>,
        },
        {
            id: 'tab-5',
            title: 'Tab 5',
            content_id: 'tab-5-content',
            content: <p>Content. Tab 5.</p>,
        },
        {
            id: 'tab-6',
            title: 'Tab 6',
            content_id: 'tab-6-content',
            content: <p>Content. Tab 6.</p>,
        },
        {
            id: 'tab-7',
            title: 'Tab 7',
            content_id: 'tab-7-content',
            content: <p>Content. Tab 7.</p>,
        },
        {
            id: 'tab-8',
            title: 'Tab 8',
            content_id: 'tab-8-content',
            content: <p>Content. Tab 8.</p>,
        },
        {
            id: 'tab-9',
            title: 'Tab 9',
            content_id: 'tab-9-content',
            content: <p>Content. Tab 9.</p>,
        },
        {
            id: 'tab-10',
            title: 'Tab 10',
            content_id: 'tab-10-content',
            content: <p>Content. Tab 10.</p>,
        },
        {
            id: 'tab-11',
            title: 'Tab 11 text',
            content_id: 'tab-11-content',
            content: <p>Content. Tab 11.</p>,
        },
        {
            id: 'tab-12',
            title: 'Tab 12',
            content_id: 'tab-12-content',
            content: <p>Content. Tab 12.</p>,
        },
        {
            id: 'tab-13',
            title: 'Tab 13',
            content_id: 'tab-13-content',
            content: <p>Content. Tab 13.</p>,
        },
        {
            id: 'tab-14',
            title: 'Tab 14 text with text',
            content_id: 'tab-14-content',
            content: <p>Content. Tab 14.</p>,
        },
        {
            id: 'tab-15',
            title: 'Tab 15',
            content_id: 'tab-15-content',
            content: <p>Content. Tab 15.</p>,
        },
        {
            id: 'tab-16',
            title: 'Tab 16 text with long text',
            content_id: 'tab-16-content',
            content: <p>Content. Tab 16.</p>,
        },
    ],
    radio: false,
    type: 'default',
    orientation: 'vertical',
};
demo.argTypes = {
    type: {
        control: {
            type: 'select',
            options: ['default', 'flushed', 'overflow'],
        },
    },
    orientation: {
        control: {
            type: 'select',
            options: ['horizontal', 'vertical'],
        },
    },
}