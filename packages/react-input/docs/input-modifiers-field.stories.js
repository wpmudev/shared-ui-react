import React from 'react';
import { Input } from '../lib/react-input';

export default {
	title: 'Components/Input/Field Modifiers',
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

export const Type = () => {
	return (
		<Template>
			<Section
				title="Large"
				description={
					[
						"By default, the input field has ",
						<code>text</code>,
						" type assigned."
					]
				}
				code="&lt;Input placeholder=&quot;Placeholder&quot; /&gt;"
				isDefault={ true }>
				<Input placeholder="Username" />
			</Section>

			<Section
				title="Number"
				description={
					[
						'You can assign any allowed value that matches our designs such as:',
						<br />,
						<span className="sui-icon-chevron-right sui-sm" style={ { marginRight: 5, marginLeft: 10 } } aria-hidden="true" />,
						'text, number, email, password, tel, time, url, month ,week, hidden.'
					]
				}
				code="&lt;Input placeholder=&quot;Placeholder&quot; type=&quot;number&quot; /&gt;"
				isLast={ true }>
				<Input placeholder="Monthly Fee" type="number" />
			</Section>
		</Template>
	);
};
Type.storyName = 'By Type';

export const Affix = () => {
	return (
		<Template>
			<Section
				title="No Affix"
				description="By default, we don't add any affix next to the input field."
				code="&lt;Input placeholder=&quot;Placeholder&quot; /&gt;"
				isDefault={ true }>
				<Input placeholder="Username" />
			</Section>

			<Section
				title="Prefix"
				description={
					[
						'Using the ',
						<code>prefix</code>,
						' property, we can add some content before the input field.'
					]
				}
				code="&lt;Input placeholder=&quot;Placeholder&quot; prefix=&quot;prefix&quot; /&gt;">
				<Input placeholder="10.00" prefix="$" type="number" />
			</Section>

			<Section
				title="Suffix"
				description={
					[
						'Using the ',
						<code>suffix</code>,
						' property, we can add some content after the input field.'
					]
				}
				code="&lt;Input placeholder=&quot;Placeholder&quot; suffix=&quot;suffix&quot; /&gt;"
				isLast={ true }>
				<Input placeholder="10.00" suffix="USD" type="number" />
			</Section>

			<Section
				title="Both Affix"
				description="You can also use both affix properties if that's what the design requires."
				code="&lt;Input placeholder=&quot;Placeholder&quot; prefix=&quot;prefix&quot; suffix=&quot;suffix&quot; /&gt;"
				isLast={ true }>
				<Input placeholder="10.00" prefix="$" suffix="USD" type="number" />
			</Section>
		</Template>
	);
};
Affix.storyName = 'By Affix';

export const Size = () => {
	return (
		<Template>
			<Section
				title="Full Size"
				description="By default, the input field occupies the entire container."
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