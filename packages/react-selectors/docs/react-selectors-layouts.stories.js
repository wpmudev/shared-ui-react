import React from 'react';
import { Selectors } from '../lib/react-selectors';

export default {
	title: 'Components/Selectors/Layouts',
	component: Selectors,
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
	decorators: [
		( Story ) => (
			<div className="sui-box">
				<div className="sui-box-body">
					<Story />
				</div>
			</div>
		),
	],
};

const StoryTitle = ({ children }) => {
	const customStyles = {
		margin: 0,
		marginBottom: 10 + 'px',
		color: '#333',
		fontSize: 14 + 'px',
		lineHeight: 22 + 'px',
	};

	return (
		<h2 style={ customStyles }>{ children }</h2>
	);
}

const StoryDescription = ({ children }) => {
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

const StoryCode = ({ spaceTop = 5, spaceBottom = 20, children }) => {
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

const StorySection = ({ title, description, code, code2, isDefault = false, isLast = false, children }) => {
	return (
		<>
			{ title && '' !== title && (
				<StoryTitle>{ title }{ isDefault && (
					<span
						className="sui-tag sui-tag-sm sui-tag-yellow"
						style={ { marginLeft: 10 + 'px' } }
						aria-hidden="true"
					>Default</span>
				)}</StoryTitle>
			)}
			{ description && '' !== description && (
				<StoryDescription>{ description }</StoryDescription>
			)}
			{ code && '' !== code && (
				<StoryCode { ... ( code2 && '' !== code2 ) && { spaceBottom: 5 } }>{ code }</StoryCode>
			)}
			{ code2 && '' !== code2 && (
				<StoryCode>{ code2 }</StoryCode>
			)}
			{ children }
			{ !isLast && <hr /> }
		</>
	);
}

const content = [
	{
		id: "unique-id-1",
		label: "Auto Col",
		labelId: "label-id-1",
		vertical: true,
	},
	{
		id: "unique-id-2",
		label: "Auto Col",
		labelId: "label-id-2",
		vertical: true,
	},
	{
		id: "unique-id-3",
		label: "Auto Col",
		labelId: "label-id-3",
		vertical: true,
	},
	{
		id: "unique-id-4",
		label: "Auto Col",
		labelId: "label-id-4",
		vertical: true,
	},
	{
		id: "unique-id-5",
		label: "Auto Col",
		labelId: "label-id-5",
		vertical: true,
	},
];

const oneCol = [
	{
		id: "one-unique-id-1",
		label: "One Column",
		labelId: "one-label-id-1",
		vertical: true,
	},
	{
		id: "one-unique-id-2",
		label: "One Column",
		labelId: "one-label-id-2",
		vertical: true,
	},
	{
		id: "one-unique-id-3",
		label: "One Column",
		labelId: "one-label-id-3",
		vertical: true,
	},
	{
		id: "one-unique-id-4",
		label: "One Column",
		labelId: "one-label-id-4",
		vertical: true,
	},
	{
		id: "one-unique-id-5",
		label: "One Column",
		labelId: "one-label-id-5",
		vertical: true,
	},
	{
		id: "one-unique-id-6",
		label: "One Column",
		labelId: "one-label-id-6",
		vertical: true,
	},
];

export const auto = () => {
	return (
		<StorySection
			title="Auto-Width Columns"
			description="Not matter how many elements are, they all will be placed in one row."
			code="&lt;Selectors name=&quot;autowidth&quot; content={content} /&gt;"
			isLast={true}>
			<Selectors name="autowidth" content={content} />
		</StorySection>
	);
};
auto.storyName = 'Auto Width';

export const one = () => {
	return (
		<StorySection
			title="1 Column"
			description="The elements will occupy the full-width of the row."
			code="&lt;Selectors name=&quot;one&quot; columns=&quot;one&quot; content={oneCol} /&gt;"
			isLast={true}>
			<Selectors name="one" columns="one" content={oneCol} />
		</StorySection>
	);
};
one.storyName = '1 Column';

export const two = () => {
	return (
		<StorySection
			title="2 Column"
			description="The elements will have 50% width and will be placed a max of two elements per row."
			code="&lt;Selectors name=&quot;two&quot; columns=&quot;two&quot; content={oneCol} /&gt;"
			isLast={true}>
			<Selectors name="two" columns="two" content={oneCol} />
		</StorySection>
	);
};
two.storyName = '2 Column';

export const three = () => {
	return (
		<StorySection
			title="3 Column"
			description="Elements will ocuppy a third of a row, allowing a max of 3 elements to be placed per row."
			code="&lt;Selectors name=&quot;three&quot; columns=&quot;three&quot; content={oneCol} /&gt;"
			isLast={true}>
			<Selectors name="three" columns="three" content={oneCol} />
		</StorySection>
	);
};
three.storyName = '3 Column';

export const four = () => {
	return (
		<StorySection
			title="4 Column"
			description="Elements will ocuppy a fourth of a row, allowing a max of 4 elements to be placed per row."
			code="&lt;Selectors name=&quot;four&quot; columns=&quot;four&quot; content={oneCol} /&gt;"
			isLast={true}>
			<Selectors name="four" columns="four" content={oneCol} />
		</StorySection>
	);
};
four.storyName = '4 Column';

export const five = () => {
	return (
		<StorySection
			title="5 Column"
			description="Elements will ocuppy a fifth of a row, allowing a max of 5 elements to be placed per row."
			code="&lt;Selectors name=&quot;five&quot; columns=&quot;five&quot; content={oneCol} /&gt;"
			isLast={true}>
			<Selectors name="five" columns="five" content={oneCol} />
		</StorySection>
	);
};
five.storyName = '5 Column';
