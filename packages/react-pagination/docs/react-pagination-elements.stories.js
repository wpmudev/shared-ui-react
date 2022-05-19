import React from 'react';
import { Pagination, PaginationResults, PaginationNav } from '../lib/react-pagination';

export default {
	title: 'Components/Pagination/Elements',
	component: Pagination,
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

const StoryTitle = ({ children }) => {
	const customStyles = {
		margin: 0,
		marginBottom: 10 + 'px',
		color: '#333',
		fontSize: 14 + 'px',
		lineHeight: 22 + 'px',
	};

	return <h2 style={customStyles}>{children}</h2>;
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

// Array numbers from 1 to n.
const createList = (topNumber) => {
	const listNumbers = [];
	topNumber = topNumber + 1;

	for (let i = 1; i < topNumber; i++) {
		listNumbers.push(i);
	}

	return listNumbers;
};

// List numbers from 1 to 20.
const sampleList = createList(20);

// Navigation only template.
const onlyNavigation = ({ ...props }) => {
	return PaginationNav({ ...props });
};

// Results only template.
const onlyResults = ({ ...props }) => {
	return PaginationResults({ ...props });
};

export const Navigation = () => {
	return (
		<>
			<StorySection
				title="Basic Navigation"
				description="By default, the component displays a simple navigation with the pages, next and previous buttons."
				isDefault={true}
				isLast={true}
			>
				<div className="sui-border-frame">
					<Pagination limit={5} paginationContent={onlyNavigation}>
						<ul>
							{sampleList.map((item, key) => (
								<li key={key}>List item #{item}</li>
							))}
						</ul>
					</Pagination>
				</div>
			</StorySection>

			<StorySection
				title="Skip Buttons"
				description="Commonly used when there are more than 10 pages. These buttons appear in addition to the basic navigation."
				isLast={true}
			>
				<div className="sui-border-frame">
					<Pagination limit={5} skip={true} paginationContent={onlyNavigation}>
						<ul>
							{sampleList.map((item, key) => (
								<li key={key}>List item #{item}</li>
							))}
						</ul>
					</Pagination>
				</div>
			</StorySection>

			<StorySection
				title="Results"
				description="Used to display the total number of items. It shows before the navigation buttons."
				isLast={true}
			>
				<div className="sui-border-frame">
					<Pagination limit={5} results={true} paginationContent={onlyNavigation}>
						<ul>
							{sampleList.map((item, key) => (
								<li key={key}>List item #{item}</li>
							))}
						</ul>
					</Pagination>
				</div>
			</StorySection>
		</>
	);
};

export const ResultsList = () => {
	return (
		<StorySection
			title="Results List"
			description="It displays the list of items per page. In this sample, it will only show 5 items (even when we have 20 items in total) since the navigation bar is hidden."
			isDefault={true}
			isLast={true}
		>
			<div className="sui-border-frame">
				<Pagination limit={5} results={true} paginationContent={onlyResults}>
					<ul style={{ margin: 0 }}>
						{sampleList.map((item, key) => (
							<li key={key}>List item #{item}</li>
						))}
					</ul>
				</Pagination>
			</div>
		</StorySection>
	);
};
