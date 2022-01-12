import React from 'react';
import { Calendar } from '../lib/react-calendar';

export default {
	title: 'Components/Calendar',
    argTypes:{
        type:{
            name: 'string',
            required: false
        }
    }
};

const Template = ({ ...args }) => {
    return (
        <Calendar { ...args }/>
    );
};

export const primary = Template.bind({});
primary.storyName = 'Default';
primary.args = {};
