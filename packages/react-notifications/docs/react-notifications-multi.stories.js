import React from 'react';
import { Notifications } from '../lib/react-notifications';
import { Button } from '@wpmudev/react-button';

export default {
    title: 'Components/Notifications/Multi-Line'
}

const TypeOptions = {
    gray: '',
    blue: 'info',
    green: 'success',
    yellow: 'warning',
    red: 'error',
    purple: 'upsell'
};

const Template = ({ ...props }) => {
    return (
        <Notifications {...props} />
    );
}

export const primary = Template.bind({});
primary.storyName = 'Default';
primary.args = {
    children: [
        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>,
        <p>Aenean lacinia bibendum nulla sed consectetur.</p>
    ]
};
primary.argTypes = {
    type: {
        control: {
            type: 'select',
            options: TypeOptions
        }
    }
};

export const secondary = Template.bind({});
secondary.storyName = 'Dismissable';
secondary.args = {
    ...primary.args,
    dismiss: true
};
secondary.argTypes = {
    ...primary.argTypes
};

export const thirtiary = Template.bind({});
thirtiary.storyName = 'Action Button';
thirtiary.args = {
    children: [
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>,
        <p><Button label="Click Here" design="ghost" /></p>
    ],
    dismiss: true
};
thirtiary.argTypes = {
    ...primary.argTypes
};