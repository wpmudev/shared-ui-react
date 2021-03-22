import React, { Component, Children } from 'react';

export class Radio extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const Options = Children.map( this.props.children, option => {
            return (
                <label htmlFor={ `${ option.props.value }-option` } className="sui-radio">
                    <input
                        type="radio"
                        value={ option.props.value }
                        id={ `${ option.props.value }-option` }
                    />
                    <span aria-hidden="true" />
                    { option.props.label &&
                        <span>{ option.props.label }</span>
                    }
                </label>
            );
        });

        return (
            <div role="radiogroup" className="sui-form-field">{ Options }</div>
        );
    }
}
