import React from "react";
import { Pagination, PaginationResults, PaginationNav } from "../lib/react-pagination";
import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Accordion, AccordionItem } from '@wpmudev/react-accordion';
import { Button } from '@wpmudev/react-button';

let accordionItems = new Array();
for (let i = 1; i <= 15; ++i)
	accordionItems.push(
		<AccordionItem key={i} title={ `Child Item #${i}` }>
			<Box>
				<BoxBody>
					<h4>Child Item #{i}</h4>
					<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</BoxBody>
			</Box>
		</AccordionItem>
	);

export default {
	title: "Components/Pagination/Elements",
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

export const elements = () => {
	return (
		<Template>
			<Section
				title="List of Pages"
                description="Show a list of available pages with arrows for easier navigation."
				code="&lt;Pagination limit={2} skip={true} /&gt;">
				<Pagination limit={2} skip={true}>
					<Accordion>
						{accordionItems}
					</Accordion>
				</Pagination>
			</Section>

            <Section
				title="List of Pages with Results"
                description="Even when elements above can work isolated depending on what designer decides for the project you can also use them together."
				code="&lt;Pagination limit={2} results={true} skip={true} /&gt;"
				isLast={ true }>
				<Pagination limit={2} results={true} skip={true}>
					<Accordion>
						{accordionItems}
					</Accordion>
				</Pagination>
			</Section>
		</Template>
	);
};
elements.storyName = 'Elements';
