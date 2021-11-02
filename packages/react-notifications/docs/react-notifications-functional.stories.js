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
        message="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum faucibus ultricies. Proin bibendum eget mi ut pellentesque. Sed dapibus tincidunt est eget laoreet. Phasellus suscipit dignissim risus nec aliquam. Suspendisse id elementum sapien. Suspendisse potenti. Proin dapibus erat imperdiet, mattis neque quis, hendrerit odio.</p>"
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
  buttonLabel: "Animate",
  notificationId: "float-notice-general",
  autoClose: true,
  autoCloseTimeout: 5000,
  icon: "info",
  animation: "fade",
  dismiss: false,
  dismissLabel: "Close",
  dismissTooltip: "Close",
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
