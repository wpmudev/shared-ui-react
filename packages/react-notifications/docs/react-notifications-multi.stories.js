import React from 'react';
import { Notifications } from '../lib/react-notifications';
import { Button } from '@wpmudev/react-button';

const TypeOptions = {
    gray: '',
    blue: 'info',
    green: 'success',
    yellow: 'warning',
    red: 'error',
    purple: 'upsell'
};

export default {
    title: 'Components/Notifications/Multi-Line',
    args: {
        children: [
            <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>,
            <p>Aenean lacinia bibendum nulla sed consectetur.</p>
        ],
        float: false,
        dismiss: false,
        type: ''
    },
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: TypeOptions
            }
        }
    }
}

const Template = ({ ...props }) => {
    return (
        <Notifications {...props} />
    );
}

export const primary = Template.bind({});
primary.storyName = 'Default';

export const secondary = Template.bind({});
secondary.storyName = 'Dismissable';
secondary.args = {
    dismiss: true
};

export const thirtiary = Template.bind({});
thirtiary.storyName = 'Action Button';
thirtiary.args = {
    children: [
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>,
        <p><Button label="Click Here" design="ghost" /></p>
    ],
    float: false,
    dismiss: true
};

export const floating = Template.bind({});
floating.storyName = 'Floating';
floating.args = {
    float: true
};