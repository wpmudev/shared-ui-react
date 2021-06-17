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
			/>
			<AccordionItemBody>
				{ children }
			</AccordionItemBody>
		</div>
	);
};

const AccordionItemHeader = ({ children, ...props }) => {
	const [ isOpen ] = useState( false );

	// useEffect( () => {
	// 	setState({
	// 		isOpen: props.state
	// 	});
	// });

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

	const actions = (
		<div className="sui-accordion-col-auto">
			{ props.children }
			{ indicator }
		</div>
	);

	return (
		<div
			className="sui-accordion-item-header"
			{ ...props }
		>
			{ title }
			{ actions }
		</div>
	);
};

// class AccordionItemHeader extends Component {
//     constructor( props ) {
//         super( props );

//         this.state = {
//             open: false,
//         };
//     }

//     componentDidMount() {
//         this.setState({
//             open: this.props.state
//         });
//     }

//     render() {
//         const { open } = this.state;

//         const icon = this.props.icon && '' !== this.props.icon
//             ? <span className={ `sui-icon-${ this.props.icon }` } aria-hidden="true" />
//             : '';

//         const image = this.props.image && '' !== this.props.image
//             ? <ItemImage style={ { backgroundImage: `url(${ this.props.image })` } } />
//             : '';

//         const title = (
//             <div className="sui-accordion-item-title">
//                 { icon }{ image }{ this.props.title }
//             </div>
//         );

//         const indicator = (
//             <ButtonIcon
//                 icon="chevron-down"
//                 label={ open ? 'Close section' : 'Open section' }
//                 className="sui-button-icon sui-accordion-open-indicator"
//             />
//         );

//         const actions = (
//             <div className="sui-accordion-col-auto">
//                 { this.props.children }
//                 { indicator }
//             </div>
//         );

//         return (
//             <div
//                 className="sui-accordion-item-header"
//                 { ...this.props }
//             >
//                 { title }
//                 { actions }
//             </div>
//         );
//     }
// }

class AccordionItemBody extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className="sui-accordion-item-body">
                { this.props.children }
            </div>
        );
    }
}

export {
    Accordion,
    AccordionItem,
    AccordionItemHeader,
    AccordionItemBody
}