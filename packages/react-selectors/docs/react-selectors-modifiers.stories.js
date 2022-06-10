import React from 'react';
import { Selectors } from '../lib/react-selectors';

export default {
	title: 'Components/Selectors/Design',
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
		label: "Checked",
		labelId: "label-id-1",
		icon: "info",
		checked: true,
	},
	{
		id: "unique-id-2",
		label: "Unchecked",
		labelId: "label-id-2",
		icon: "info",
	},
	{
		id: "unique-id-3",
		label: "Unchecked",
		labelId: "label-id-3",
		icon: "info",
	},
	{
		id: "unique-id-4",
		label: "Unchecked",
		labelId: "label-id-4",
		icon: "info",
	},
	{
		id: "unique-id-5",
		label: "Unchecked",
		labelId: "label-id-5",
		icon: "info",
		disabled: true,
		isPro: true,
	},
];

const simpleVerticalContent = [
	{
		id: "vertical-unique-id-1",
		label: "Checked",
		labelId: "vertical-label-id-1",
		checked: true,
		icon: "info",
		vertical: true,
	},
	{
		id: "vertical-unique-id-2",
		label: "Unchecked",
		labelId: "vertical-label-id-2",
		icon: "info",
		vertical: true,
	},
	{
		id: "vertical-unique-id-3",
		label: "Unchecked",
		labelId: "vertical-label-id-3",
		icon: "info",
		vertical: true,
	},
	{
		id: "vertical-unique-id-4",
		label: "Unchecked",
		labelId: "vertical-label-id-4",
		icon: "info",
		vertical: true,
	},
	{
		id: "vertical-unique-id-5",
		label: "Unchecked",
		labelId: "vertical-label-id-5",
		icon: "info",
		vertical: true,
		disabled: true,
		isPro: true,
	},
];

const compoundContent = [
	{
		id: "compound-unique-id-1",
		label: "Checked",
		labelId: "compound-label-id-1",
		icon: "info",
		description: "This is a description",
		descriptionId: "compound-description-id-1",
		checked: true,
	},
	{
		id: "compound-unique-id-2",
		label: "Unchecked",
		labelId: "compound-label-id-2",
		icon: "info",
		description: "This is a description",
		descriptionId: "compound-description-id-2",
	},
	{
		id: "compound-unique-id-3",
		label: "Unchecked",
		labelId: "compound-label-id-3",
		icon: "info",
		description: "This is a description",
		descriptionId: "compound-description-id-3",
	},
	{
		id: "compound-unique-id-4",
		label: "Unchecked",
		labelId: "compound-label-id-4",
		icon: "info",
		description: "This is a description",
		descriptionId: "compound-description-id-4",
	},
	{
		id: "compound-unique-id-5",
		label: "Unchecked",
		labelId: "compound-label-id-5",
		icon: "info",
		description: "This is a description",
		descriptionId: "compound-description-id-5",
		disabled: true,
		isPro: true,
	},
];

const compoundVerticalContent = [
	{
		id: "vertical-compound-unique-id-1",
		label: "Checked",
		labelId: "vertical-compound-label-id-1",
		icon: "info",
		description: "This is a description",
		descriptionId: "vertical-compound-description-id-1",
		checked: true,
		vertical: true,
	},
	{
		id: "vertical-compound-unique-id-2",
		label: "Unchecked",
		labelId: "vertical-compound-label-id-2",
		icon: "info",
		description: "This is a description",
		descriptionId: "vertical-compound-description-id-2",
		vertical: true,
	},
	{
		id: "vertical-compound-unique-id-3",
		label: "Unchecked",
		labelId: "vertical-compound-label-id-3",
		icon: "info",
		description: "This is a description",
		descriptionId: "vertical-compound-description-id-3",
		vertical: true,
	},
	{
		id: "vertical-compound-unique-id-4",
		label: "Unchecked",
		labelId: "vertical-compound-label-id-4",
		icon: "info",
		description: "This is a description",
		descriptionId: "vertical-compound-description-id-4",
		vertical: true,
	},
	{
		id: "vertical-compound-unique-id-5",
		label: "Unchecked",
		labelId: "vertical-compound-label-id-5",
		icon: "info",
		description: "This is a description",
		descriptionId: "vertical-compound-description-id-5",
		disabled: true,
		isPro: true,
		vertical: true,
	},
];

export const Default = () => {
	return (
		<>
			<StorySection
				title="Simple"
				description="By default the box selectors are aligned horizontal, based on its icon + text position, and text is always left aligned."
				code="&lt;Selectors name=&quot;simple&quot; columns=&quot;three&quot; content={simpleContent} /&gt;"
				isDefault={ true }>
				<Selectors name="simple" columns="three" content={simpleContent} />
			</StorySection>
			<StorySection
				title="Compound"
				description="There are some cases where you gonna need to include a description for the items."
				code="&lt;Selectors name=&quot;compound&quot; columns=&quot;three&quot; content={compoundContent} /&gt;"
				isLast={ true }>
				<Selectors name="compound" columns="three" content={compoundContent} />
			</StorySection>
		</>
	);
};
Default.storyName = 'Default';

export const Vertical = () => {
	return (
		<>
			<StorySection
				title="Simple"
				description="You can vertical align box selectors where its text will always be center aligned and icon will be placed on top of text."
				code="&lt;Selectors name=&quot;vertical&quot; columns=&quot;three&quot; content={simpleVerticalContent} /&gt;"
				isDefault={true}>
				<Selectors name="vertical" columns="three" content={simpleVerticalContent} />
			</StorySection>
			<StorySection
				title="Compound"
				description="There are some cases where you gonna need to include a description for the items."
				code="&lt;Selectors name=&quot;compound&quot; columns=&quot;three&quot; content={compoundVerticalContent} /&gt;"
				isLast={ true }>
				<Selectors name="compound" columns="three" content={compoundVerticalContent} />
			</StorySection>
		</>
	);
};
Vertical.storyName = 'Vertical';