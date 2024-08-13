import React from 'react';
import { Button } from '../lib/button';

export default {
	title: 'Components/Button/Modifiers',
	component: Button,
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
			<Section title="Solid Button" code='&lt;Button label="Button Label" /&gt;' isDefault={true}>
				<Button label="Button Label" />
			</Section>

			<Section
				title="Ghost Button"
				code='&lt;Button label="Button Label" design="ghost" /&gt;'
				isLast={true}
			>
				<Button label="Button Label" design="ghost" />
			</Section>
		</Template>
	);
};
design.storyName = 'By Design';

export const icon = () => {
	return (
		<Template>
			<Section title="No Icon" code='&lt;Button label="Button Label" /&gt;' isDefault={true}>
				<Button label="Button Label" />
			</Section>

			<Section
				title="Leading Icon"
				code='&lt;Button label="Button Label" icon="wpmudev-logo" /&gt;'
			>
				<Button label="Button Label" icon="wpmudev-logo" />
			</Section>

			<Section
				title="Trailing Icon"
				code='&lt;Button label="Button Label" icon="wpmudev-logo" iconRight={ true } /&gt;'
				isLast={true}
			>
				<Button label="Button Label" icon="wpmudev-logo" iconRight={true} />
			</Section>
		</Template>
	);
};
icon.storyName = 'By Icon';

export const color = () => {
	return (
		<Template>
			<Section
				title="Gray"
				code='&lt;Button label="Button Label" /&gt;'
				code2='&lt;Button label="Button Label" design="ghost" /&gt;'
				isDefault={true}
			>
				<Button label="Button Label" />
				<Button label="Button Label" design="ghost" />
			</Section>

			<Section
				title="Blue"
				code='&lt;Button label="Button Label" color="blue" /&gt;'
				code2='&lt;Button label="Button Label" color="blue" design="ghost" /&gt;'
			>
				<Button label="Button Label" color="blue" />
				<Button label="Button Label" color="blue" design="ghost" />
			</Section>

			<Section
				title="Green"
				code='&lt;Button label="Button Label" color="green" /&gt;'
				code2='&lt;Button label="Button Label" color="green" design="ghost" /&gt;'
			>
				<Button label="Button Label" color="green" />
				<Button label="Button Label" color="green" design="ghost" />
			</Section>

			<Section
				title="Red"
				code='&lt;Button label="Button Label" color="red" /&gt;'
				code2='&lt;Button label="Button Label" color="red" design="ghost" /&gt;'
			>
				<Button label="Button Label" color="red" />
				<Button label="Button Label" color="red" design="ghost" />
			</Section>

			<Section
				title="Orange"
				code='&lt;Button label="Button Label" color="orange" /&gt;'
				code2='&lt;Button label="Button Label" color="orange" design="ghost" /&gt;'
			>
				<Button label="Button Label" color="orange" />
				<Button label="Button Label" color="orange" design="ghost" />
			</Section>

			<Section
				title="Purple"
				code='&lt;Button label="Button Label" color="purple" /&gt;'
				code2='&lt;Button label="Button Label" color="purple" design="ghost" /&gt;'
			>
				<Button label="Button Label" color="purple" />
				<Button label="Button Label" color="purple" design="ghost" />
			</Section>

			<Section
				title="Yellow"
				code='&lt;Button label="Button Label" color="yellow" /&gt;'
				code2='&lt;Button label="Button Label" color="yellow" design="ghost" /&gt;'
			>
				<Button label="Button Label" color="yellow" />
				<Button label="Button Label" color="yellow" design="ghost" />
			</Section>

			<Section
				title="White"
				code='&lt;Button label="Button Label" color="white" /&gt;'
				code2='&lt;Button label="Button Label" color="white" design="ghost" /&gt;'
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
					<Button label="Button Label" color="white" />
					<Button label="Button Label" color="white" design="ghost" />
				</div>
			</Section>
		</Template>
	);
};
color.storyName = 'By Color';
