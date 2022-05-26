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

const AccordionItem = ({
	title,
	titleSize,
	icon,
	image,
	children,
	...props
}) => {
	const [ isOpen, setIsOpen ] = useToggle();

	return (
		<div
			className={ `sui-accordion-item${ isOpen ? ' sui-accordion-item--open' : '' }` }
			{ ...props }
		>
			<AccordionItemHeader
				state={ isOpen ? 'true' : 'false' }
				title={ title }
				titleSize={ titleSize }
				icon={ icon }
				image={ image }
				onClick={ setIsOpen }
			/>
			<AccordionItemBody>
				{ children }
			</AccordionItemBody>
		</div>
	);
};

const AccordionItemHeader = ({
	title,
	titleSize,
	icon,
	image,
	children,
	...props
}) => {
	const [ isOpen ] = useState( false );
	const countChildren = React.Children.toArray( children ).length;

	const titleColumnIcon = 'undefined' !== typeof icon && '' !== icon
		? <span className={ `sui-icon-${ icon }` } aria-hidden="true" />
		: '';

	const titleColumnImage = 'undefined' !== typeof image && '' !== image
		? <ItemImage style={ { backgroundImage: `url(${ image })` } } />
		: '';

	const titleColumnSize = 'undefined' !== typeof titleSize && '' !== titleSize
		? ' sui-accordion-col-' + titleSize
		: '';

	const titleColumn = (
		<div className={ `sui-accordion-item-title${ titleColumnSize }` }>
			{ titleColumnIcon }{ titleColumnImage }{ title }
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
			{ titleColumn }
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