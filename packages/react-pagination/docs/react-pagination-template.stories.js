import React from "react";
import { Pagination, PaginationResults, PaginationNav } from "../lib/react-pagination";
import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Accordion, AccordionItem } from '@wpmudev/react-accordion';
import { Button } from '@wpmudev/react-button';

export default {
	title: "Components/Pagination/Template",
	component: Pagination,
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

// List sample items.
let accordionItems = new Array();

for (let i = 1; i <= 50; ++i)
	accordionItems.push(
		<AccordionItem key={ i } title={ `Form Entry #${ i }` }>
			<div className="sui-box">
				<div className="sui-box-header">
					<h3 className="sui-box-title">Form Entry #{ i }</h3>
				</div>

				<div className="sui-box-body">
					<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>
		</AccordionItem>
	);

// Modified template.
const newTemplate = ({ ...props }) => {
	return (
		<div className="sui-border-frame">
			<h3 className="sui-box-title">Pellentesque Euismod</h3>

			<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui.</p>

			<hr />

			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<select className="sui-select-sm" style={{ minWidth: 1, flex: 1, marginBottom: 0, marginRight: 10 }}>
						<option value="" selected disabled>Bulk Actions</option>
						<option value="delete">Delete All</option>
					</select>

					<Button label="Bulk Delete" icon="trash" style={{ flex: '0 0 auto' }} disabled />
				</div>

				{ PaginationNav({ ...props }) }
			</div>

			{ PaginationResults({ ...props }) }

			<hr />

			{ PaginationNav({ ...props }) }
		</div>
	);
};

export const Basic = () => {
	return (
		<StorySection
			title="Basic Template"
			description="By default, the pagination appears on top of the items but you can modify this to place it at the bottom. There's no room for advanced modifications."
			code="&lt;Pagination limit={ 5 }&gt; ... &lt;/Pagination&gt;"
			isDefault={ true }
			isLast={ true }>
			<Pagination limit={ 5 }>
				<Accordion>
					{ accordionItems }
				</Accordion>
			</Pagination>
		</StorySection>
	);
};

export const Advanced = () => {
	return (
		<StorySection
				title="Advanced Template"
				description={
					[
						"This method allows you to modify the default template of the component. It becomes useful when you need to display the pagination outside the main area or have a complex design to replicate. You just need to call your new template inside the ",
						<code style={{ fontSize: 11 }}>paginationContent</code>,
						" property.",
						<br />,
						<br />,
						"There are 2 elements to include in your custom template:",
						<ul style={{ marginTop: 0 }}>
							<li style={{ marginBottom: 5 }}><code style={{ fontSize: 11 }}>&#123; PaginationNav(&#123; ...props &#125;) &#125;</code>, to show the navigation.</li>
							<li><code style={{ fontSize: 11 }}>&#123; PaginationResults(&#123; ...props &#125;) &#125;</code>, to show the list of items to paginate.</li>
						</ul>
					]
				}
				code="const newTemplate = ({ ...props }) => { ... }"
				code2="&lt;Pagination limit={ 5 } paginationContent={ newTemplate }&gt; ... &lt;/Pagination&gt;"
				isLast={ true }>
				<Pagination limit={ 5 } paginationContent={ newTemplate }>
					<Accordion>
						{ accordionItems }
					</Accordion>
				</Pagination>
		</StorySection>
	);
};
