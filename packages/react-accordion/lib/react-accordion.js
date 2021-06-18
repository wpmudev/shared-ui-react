import React, { Component, useState, useEffect, setState, useCallback } from 'react';
import styled from 'styled-components';

import { ButtonIcon } from '@wpmudev/react-button-icon';

const ItemImage = styled.span`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const useToggle = ( initialValue = false ) => {
	const [ value, setValue ] = useState( initialValue );

	const toggle = useCallback( () => {
		setValue( v => !v );
	}, []);

	return [ value, toggle ];
};

const Accordion = ({ children, ...props }) => {
	return (
		<div className="sui-accordion" { ...props }>
			{ children }
		</div>
	);
};

const AccordionItem = ({ children, ...props }) => {
	const [ isOpen, setIsOpen ] = useToggle();

	return (
		<div
			className={ `sui-accordion-item${ isOpen ? ' sui-accordion-item--open' : '' }` }
			{ ...props }
		>
			<AccordionItemHeader
				state={ isOpen ? 'true' : 'false' }
				title={ props.title }
				image={ props.image }
				icon={ props.icon }
				onClick={ setIsOpen }
			>
				{/** JUST FOR TEST – TO REMOVE LATER */}
				<div size="3">John Doe</div>
				<div size="5">
					<a href="#">johndoe@email.com</a>
				</div>
			</AccordionItemHeader>
			<AccordionItemBody>
				{ children }
			</AccordionItemBody>
		</div>
	);
};

const AccordionItemHeader = ({ children, ...props }) => {
	const [ isOpen ] = useState( false );
	const countChildren = React.Children.toArray( children ).length;

	const icon = props.icon && '' !== props.icon
		? <span className={ `sui-icon-${ props.icon }` } aria-hidden="true" />
		: '';

	const image = props.image && '' !== props.icon
		? <ItemImage style={ { backgroundImage: `url(${ props.image })` } } />
		: '';

	const title = (
		<div className="sui-accordion-item-title">
			{ icon }{ image }{ props.title }
		</div>
	);

	const indicator = (
		<ButtonIcon
			icon="chevron-down"
			label={ isOpen ? 'Close section' : 'Open section' }
			className="sui-button-icon sui-accordion-open-indicator"
		/>
	);

	const columns = React.Children.map( children, ( column, index ) => {
		index++;
		const columnSize = column.props.size;
		const columnClass = 'undefined' !== typeof columnSize && '' !== columnSize
			? 'sui-accordion-col-' + columnSize
			: 'sui-accordion-col-auto';
		const columnContent = column.props.children;

		return (
			<div className={ columnClass }>
				{ columnContent }
				{ countChildren === index && indicator }
			</div>
		);
	});

	const actions = (
		<div className="sui-accordion-col-auto">
			{ indicator }
		</div>
	);

	return (
		<div
			className="sui-accordion-item-header"
			{ ...props }
		>
			{ title }
			{ countChildren > 0 ? columns : actions }
		</div>
	);
};

const AccordionItemBody = ({ children, ...props }) => {
	return (
		<div
			className="sui-accordion-item-body"
			{ ...props }
		>
			{ children }
		</div>
	);
};

export {
    Accordion,
    AccordionItem,
    AccordionItemHeader,
    AccordionItemBody
}