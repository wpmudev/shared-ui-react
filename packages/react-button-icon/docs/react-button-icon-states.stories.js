import React from 'react';
import { ButtonIcon } from '../lib/react-button-icon';

export default {
	title: 'Components/Button Icon/States',
	component: ButtonIcon,
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

export const primary = () => {
	return (
		<Template>
			<Section
				title="Enabled Button"
				description="This is the default state of an icon button. It is enabled and user can interact with it."
				code='&lt;ButtonIcon icon="icon-name" label="Button Label" /&gt;'
				isDefault={true}
				isLast={true}
			>
				<ButtonIcon icon="close" label="Button Label" />
			</Section>
		</Template>
	);
};
primary.storyName = 'Static';

export const loading = () => {
	return (
		<Template>
			<Section
				title="Loading Button"
				description="When user performs an action like save, this button state will indicate that something is going on in the background and must wait for it to complete."
				code='&lt;ButtonIcon icon="icon-name" label="Button Label" loading /&gt;'
				isLast={true}
			>
				<ButtonIcon icon="close" label="Button Label" loading />
			</Section>
		</Template>
	);
};
loading.storyName = 'Loading';

export const disabled = () => {
	return (
		<Template>
			<Section
				title="Disabled Button"
				description="This state indicates user that cannot interact with the button."
				code='&lt;ButtonIcon icon="icon-name" label="Button Label" disabled /&gt;'
				isLast={true}
			>
				<ButtonIcon icon="close" label="Button Label" disabled />
			</Section>
		</Template>
	);
};
disabled.storyName = 'Disabled';
