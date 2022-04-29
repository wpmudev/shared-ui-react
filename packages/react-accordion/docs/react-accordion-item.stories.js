import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeader, AccordionItemBody } from '../lib/react-accordion';

export default {
	title: 'Containers/Accordion/Elements',
	component: AccordionItem,
	subcomponents: {
		AccordionItemHeader,
		AccordionItemBody,
	},
};

export const ItemGroup = args => {
	return (
		<div className="sui-box">
			<Accordion>
				<AccordionItem { ...args }>
					<div className="sui-box">
						<div className="sui-box-body">
							<p>Hello world!</p>
						</div>
					</div>
				</AccordionItem>
			</Accordion>
		</div>
	);
};
ItemGroup.storyName = 'Item Group';
ItemGroup.args = {
	title: 'Accordion Title',
	icon: 'wpmudev-logo',
};

export const ItemHeader = args => {
	return (
		<AccordionItemHeader { ...args } />
	);
};
ItemHeader.storyName = 'Item Header';
ItemHeader.args = {
	...ItemGroup.args,
};

export const ItemBody = ({ children }) => {
	return (
		<AccordionItemBody>
			{ children }
		</AccordionItemBody>
	);
};
ItemBody.args = {
	children:
		<div className="sui-box">
			<div className="sui-box-body">
				<p>Hello world!</p>
			</div>
		</div>,
};