import React, { Component, Children, Fragment } from 'react';
import { ButtonIcon } from '@wpmudev/react-button-icon';
import styled from 'styled-components';

const Link = styled.a`
.sui-wrap && {
    ${props => ('blue' === props.color ? 'color: #17A8E3 !important;' : '')}
    ${props => ('green' === props.color ? 'color: #1ABC9C !important;' : '')}
    ${props => ('yellow' === props.color ? 'color: #FECF2F !important;' : '')}
    ${props => ('red' === props.color ? 'color: #FF6D6D !important;' : '')}
    ${props => ('purple' === props.color ? 'color: #8D00B1 !important;' : '')}

    [class*="sui-icon-"]:before {
        color: inherit !important;
    }

    &:hover,
    &:focus {
        ${props => ('blue' === props.color ? 'background-color: #E1F6FF !important;' : '')}
        ${props => ('green' === props.color ? 'background-color: #D1F1EA !important;' : '')}
        ${props => ('yellow' === props.color ? 'background-color: #FFF5D5 !important;' : '')}
        ${props => ('red' === props.color ? 'background-color: #FFE5E9 !important;' : '')}
        ${props => ('purple' === props.color ? 'background-color: #F9E1FF !important;' : '')}
    }
}
`;

const Button = styled.button`
.sui-wrap && {
    ${props => ('blue' === props.color ? 'color: #17A8E3 !important;' : '')}
    ${props => ('green' === props.color ? 'color: #1ABC9C !important;' : '')}
    ${props => ('yellow' === props.color ? 'color: #FECF2F !important;' : '')}
    ${props => ('red' === props.color ? 'color: #FF6D6D !important;' : '')}
    ${props => ('purple' === props.color ? 'color: #8D00B1 !important;' : '')}

    [class*="sui-icon-"]:before {
        color: inherit !important;
    }

    &:hover,
    &:focus {
        ${props => ('blue' === props.color ? 'background-color: #E1F6FF !important;' : '')}
        ${props => ('green' === props.color ? 'background-color: #D1F1EA !important;' : '')}
        ${props => ('yellow' === props.color ? 'background-color: #FFF5D5 !important;' : '')}
        ${props => ('red' === props.color ? 'background-color: #FFE5E9 !important;' : '')}
        ${props => ('purple' === props.color ? 'background-color: #F9E1FF !important;' : '')}
    }

    &[disabled] {
        opacity: 0.5;
        pointer-events: none;
    }
}
`;

export class Dropdown extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            open: false
        }

        this.toggle = this.toggle.bind( this );

		this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef.bind( this );
        this.handleClickOutside = this.handleClickOutside.bind( this );
    }

    toggle() {
		this.setState((state) => ({
			open: !state.open
		}));
	}

    setWrapperRef( node ) {
        this.wrapperRef = node;
    }

    handleClickOutside( e ) {
        if ( this.wrapperRef && !this.wrapperRef.contains( e.target ) ) {
            this.setState({ open: false });
        }
    }

    componentDidMount() {
        document.addEventListener( 'mousedown', this.handleClickOutside );
    }

    componentWillUnmount() {
        document.removeEventListener( 'mousedown', this.handleClickOutside );
    }

    render() {
        const { open } = this.state;

        const options = Children.map( this.props.children, option => {

            const icon = option.props.icon && '' !== option.props.icon && (
                <span className={ `sui-icon-${ option.props.icon }` } aria-hidden="true" />
            );

            const tag = option.props.tag && '' !== option.props.tag && (
                <span
                    className="sui-tag sui-tag-beta"
                    style={ {
                        pointerEvents: 'none',
                        display: 'inline',
                        marginLeft: 5,
                        lineHeight: 1,
                    } }
                >{ option.props.tag }</span>
            );

            const label = <Fragment>{ icon }{ option.props.name }{ tag }</Fragment>;

            if ( option.props.href ) {
                return <li>
                    <Link
                        href={ option.props.href }
                        { ...option.props }>
                        { label }
                    </Link>
                </li>;
            }

            return <li>
                <Button { ...option.props }>
                    { label }
                </Button>
            </li>;
        });

        let clazz = !open
            ? 'sui-dropdown'
            : 'sui-dropdown open';

        switch ( this.props.position ) {
            case 'left':
                clazz += ' sui-dropdown-right';
                break;

            case 'center':
                clazz += ' sui-dropdown-center';
                break;

            case 'right':
                clazz += ' sui-dropdown-left';
                break;

            default:
                clazz += ' sui-dropdown-right';
                break;
        }

        return (
            <div className={ clazz } ref={ this.setWrapperRef } onClick={ ( e ) => e.stopPropagation() }>
                <ButtonIcon
                    icon="widget-settings-config"
                    label={ open ? 'Open menu' : 'Close menu' }
                    onClick={ this.toggle }
                    {...this.props}
                />
                { open && <ul onClick={ () => this.setState({ open: false }) }>{ options }</ul> }
            </div>
        );
    }
}