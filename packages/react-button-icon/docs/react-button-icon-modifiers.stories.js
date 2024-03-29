import React from 'react';
import { ButtonIcon } from '../lib/react-button-icon';

export default {
	title: 'Components/Button Icon/Modifiers',
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

export const design = () => {
	return (
		<Template>
			<Section
				title="Ghost Button"
				code='&lt;ButtonIcon icon="icon-name" label="Button Label" /&gt;'
				isDefault={true}
			>
				<ButtonIcon icon="close" label="Button Label" />
			</Section>

			<Section
				title="Outlined Button"
				code='&lt;ButtonIcon icon="icon-name" label="Button Label" design="outlined" /&gt;'
				isLast={true}
			>
				<ButtonIcon icon="close" label="Button Label" design="outlined" />
			</Section>
		</Template>
	);
};
design.storyName = 'By Design';

export const color = () => {
	return (
		<Template>
			<Section
				title="Gray"
				description="This is the default color for the icon button."
				code='&lt;ButtonIcon label="Button Label" icon="icon-name" /&gt;'
				code2='&lt;ButtonIcon label="Button Label" icon="icon-name" design="outlined" /&gt;'
				isDefault={true}
			>
				<ButtonIcon label="Button Label" icon="wpmudev-logo" />
				<ButtonIcon label="Button Label" icon="wpmudev-logo" design="outlined" />
			</Section>

			<Section
				title="Blue"
				description="Some primary actions might require this color variation."
				code='&lt;ButtonIcon label="Button Label" icon="icon-name" color="blue" /&gt;'
				code2='&lt;ButtonIcon label="Button Label" icon="icon-name" color="blue" design="outlined" /&gt;'
			>
				<ButtonIcon label="Button Label" icon="wpmudev-logo" color="blue" />
				<ButtonIcon label="Button Label" icon="wpmudev-logo" color="blue" design="outlined" />
			</Section>

			<Section
				title="Green"
				description="Another color alternative. Not used very often."
				code='&lt;ButtonIcon label="Button Label" icon="icon-name" color="green" /&gt;'
				code2='&lt;ButtonIcon label="Button Label" icon="icon-name" color="green" design="outlined" /&gt;'
			>
				<ButtonIcon label="Button Label" icon="wpmudev-logo" color="green" />
				<ButtonIcon label="Button Label" icon="wpmudev-logo" color="green" design="outlined" />
			</Section>

			<Section
				title="Red"
				description="Delete actions make use of this color variation."
				code='&lt;ButtonIcon label="Button Label" icon="icon-name" color="red" /&gt;'
				code2='&lt;ButtonIcon label="Button Label" icon="icon-name" color="red" design="outlined" /&gt;'
			>
				<ButtonIcon label="Button Label" icon="wpmudev-logo" color="red" />
				<ButtonIcon label="Button Label" icon="wpmudev-logo" color="red" design="outlined" />
			</Section>

			<Section
				title="Orange"
				description="Another color alternative. Not used very often."
				code='&lt;ButtonIcon label="Button Label" icon="icon-name" color="orange" /&gt;'
				code2='&lt;ButtonIcon label="Button Label" icon="icon-name" color="orange" design="outlined" /&gt;'
			>
				<ButtonIcon label="Button Label" icon="wpmudev-logo" color="orange" />
				<ButtonIcon label="Button Label" icon="wpmudev-logo" color="orange" design="outlined" />
			</Section>

			<Section
				title="Purple"
				description="Color variation commonly used on upsell actions."
				code='&lt;ButtonIcon label="Button Label" icon="icon-name" color="purple" /&gt;'
				code2='&lt;ButtonIcon label="Button Label" icon="icon-name" color="purple" design="outlined" /&gt;'
			>
				<ButtonIcon label="Button Label" icon="wpmudev-logo" color="purple" />
				<ButtonIcon label="Button Label" icon="wpmudev-logo" color="purple" design="outlined" />
			</Section>

			<Section
				title="Yellow"
				description="Another color alternative. Not used very often."
				code='&lt;ButtonIcon label="Button Label" icon="icon-name" color="yellow" /&gt;'
				code2='&lt;ButtonIcon label="Button Label" icon="icon-name" color="yellow" design="outlined" /&gt;'
			>
				<ButtonIcon label="Button Label" icon="wpmudev-logo" color="yellow" />
				<ButtonIcon label="Button Label" icon="wpmudev-logo" color="yellow" design="outlined" />
			</Section>

			<Section
				title="White"
				description="Another color alternative. Commonly used on top of images, for example a dialog banner."
				code='&lt;ButtonIcon label="Button Label" icon="icon-name" color="white" /&gt;'
				code2='&lt;ButtonIcon label="Button Label" icon="icon-name" color="white" design="outlined" /&gt;'
				isLast={true}
			>
				<div
					style={{
						display: 'block',
						padding: 20 + 'px',
						borderRadius: 4 + 'px',
						background: '#AAA',
					}}
				>
					<ButtonIcon label="Button Label" icon="wpmudev-logo" color="white" />
					<ButtonIcon label="Button Label" icon="wpmudev-logo" color="white" design="outlined" />
				</div>
			</Section>
		</Template>
	);
};
color.storyName = 'By Color';

export const size = () => {
	return (
		<Template>
			<Section
				title="Small - 12px"
				code='&lt;ButtonIcon label="Button Label" icon="icon-name" /&gt;'
				isDefault={true}
			>
				<ButtonIcon label="Button Label" icon="wpmudev-logo" />
			</Section>

			<Section
				title="Medium - 16px"
				code='&lt;ButtonIcon label="Button Label" icon="icon-name" iconSize="md" /&gt;'
			>
				<ButtonIcon label="Button Label" icon="wpmudev-logo" iconSize="md" />
			</Section>

			<Section
				title="Large - 20px"
				code='&lt;ButtonIcon label="Button Label" icon="icon-name" iconSize="lg" /&gt;'
				isLast={true}
			>
				<ButtonIcon label="Button Label" icon="wpmudev-logo" iconSize="lg" />
			</Section>
		</Template>
	);
};
size.storyName = 'By Size';
