import React, { Component } from 'react';
import styled from 'styled-components';

import { ButtonIcon } from '@wpmudev/react-button-icon';

const screen = {
	mobile: 480,
	tablet: 783,
	laptop: 1200,
	desktop: 1500
};

export class Accordion extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className="sui-accordion">
                { this.props.children }
            </div>
        );
    }
}

const ItemImage = styled.span`
width: 30px;
height: 30px;
margin-right: 10px;
border-radius: 10px;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;

export class AccordionItem extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            open: false,
        };

        this.toggle = this.toggle.bind( this );
    }

    toggle = e => {
        if ( 'sui-dropdown' !== e.target.className ) {
            this.setState({
                open: !this.state.open
            })
        }
    }

    render() {
        const { open } = this.state;

        const clazz = !open
            ? 'sui-accordion-item'
            : 'sui-accordion-item sui-accordion-item--open';

        const icon = this.props.icon && '' !== this.props.icon
            ? <span className={ `sui-icon-${ this.props.icon }` } aria-hidden="true" />
            : '';
    
        const image = this.props.image && '' !== this.props.image
            ? <ItemImage style={ { backgroundImage: `url(${ this.props.image })` } } />
            : '';

        const title = (
            <div className="sui-accordion-item-title">
                { icon }{ image }{ this.props.name }
            </div>
        );

        const actions = (
            <div className="sui-accordion-col-auto">

                <ButtonIcon
                    icon="chevron-down"
                    label="Open item"
                    className="sui-button-icon sui-accordion-open-indicator"
                />

            </div>
        );

        return (
            <div className={ clazz }>
                
                <div
                    className="sui-accordion-item-header"
                    onClick={ e => this.toggle(e) }
                >
                    { title }
                    { actions }
                </div>

                <div className="sui-accordion-item-body">
                    { this.props.children }
                </div>

            </div>
        );
    }
}