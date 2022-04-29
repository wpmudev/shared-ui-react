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

const paginationContent = ({ ...properties }) => {
	const styles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	};

	return (
		<Box>
			<BoxHeader title="Lorem Justo" />
			<BoxBody>
				<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
				<div style={ styles }>
					<Button label="Bulk Delete" icon="trash" disabled />
					{ PaginationNav({ ...properties }) }
				</div>
				{ PaginationResults({ ...properties }) }
				{ PaginationNav({ ...properties }) }
			</BoxBody>
			<BoxFooter
				paddingTop="0"
				border="0"
				alignment="center"
			>
				<p className="sui-description">Donec id elit non mi porta gravida at eget metus? <a href="#">Check again</a></p>
			</BoxFooter>
		</Box>
	);
};

export default {
	title: "Components/Pagination/Variations",
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

export const simple = () => {
	return (
		<Template>
			<Section
				title="Simple"
				code="&lt;Pagination limit={2} results={true} skip={true}&gt;&lt;Accordion&gt;{accordionItems}&lt;/Accordion&gt;&lt;/Pagination&gt;"
				isDefault={ true }
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
simple.storyName = 'Simple';

export const compound = () => {
	return (
		<Template>
			<Section
				title="Compound"
				code="&lt;Pagination limit={2} results={true} skip={true} paginationContent={paginationContent}&gt;&lt;Accordion&gt;{accordionItems}&lt;/Accordion&gt;&lt;/Pagination&gt;"
				isLast={ true }>
				<Pagination limit={2} results={true} skip={true} paginationContent={paginationContent}>
					<Accordion>
						{accordionItems}
					</Accordion>
				</Pagination>
			</Section>
		</Template>
	);
};
compound.storyName = 'Compound';
