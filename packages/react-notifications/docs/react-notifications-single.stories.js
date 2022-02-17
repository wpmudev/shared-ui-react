import React from 'react';
import { Notifications } from '../lib/react-notifications';

const TypeOptions = {
    default: '',
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error',
    upsell: 'upsell',
    loading: 'loading'
};

export default {
    title: 'Components/Notifications/Single-Line',
    args: {
        children: (
            <p>Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        ),
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

export const floating = Template.bind({});
floating.storyName = 'Floating';
floating.args = {
    dismiss: true,
    float: true
};