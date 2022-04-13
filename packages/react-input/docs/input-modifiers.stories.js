import React from 'react';
import { Input } from '../lib/react-input';

export default {
	title: 'Components/Input/Modifiers',
	component: Input,
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

export const primary = () => {
	return (
		<Template>
			<Section
				title="Large"
				description="This is the default state of a input."
				code="&lt;Input description=&quot;Text description.&quot; label=&quot;Text Label&quot; placeholder=&quot;Placeholder&quot; type=&quot;text&quot; /&gt;"
				isDefault={ true }
				isLast={ false }>
				<Input
					description="Text description."
					label="Text Label"
					placeholder="Placeholder"
					type="text"
				/>
			</Section>
			<Section
				title="Medium"
				description="This is the default state of a input."
				code="&lt;Input description=&quot;Text description.&quot; label=&quot;Text Label&quot; placeholder=&quot;Placeholder&quot; type=&quot;text&quot; size=&quot;medium&quot; /&gt;"
				isDefault={ false }
				isLast={ false }>
				<Input
					description="Text description."
					label="Text Label"
					placeholder="Placeholder"
					type="text"
					size="medium"
				/>
			</Section>
			<Section
				title="Small"
				description="This is the default state of a input."
				code="&lt;Input description=&quot;Text description.&quot; label=&quot;Text Label&quot; placeholder=&quot;Placeholder&quot; type=&quot;text&quot; size=&quot;small&quot; /&gt;"
				isDefault={ false }
				isLast={ true }>
				<Input
					description="Text description."
					label="Text Label"
					placeholder="Placeholder"
					type="text"
					size="small"
				/>
			</Section>
		</Template>
	);
};
primary.storyName = 'By size';

export const secondary = () => {
	return (
		<Template>
			<Section
				title="Text"
				description="This is the default state of a input."
				code="&lt;Input description=&quot;Text description.&quot; label=&quot;Text Label&quot; placeholder=&quot;Placeholder&quot; type=&quot;text&quot; /&gt;"
				isDefault={ true }
				isLast={ false }>
				<Input
					description="Text description."
					label="Text Label"
					placeholder="Placeholder"
					type="text"
				/>
			</Section>
			<Section
				title="Number"
				description="This is the number input."
				code="&lt;Input description=&quot;Text description.&quot; label=&quot;Text Label&quot; placeholder=&quot;Placeholder&quot; type=&quot;number&quot; /&gt;"
				isDefault={ false }
				isLast={ true }>
				<Input
					description="Number description."
					label="Number Label"
					placeholder="Placeholder"
					type="number"
				/>
			</Section>
		</Template>
	);
};
secondary.storyName = 'By type';
