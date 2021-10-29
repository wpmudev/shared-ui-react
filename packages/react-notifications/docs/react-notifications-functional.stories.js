import React from "react";
import { Notifications, NotificationButton } from "../lib/react-notifications";

export default {
  title: "Components/Notifications/Notification-Functional",
};

const TypeOptions = {
  default: "",
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
  upsell: "upsell",
  loading: "loading",
};

const AnimationOptions = {
  default: "",
  fade: "fade",
  slide: "slide",
}

const Template = ({ ...props }) => {
  return (
    <>
      <Notifications {...props} />
      <NotificationButton
        {...props}
        message="<p>Hello Button 1</p>"
      ></NotificationButton>
      <NotificationButton
        buttonLabel="Slide"
        type="info"
        icon="info"
        dismiss={true}
        dismissLabel="Close"
        dismissTooltip="Close"
        notificationId="float-notice-general"
        autoClose={false}
        autoCloseTimeout="5000"
        animation="slide"
        message="<p>Hello Button 2</p>"
      ></NotificationButton>
    </>
  );
};

export const primary = Template.bind({});
primary.storyName = "Default";
primary.args = {
  children: (
    <p>
      Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit
      sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum
      at eros. Donec ullamcorper nulla non metus auctor fringilla. Nullam id
      dolor id nibh ultricies vehicula ut id elit.
    </p>
  ),
  floating: false,
  buttonLabel: "Fade",
  notificationId: "float-notice-general",
  autoClose: true,
  autoCloseTimeout: 5000,
  icon: "wordpress",
  animation: "fade",
  dismiss: false
};
primary.argTypes = {
  type: {
    control: {
      type: "select",
      options: TypeOptions,
    },
  },
  animation: {
    control: {
      type: "select",
      options: AnimationOptions,
    },
  }
};

export const secondary = Template.bind({});
secondary.storyName = "Dismissable";
secondary.args = {
  ...primary.args,
  dismiss: true,
};
secondary.argTypes = {
  ...primary.argTypes,
};
