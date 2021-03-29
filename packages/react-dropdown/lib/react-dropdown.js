import React, { Component, Children, Fragment } from 'react';
import { ButtonIcon } from '@wpmudev/react-button-icon';

export class Dropdown extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            open: false
        }

        this.toggle = this.toggle.bind( this );

        this.setWrapperRef = this.setWrapperRef.bind( this );
        this.handleClickOutside = this.handleClickOutside.bind( this );
    }

    toggle() {
		this.setState({
			open: !this.state.open
		});
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
                return <li><a href={ option.props.href } {...option.props}>{ label }</a></li>;
            }

            return <li><button {...option.props}>{ label }</button></li>;
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
            <div className={ clazz }>
                <ButtonIcon
                    ref={ this.setWrapperRef }
                    icon="widget-settings-config"
                    label={ open ? 'Open menu' : 'Close menu' }
                    onClick={ () => this.toggle() }
                />
                { open && <ul>{ options }</ul> }
            </div>
        );
    }
}