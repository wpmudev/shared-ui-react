import React from 'react';
import { Notifications } from '../lib/react-notifications';

const func = () => {
	console.log('You called an callback function...');
};

export default {
	title: 'Components/Notifications/Modifiers',
	component: Notifications,
	parameters: {
		actions: {
			disabled: true,
		},
		controls: {
			disabled: true,
		},
		notes: {
			disabled: true,
		},
		previewTabs: {
			'storybook/docs/panel': {
				hidden: true,
			},
		},
	},
};

const Demo = args => {
	return (
		<Notifications { ...args }>
			<p>Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
		</Notifications>
	);
};

const Template = ({ children }) => {
	return (
		<div className="sui-box">
			<div className="sui-box-body">
				{ children }
			</div>
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

	return (
		<h3 style={ customStyles }>{ children }</h3>
	);
}

const Description = ({ children }) => {
	const customStyles = {
		margin: 0,
		marginBottom: 10 + 'px',
	};

	return (
		<p className="sui-description" style={ customStyles }>
			{ children }
		</p>
	);
}

const Code = ({ spaceTop = 5, spaceBottom = 20, children }) => {
	const customStyles = {
		display: 'block',
		margin: 0,
		marginTop: spaceTop + 'px',
		marginBottom: spaceBottom + 'px',
		padding: 5 + 'px ' + 10 + 'px',
	};

	return (
		<code style={ customStyles }>{ children }</code>
	);
}

const Section = ({ title, description, code, code2, isDefault = false, isLast = false, children }) => {
	return (
		<>
			{ title && '' !== title && (
				<Title>{ title }{ isDefault && (
					<span
						className="sui-tag sui-tag-sm sui-tag-yellow"
						style={ { marginLeft: 10 + 'px' } }
						aria-hidden="true"
					>Default</span>
				)}</Title>
			)}
			{ description && '' !== description && (
				<Description>{ description }</Description>
			)}
			{ code && '' !== code && (
				<Code { ... ( code2 && '' !== code2 ) && { spaceBottom: 5 } }>{ code }</Code>
			)}
			{ code2 && '' !== code2 && (
				<Code>{ code2 }</Code>
			)}
			{ children }
			{ !isLast && <hr /> }
		</>
	);
}

export const color = () => {
	return (
		<Template>
			<Section
				title='Gray'
				description='By default, the notifications come in gray color.'
				code="&lt;Notification&gt;
					...
				&lt;/Notification&gt;"
				isDefault={ true }>
				<Demo />
			</Section>

			<Section
				title='Blue (Informative)'
				description='Use the blue color when your message needs to be informative.'
				code='&lt;Notification type=&quot;info&quot;&gt;
					...
				&lt;/Notification&gt;'>
				<Demo type='info' />
			</Section>

			<Section
				title='Green (Success)'
				description='The green color is used when you need to highlight that an action was performed with success.'
				code='&lt;Notification type=&quot;success&quot;&gt;
					...
				&lt;/Notification&gt;'>
				<Demo type='success' />
			</Section>

			<Section
				title='Red (Error)'
				description='Use the red color when there is an error message.'
				code='&lt;Notification type=&quot;error&quot;&gt;
					...
				&lt;/Notification&gt;'>
				<Demo type='error' />
			</Section>

			<Section
				title='Yellow (Warning)'
				description='Use the yellow color when you need to highlight a warning message.'
				code='&lt;Notification type=&quot;warning&quot;&gt;
					...
				&lt;/Notification&gt;'>
				<Demo type='warning' />
			</Section>

			<Section
				title='Purple (Upsell)'
				description='This color is only used when we highlight upsell content.'
				code='&lt;Notification type=&quot;upsell&quot;&gt;
					...
				&lt;/Notification&gt;'
				isLast={ true }>
				<Demo type='upsell' />
			</Section>
		</Template>
	);
};
color.storyName = 'Color';

export const dismiss = () => {
	return (
		<Template>
			<Section
				title='Hide Dismiss'
				code="&lt;Notification&gt;
					...
				&lt;/Notification&gt;"
				isDefault={ true }>
				<Demo />
			</Section>

			<Section
				title='Show Dismiss'
				code="&lt;Notification dismiss=&quot;true&quot;&gt;
					...
				&lt;/Notification&gt;"
				isLast={ true }>
				<Demo dismiss="true" cbFunction={() => func()} />
			</Section>
		</Template>
	);
};
dismiss.storyName = 'Dismiss';