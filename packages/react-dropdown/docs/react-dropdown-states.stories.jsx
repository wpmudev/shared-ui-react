import React from 'react';
import { Dropdown } from '../lib/react-dropdown';

export default {
    title: 'Components/Dropdown/States',
	component: Dropdown,
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
}

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
			<div className="sui-border-frame">
				{ children }
			</div>
			{ !isLast && <hr /> }
		</>
	);
}

export const container = () => {
	return (
		<Template>
			<Section
				title="Enabled"
				code="&lt;Dropdown&gt; ... &lt;/Dropdown&gt;"
				isDefault={ true }>
				<Dropdown>
					<div name="Option 1" />
					<div name="Option 2" />
					<div name="Option 3" />
				</Dropdown>
			</Section>

			<Section
				title="Disabled"
				code="&lt;Dropdown disabled&gt; ... &lt;/Dropdown&gt;"
				isLast={ true }>
				<Dropdown disabled>
					<div name="Option 1" />
					<div name="Option 2" />
					<div name="Option 3" />
				</Dropdown>
			</Section>
		</Template>
	);
};
container.storyName = 'Container';

export const option = () => {
	return (
		<Template>
			<Section
				title="Enabled"
				code="&lt;Dropdown&gt;
					&lt;div name=&quot;Option Name&quot; /&gt;
				&lt;/Dropdown&gt;"
				isDefault={ true }>
				<Dropdown>
					<div name="Option 1" />
					<div name="Option 2" />
					<div name="Option 3" />
				</Dropdown>
			</Section>

			<Section
				title="Disabled"
				code="&lt;Dropdown&gt;
					&lt;div name=&quot;Option Name&quot; disabled /&gt;
				&lt;/Dropdown&gt;"
				isLast={ true }>
				<Dropdown>
					<div name="Option 1" disabled />
					<div name="Option 2" />
					<div name="Option 3" />
				</Dropdown>
			</Section>
		</Template>
	);
};
option.storyName = 'Option';