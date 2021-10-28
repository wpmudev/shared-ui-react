import React from 'react';
import { Notifications, NotificationButton } from '../lib/react-notifications';

export default {
    title: 'Components/Notifications/Button'
}

const TypeOptions = {
    default: '',
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error',
    upsell: 'upsell',
    loading: 'loading'
};

const Template = ({ ...props }) => {
    return (
        <>
            <Notifications {...props} />
            <NotificationButton {...props} message="<p>Hello Button 1</p>"></NotificationButton>
            <NotificationButton buttonLabel="Next Icon"
	type="info"
	icon="info"
	dismiss=""
	dismissLabel=""
	dismissTooltip=""
	notificationId="float-notice-general"
	autoClose=""
	autoCloseTimeout="5000"
    message="<p>Hello Button 2</p>" ></NotificationButton>
        </>
    );
}

export const primary = Template.bind({});
primary.storyName = 'Default';
primary.args = {
    children: (
        <p>Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    ),
    floating: false,
    buttonLabel: 'Show',
    notificationId: 'float-notice-general',
    autoClose: true,
    autoCloseTimeout: 5000,
    icon: 'wordpress'    
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
    dismiss: true,
};
secondary.argTypes = {
    ...primary.argTypes,
};