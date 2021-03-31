import React from 'react';
import { Notifications } from '../lib/notifications';

export default {
    title: 'Components/Notifications'
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
        <Notifications {...props}></Notifications>
    );
}

export const primary = Template.bind({});
primary.storyName = 'Default';
primary.args = {
    message: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit.'
};
primary.argTypes = {
    type: {
        control: {
            type: 'select',
            options: TypeOptions
        }
    }
};