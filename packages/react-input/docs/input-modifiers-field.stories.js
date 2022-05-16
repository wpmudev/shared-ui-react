import React from 'react';
import { Input } from '../lib/react-input';

export default {
	title: 'Components/Input/Field Modifiers',
	component: Input,
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

export const Size = () => {
	return (
		<Template>
			<Section
				title="Full Size"
				description="By default, the input field occupies the entire width of its parent container."
				code="&lt;Input placeholder=&quot;Placeholder&quot; /&gt;"
				isDefault={ true }>
				<Input placeholder="Username" />
			</Section>

			<Section
				title="Medium"
				description={
					[
						'Using this option, you can resize the input field to a maximum width of ',
						<strong>240px</strong>
					]
				}
				code="&lt;Input placeholder=&quot;Placeholder&quot; size=&quot;medium&quot; /&gt;">
				<Input placeholder="Username" size="medium" />
			</Section>

			<Section
				title="Small"
				description={
					[
						'Using this option, you can resize the input field to a maximum width of ',
						<strong>80px</strong>
					]
				}
				code="&lt;Input placeholder=&quot;Placeholder&quot; size=&quot;small&quot; /&gt;"
				isLast={ true }>
				<Input placeholder="Username" size="small" />
			</Section>
		</Template>
	);
};
Size.storyName = 'By Size';

export const Affix = () => {
	return (
		<Template>
			<Section
				title="Prefix"
				description="This will allow you to add some text before the input."
				code="&lt;Input placeholder=&quot;Placeholder&quot; prefix=&quot;$&quot; /&gt;">
				<Input placeholder="Username" prefix="$" />
			</Section>
			<Section
				title="Suffix"
				description="This will allow you to add some text after the input."
				isLast={true}
				code="&lt;Input placeholder=&quot;Placeholder&quot; suffix=&quot;suffix&quot; /&gt;">
				<Input placeholder="Username" suffix="suffix" />
			</Section>
		</Template>
	);
};
Affix.storyName = 'By Affix';
