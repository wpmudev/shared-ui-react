import React from 'react';
import { Accordion, AccordionItem } from '../lib/react-accordion';

import LogoImage from './assets/images/logo.png';

export default {
	title: 'Containers/Accordion/Item Elements',
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
	decorators: [
		(Story) => (
			<div className="sui-box">
				<div className="sui-box-body">
					<Story />
				</div>
			</div>
		),
	],
};

const Template = ({ children, ...props }) => {
	return (
		<Accordion>
			<AccordionItem {...props}>{children}</AccordionItem>
		</Accordion>
	);
};

const StoryTitle = ({ children }) => {
	const customStyles = {
		margin: 0,
		marginBottom: 10 + 'px',
		color: '#333',
		fontSize: 14 + 'px',
		lineHeight: 22 + 'px',
	};

	return <h3 style={customStyles}>{children}</h3>;
};

const StoryDescription = ({ children }) => {
	const customStyles = {
		margin: 0,
		marginBottom: 10 + 'px',
	};

	return (
		<p className="sui-description" style={customStyles}>
			{children}
		</p>
	);
};

const StoryCode = ({ spaceTop = 5, spaceBottom = 20, children }) => {
	const customStyles = {
		display: 'block',
		margin: 0,
		marginTop: spaceTop + 'px',
		marginBottom: spaceBottom + 'px',
		padding: 5 + 'px ' + 10 + 'px',
	};

	return <code style={customStyles}>{children}</code>;
};

const StorySection = ({
	title,
	description,
	code,
	code2,
	isDefault = false,
	isLast = false,
	children,
}) => {
	return (
		<>
			{title && '' !== title && (
				<StoryTitle>
					{title}
					{isDefault && (
						<span
							className="sui-tag sui-tag-sm sui-tag-yellow"
							style={{ marginLeft: 10 + 'px' }}
							aria-hidden="true"
						>
							Default
						</span>
					)}
				</StoryTitle>
			)}
			{description && '' !== description && <StoryDescription>{description}</StoryDescription>}
			{code && '' !== code && (
				<StoryCode {...(code2 && '' !== code2 && { spaceBottom: 5 })}>{code}</StoryCode>
			)}
			{code2 && '' !== code2 && <StoryCode>{code2}</StoryCode>}
			{children}
			{!isLast && <hr />}
		</>
	);
};

export const Checkbox = (args) => {
	return (
		<StorySection
			title="Item Checkbox"
			description='Display an checkbox at the beginning of the item header. It displays before the title and the image.'
			code="&lt;AccordionItem checkboxInput=&quot;true&quot; checkboxId=&quot;checkbox-id&quot; /&gt;"
			isLast={ true }>
			<Template { ...args } />
		</StorySection>
	);
};
Checkbox.args = {
	checkboxInput: true,
	checkboxId:	'checkbox-id'
};

export const Icon = (args) => {
	return (
		<StorySection
			title="Item Icon"
			description="Display an icon at the beginning of the item header. It displays before the title and the image."
			code='&lt;AccordionItem icon="icon-name" /&gt;'
			isLast={true}
		>
			<Template {...args} />
		</StorySection>
	);
};
Icon.args = {
	icon: 'wpmudev-logo',
};

export const Title = (args) => {
	return (
		<StorySection
			title="Item Title"
			description="The title is an important property to display in the item header. It briefly indicates to the user what they will find when opening the accordion."
			code='&lt;AccordionItem title="Accordion Item" /&gt;'
			isLast={true}
		>
			<Template {...args} />
		</StorySection>
	);
};
Title.args = {
	title: 'Accordion Item',
};

export const Image = (args) => {
	return (
		<StorySection
			title="Item Image"
			description="In addition to the icon and the title, you can also display a small image. It appears after the icon and before the title."
			code='&lt;AccordionItem image="sample.png" /&gt;'
			isLast={true}
		>
			<Template {...args} />
		</StorySection>
	);
};
Image.args = {
	image: LogoImage,
};

export const Content = (args) => {
	return (
		<StorySection
			title="Item Content"
			description="The content displays when the accordion is open."
			code="&lt;AccordionItem&gt;
				...
			&lt;/AccordionItem&gt;"
			isLast={true}
		>
			<Template {...args} />
		</StorySection>
	);
};
Content.args = {
	children: (
		<div className="sui-box">
			<div className="sui-box-body">
				<p>The quick brown fox jumps over the lazy dog.</p>
			</div>
		</div>
	),
};
