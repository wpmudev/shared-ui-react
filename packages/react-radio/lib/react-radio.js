import React, { Component, Children, Fragment } from 'react';

export class Radio extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const Options = Children.map( this.props.children, option => {
            const hasImage1x = option.props.image && '' !== option.props.image;
            const hasImage2x = option.props.image2x && '' !== option.props.image2x;

            let image1x = '';
            let image2x = '';
            let imageHtml = '';

            if ( hasImage1x ) {
                image1x = option.props.image;
            }

            if ( hasImage2x ) {
                image2x = option.props.image2x;
                imageHtml = (
                    <img
                        src={ image1x }
                        srcSet={ `${ image1x } 1x, ${ image2x } 2x` }
                        alt=""
                        aria-hidden="true"
                    />
                );
            } else {
                imageHtml = <img src={ image1x } alt="" aria-hidden="true" />;
            }

            const input = (
                <Fragment>
                    <input
                        type="radio"
                        name={ this.props.property }
                        value={ option.props.value }
                        id={ `${ option.props.value }--option` }
                        aria-labelledby={ `${ option.props.value }--option-label` }
                    />
                    <span aria-hidden="true" />
                    { option.props.label &&
                        <span id={ `${ option.props.value }--option-label` }>{ option.props.label }</span>
                    }
                </Fragment>
            );

            // Option with image.
            if ( hasImage1x ) {
                return (
                    <label
                        htmlFor={ `${ option.props.value }-option` }
                        className="sui-radio-image"
                    >
                        { hasImage1x && imageHtml }
                        <span className="sui-radio">
                            { input }
                        </span>
                    </label>
                );
            }
            
            // Option with text.
            return (
                <label
                    htmlFor={ `${ option.props.value }-option` }
                    className="sui-radio"
                >
                    { input }
                </label>
            );
        });

        return (
            <div role="radiogroup" className="sui-form-field">{ Options }</div>
        );
    }
}
