import React from 'react';
import { FieldList } from '../lib/react-field-list';

export default {
	title: 'Components/Field list',
	component: FieldList,
    args: {
        
    }
};

const Template = (args) => <FieldList {...args} />;

export const primary = Template.bind({});
primary.storyName = 'primary';
