import React from 'react';
import { Tabs } from '../lib/react-tabs';

export default {
	title: 'Components/Tabs',
	component: Tabs,
	// parameters: {
	// 	notes: {
	// 		disabled: true,
	// 	},
	// },
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
        }
    ],
    radio: true
};