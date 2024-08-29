import React from 'react';
import { Notifications } from '../lib/react-notifications';

export default {
	title: 'Components/Notifications/Modifiers',
	component: Notifications,
	parameters: {
		actions: {
			disable: true,
		},
		controls: {
			disable: true,
		},
		previewTabs: {
			'storybook/docs/panel': {
				hidden: true,
			},
		},
	},
};

const Demo = (args) => {
	return (
		<Notifications {...args}>
			<p>
				Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo
				risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor
				fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit.
			</p>
		</Notifications>
	);
};

const Template = ({ children }) => {
	return (
		<div className="sui-box">
			<div className="sui-box-body">{children}</div>
		</div>
	);
};

const Title = ({ children }) => {
	const customStyles = {
		margin: 0,
		marginBottom: 10 + 'px',
		color: '#333',
		fontSize: 14 + 'px',
		lineHeight: 22 + 'px',
	};

	return <h3 style={customStyles}>{children}</h3>;
};

const Description = ({ children }) => {
	const customStyles = {
		margin: 0,
		marginBottom: 10 + 'px',
	};

	return (
		<p className="sui-description" style={customStyles}>
			{children}
		</p>
	);
};

const Code = ({ spaceTop = 5, spaceBottom = 20, children }) => {
	const customStyles = {
		display: 'block',
		margin: 0,
		marginTop: spaceTop + 'px',
		marginBottom: spaceBottom + 'px',
		padding: 5 + 'px ' + 10 + 'px',
	};

	return <code style={customStyles}>{children}</code>;
};

const Section = ({
	title,
	description,
	code,
	code2,
	isDefault = false,
	isLast = false,
	children,
}) => {
	return (
		<>
			{title && '' !== title && (
				<Title>
					{title}
					{isDefault && (
						<span
							className="sui-tag sui-tag-sm sui-tag-yellow"
							style={{ marginLeft: 10 + 'px' }}
							aria-hidden="true"
						>
							Default
						</span>
					)}
				</Title>
			)}
			{description && '' !== description && <Description>{description}</Description>}
			{code && '' !== code && (
				<Code {...(code2 && '' !== code2 && { spaceBottom: 5 })}>{code}</Code>
			)}
			{code2 && '' !== code2 && <Code>{code2}</Code>}
			{children}
			{!isLast && <hr />}
		</>
	);
};

export const color = () => {
	return (
		<Template>
			<Section
				title="Gray"
				description="By default, the notifications come in gray color."
				code="&lt;Notification&gt;
					...
				&lt;/Notification&gt;"
				isDefault={true}
			>
				<Demo />
			</Section>

			<Section
				title="Blue (Informative)"
				description="Use the blue color when your message needs to be informative."
				code='&lt;Notification type="info"&gt;
					...
				&lt;/Notification&gt;'
			>
				<Demo type="info" />
			</Section>

			<Section
				title="Green (Success)"
				description="The green color is used when you need to highlight that an action was performed with success."
				code='&lt;Notification type="success"&gt;
					...
				&lt;/Notification&gt;'
			>
				<Demo type="success" />
			</Section>

			<Section
				title="Red (Error)"
				description="Use the red color when there is an error message."
				code='&lt;Notification type="error"&gt;
					...
				&lt;/Notification&gt;'
			>
				<Demo type="error" />
			</Section>

			<Section
				title="Yellow (Warning)"
				description="Use the yellow color when you need to highlight a warning message."
				code='&lt;Notification type="warning"&gt;
					...
				&lt;/Notification&gt;'
			>
				<Demo type="warning" />
			</Section>

			<Section
				title="Purple (Upsell)"
				description="This color is only used when we highlight upsell content."
				code='&lt;Notification type="upsell"&gt;
					...
				&lt;/Notification&gt;'
				isLast={true}
			>
				<Demo type="upsell" />
			</Section>
		</Template>
	);
};
color.storyName = 'Color';

export const dismiss = () => {
	return (
		<Template>
			<Section
				title="Simple Notice"
				description="By default, the notifications doesn't show a dismiss button. It is just plain text."
				code="&lt;Notification&gt;
					...
				&lt;/Notification&gt;"
				isDefault={true}
			>
				<Demo />
			</Section>

			<Section
				title="Simple Dismiss"
				description="With this property, you can show the dismiss button, it will close the notification but after refreshing the page it will appear again."
				code='&lt;Notification dismiss="true"&gt;
					...
				&lt;/Notification&gt;'
				isLast={true}
			>
				<Demo dismiss="true" />
			</Section>

			<Section
				title="Callback Dismiss"
				description="Show dismiss button with callback function. For example, display alert window after notice closes."
				code="&lt;Notification dismiss=&quot;true&quot; cbFunction={() => { window.alert( 'Hello' ) }}&gt;
					...
				&lt;/Notification&gt;"
				isLast={true}
			>
				<Demo
					dismiss="true"
					cbFunction={() => {
						window.alert('Refresh the page to show the notice again.');
					}}
				/>
			</Section>
		</Template>
	);
};
dismiss.storyName = 'Dismiss';
