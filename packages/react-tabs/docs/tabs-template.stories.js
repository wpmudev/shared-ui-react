import React from 'react';
import { Tabs } from '../lib/react-tabs';
import { Accordion, AccordionItem } from '@wpmudev/react-accordion';

export default {
	title: 'Components/Tabs/Template',
	component: Tabs,
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

const tabsData = [
	{
		id: 'metrics',
		title: 'METRICS',
		content_id: 'metrics-content',
		content: <p>Content. Metrics.</p>,
	},
	{
		id: 'audits',
		title: 'AUDITS',
		content_id: 'audits-content',
		content: <p>Content. Audtis.</p>,
	},
	{
		id: 'diagnostics',
		title: 'DIAGNOSTICS',
		content_id: 'diagnostics-content',
		content: <p>Content. Diagnostics.</p>,
	},
];

const radioData = [
	{
		id: 'default',
		title: 'DEFAULT',
		content_id: 'default-content',
		content: <p>Content. Default.</p>,
	},
	{
		id: 'flat',
		title: 'FLAT',
		content_id: 'flat-content',
		content: <p>Content. Flat.</p>,
	},
	{
		id: 'bold',
		title: 'BOLD',
		content_id: 'bold-content',
		content: <p>Content. Bold.</p>,
	},
	{
		id: 'material',
		title: 'MATERIAL',
		content_id: 'material-content',
		content: <p>Content. Material.</p>,
	},
];

const flushedData = [
	{
		id: 'forms',
		title: 'FORMS',
		content_id: 'forms-content',
		content: <p>Content. Forms.</p>,
	},
	{
		id: 'polls',
		title: 'POLLS',
		content_id: 'polls-content',
		content: <p>Content. Polls.</p>,
	},
	{
		id: 'quizzes',
		title: 'QUIZZES',
		content_id: 'quizzes-content',
		content: <p>Content. Quizzes.</p>,
	},
];

const overflowData = [
	{
		id: 'general',
		title: 'General Settings',
		content_id: 'general-content',
		content: <p>Content. General Tab.</p>,
	},
	{
		id: 'accessibility',
		title: 'Accessibility',
		content_id: 'accessibility-content',
		content: <p>Content. Accessibility.</p>,
	},
	{
		id: 'appearance',
		title: 'Appearance',
		content_id: 'appearance-content',
		content: <p>Content. Appearance.</p>,
	},
	{
		id: 'presets',
		title: 'Presets',
		content_id: 'presets-content',
		content: <p>Content. Presets.</p>,
	},
	{
		id: 'data',
		title: 'Data',
		content_id: 'data-content',
		content: <p>Content. Data.</p>,
	},
	{
		id: 'captcha',
		title: 'CAPTCHA',
		content_id: 'captcha-content',
		content: <p>Content. CAPTCHA.</p>,
	},
	{
		id: 'import',
		title: 'Import',
		content_id: 'import-content',
		content: <p>Content. Import.</p>,
	},
	{
		id: 'submissions',
		title: 'Submissions',
		content_id: 'submissions-content',
		content: <p>Content. Submissions.</p>,
	},
];

export const Simple = () => {
	return (
		<StorySection
			title="Simple Tabs"
			description="The standard state for any tabs where they are already in a padded container."
			code="&lt;Tabs tabs={tabsData} /&gt;"
			isDefault={ true }
			isLast={ true }>
			<Tabs tabs={tabsData} />
		</StorySection>
	);
};

export const Radio = () => {
	return (
		<StorySection
			title="Radio Button Tabs"
			description="These are simple tabs with radio inputs."
			code="&lt;Tabs tabs={tabsData} radio={true} /&gt;"
			isDefault={ true }
			isLast={ true }>
			<Tabs tabs={radioData} radio={true} />
		</StorySection>
	);
};

export const Flushed = () => {
	return (
		<StorySection
			title="Flushed Tabs"
			description="For using inside modals or boxes where they are in a padded container but need to be flush to the top and sides."
			code="&lt;Tabs tabs={tabsData} type=&quot;flushed&quot; /&gt;"
			isDefault={ true }
			isLast={ true }>
				<Accordion>
					<AccordionItem title="Item #1">
						<div className="sui-box">
							<div className="sui-box-body">
								<Tabs tabs={flushedData} type="flushed" />
							</div>
						</div>
					</AccordionItem>
					<AccordionItem title="Item #2">
						<div className="sui-box">
							<div className="sui-box-body">
								<Tabs tabs={flushedData} type="flushed" />
							</div>
						</div>
					</AccordionItem>
				</Accordion>
		</StorySection>
	);
};

export const Overflow = () => {
	return (
		<StorySection
			title="Overflow Tabs"
			description="When there is not enough space to have all the tabs we show an arrow and allow horizontal scrolling and a navigation."
			code="&lt;Tabs tabs={tabsData} type=&quot;overflow&quot; /&gt;"
			isDefault={ true }
			isLast={ true }>
				
			<Tabs tabs={overflowData} type="overflow" />
		</StorySection>
	);
};