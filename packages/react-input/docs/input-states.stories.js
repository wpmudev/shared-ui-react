import React from 'react';
import { Input } from '../lib/react-input';

export default {
	title: 'Components/Input/States',
	component: Input,
	parameters: {
		actions: {
			disable: true,
		},
		controls: {
			disable: true,
		},
		notes: {
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
			<div className="sui-box-body">
				{children}
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

export const Primary = () => {
	return (
		<Template>
			<Section
				title="Static"
				description="This is the default (enabled) state of an input."
				code="&lt;Input placeholder=&quot;Placeholder&quot; /&gt;"
				isDefault={ true }
				isLast={ true }>
				<Input placeholder="Username" />
			</Section>
		</Template>
	);
};
Primary.storyName = 'Static';

export const Error = () => {
	return (
		<Template>
			<Section
				title="Error"
				description="We show this variation when the input has any error."
				code="&lt;Input errorDescription=&quot;Error message&quot; errorStatus={ true } /&gt;"
				isLast={ true }>
				<Input
					placeholder="Username"
					errorDescription="The user doesn't exist. Please, try again with a different user name."
					errorStatus={ true }
				/>
			</Section>
		</Template>
	);
};
Error.storyName = 'Error';

export const Disabled = () => {
	return (
		<Template>
			<Section
				title="Disabled"
				description="Prevent user from interacting with the input field."
				code="&lt;Input placeholder=&quot;Placeholder&quot; disabled /&gt;"
				isLast={ true }>
				<Input placeholder="Username" disabled />
			</Section>
		</Template>
	);
};
Disabled.storyName = 'Disabled';
