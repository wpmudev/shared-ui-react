import React from 'react';
import { Selectors } from '../lib/react-selectors';

export default {
	title: 'Components/Selectors',
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

const simpleContent = [
	{
		id: "unique-id-1",
		label: "Element text",
		labelId: "label-id-1",
		description: "Element description",
		descriptionId: "description-id-1",
		icon: "info",
		vertical: true,
	},
	{
		id: "unique-id-2",
		label: "Element text",
		labelId: "label-id-2",
		description: "Element description",
		descriptionId: "description-id-2",
		icon: "info",
		vertical: true,
	},
	{
		id: "unique-id-3",
		label: "Element text",
		labelId: "label-id-3",
		description: "Element description",
		descriptionId: "description-id-3",
		icon: "info",
		vertical: true,
		disabled: true,
		isPro: true,
	},
	{
		id: "unique-id-4",
		label: "Element text",
		labelId: "label-id-4",
		description: "Element description",
		descriptionId: "description-id-4",
		icon: "info",
		vertical: true,
	}
];

export const Simple = () => {
	return (
		<StorySection
			title="Simple"
			description="By default the box selectors are aligned horizontal, based on its icon + text position, and text is always left aligned."
			code="&lt;Tabs tabs={tabsData} /&gt;"
			isDefault={ true }
			isLast={ true }>
			<Selectors name="simple" content={simpleContent} />
		</StorySection>
	);
};
Simple.storyName = 'Simple Tabs';