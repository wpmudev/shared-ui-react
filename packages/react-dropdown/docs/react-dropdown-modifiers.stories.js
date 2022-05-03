import React from 'react';
import { Dropdown } from '../lib/react-dropdown';

export default {
    title: 'Components/Dropdown/Modifiers',
	component: Dropdown,
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

export const position = () => {
	return (
		<Template>
			<Section
				title="Left"
				description="The dropdown list is aligned to the left."
				code="&lt;Dropdown position=&quot;left&quot;&gt; ... &lt;/Dropdown&gt;"
				isDefault={ true }>
				<Dropdown position="left">
					<div name="Option 1" />
					<div name="Option 2" />
					<div name="Option 3" />
				</Dropdown>
			</Section>

			<Section
				title="Right"
				description="The dropdown list is aligned to the right."
				code="&lt;Dropdown position=&quot;right&quot;&gt; ... &lt;/Dropdown&gt;">
				<Dropdown position="right">
					<div name="Option 1" />
					<div name="Option 2" />
					<div name="Option 3" />
				</Dropdown>
			</Section>

			<Section
				title="Center"
				description="The dropdown list is aligned to the center."
				code="&lt;Dropdown position=&quot;center&quot;&gt; ... &lt;/Dropdown&gt;"
				isLast={ true }>
				<Dropdown position="center">
					<div name="Option 1" />
					<div name="Option 2" />
					<div name="Option 3" />
				</Dropdown>
			</Section>
		</Template>
	);
};
position.storyName = 'By Position';

export const icon = () => {
	return (
		<Template>
			<Section
				title="No Icon"
				description="By default each option doesn't contain an icon."
				code="&lt;Dropdown&gt; &lt;div name=&quot;Option Name&quot; /&gt; &lt;/Dropdown&gt;"
				isDefault={ true }>
				<Dropdown>
					<div name="Option 1" />
					<div name="Option 2" />
					<div name="Option 3" />
				</Dropdown>
			</Section>

			<Section
				title="With Icon"
				description="Place an icon at the left of the option name."
				code="&lt;Dropdown&gt; &lt;div name=&quot;Option Name&quot; icon=&quot;icon-name&quot; /&gt; &lt;/Dropdown&gt;"
				isLast={ true }>
				<Dropdown>
					<div name="Option 1" icon="wpmudev-logo" />
					<div name="Option 2" icon="hustle" />
					<div name="Option 3" icon="forminator" />
				</Dropdown>
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
				description="By default, the dropdown options label have gray color."
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
				title="Blue"
				description="If you need to highlight a dropdown option as a primary action, you might require this color variation."
				code="&lt;Dropdown&gt;
					&lt;div name=&quot;Option Name&quot; color=&quot;blue&quot; /&gt;
				&lt;/Dropdown&gt;">
				<Dropdown>
					<div name="Option 1" color="blue" />
					<div name="Option 2" />
					<div name="Option 3" />
				</Dropdown>
			</Section>

			<Section
				title="Red"
				description="This color variation is commonly associated to delete actions."
				code="&lt;Dropdown&gt;
					&lt;div name=&quot;Option Name&quot; color=&quot;red&quot; /&gt;
				&lt;/Dropdown&gt;">
				<Dropdown>
					<div name="Option 1" color="red" />
					<div name="Option 2" />
					<div name="Option 3" />
				</Dropdown>
			</Section>

			<Section
				title="Green"
				description="This one works as an alternative color for the dropdown option."
				code="&lt;Dropdown&gt;
					&lt;div name=&quot;Option Name&quot; color=&quot;green&quot; /&gt;
				&lt;/Dropdown&gt;">
				<Dropdown>
					<div name="Option 1" color="green" />
					<div name="Option 2" />
					<div name="Option 3" />
				</Dropdown>
			</Section>

			<Section
				title="Purple"
				description="This one works as an alternative color for the dropdown option."
				code="&lt;Dropdown&gt;
					&lt;div name=&quot;Option Name&quot; color=&quot;purple&quot; /&gt;
				&lt;/Dropdown&gt;">
				<Dropdown>
					<div name="Option 1" color="purple" />
					<div name="Option 2" />
					<div name="Option 3" />
				</Dropdown>
			</Section>

			<Section
				title="Yellow"
				description="This one works as an alternative color for the dropdown option."
				code="&lt;Dropdown&gt;
					&lt;div name=&quot;Option Name&quot; color=&quot;yellow&quot; /&gt;
				&lt;/Dropdown&gt;"
				isLast={ true }>
				<Dropdown>
					<div name="Option 1" color="yellow" />
					<div name="Option 2" />
					<div name="Option 3" />
				</Dropdown>
			</Section>
		</Template>
	);
};
color.storyName = 'By Color';