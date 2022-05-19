import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@wpmudev/react-input';
import { ButtonIcon } from '@wpmudev/react-button-icon';

export const MultiString = ({
    uniqueId,
    label,
    placeholder,
    description,
    values = [],
    disallowedChars = ''
}) => {
    const inputRef = useRef(null);
    const [items, setItems] = useState(values);
    const labelId = `${uniqueId}-label`;
    const descriptionId = `${uniqueId}-description`;
    const inputId = `${uniqueId}-input`;

    useEffect(() => {
        handleSetValues(values);
    }, []);

    // convert disallowed  
    const getDisallowedChars = ( disallowedChars ) => {
        const disallowedCharsArray = [];
        let customDisallowedKeys = disallowedChars;
        if ( customDisallowedKeys ) {
            if ( 'number' === typeof customDisallowedKeys ) {
                customDisallowedKeys = customDisallowedKeys.toString();
            }
            const customKeysArray = customDisallowedKeys.split( ',' );
            for ( let key of customKeysArray ) {
                const intKey = parseInt( key, 10 );
                if ( ! isNaN( intKey ) ) {
                    disallowedCharsArray.push( String.fromCharCode( intKey ) );
                } else {
                    disallowedCharsArray.push( key );
                }
            }
        }
        return disallowedCharsArray;
    }

    const disallowedCharsArray = disallowedChars ? getDisallowedChars(disallowedChars) : '';

    // regex pattern for removing escaped characters.
    const getRegexPatternForDisallowedChars = (disallowedCharsArray) => {
        const escapeRegExp = string => string.replace( /[.*+?^${}()|[\]\\]/g, '\\$&' ),
            disallowedPattern = disallowedCharsArray.length ? escapeRegExp( disallowedCharsArray.join( ',' ) ) : '';
        return disallowedPattern;
    }

    // build items for multistring list items.
    const buildItems = (inputId, placeholder, items, disallowedCharsArray) => {
        return (
            <ul className="sui-multistrings-list" onClick={() => inputRef.current.focus()} tabIndex="-1">
                {items && items.map((item, index) => {
                    return (
                        <li key={index} title={item}>
                            <i className="sui-icon-page sui-sm" aria-hidden="true"></i>
                            {item}
                            <ButtonIcon label="Delete" icon="close" color="white" style={{ boxShadow: "none" }} onClick={ () => handleDelete(index) }/>
                        </li>
                    );
                })}
                <li className="sui-multistrings-input">
                    <Input id={inputId} autoComplete="off" placeholder={placeholder} aria-autocomplete="none" ref={inputRef} style={{ height: 'auto' }} onKeyDown={ (e) => handleKeyPress(e, disallowedCharsArray) } />
                </li>
            </ul>
        );
    }

    // delete items on click of close.
    const handleDelete = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    // add items on enter key press.
    const handleKeyPress = (e, disallowedCharsArray) => {   
        const disallowedString = getRegexPatternForDisallowedChars( disallowedCharsArray ),
                regex = new RegExp( `[\r\n${disallowedString}]`, 'gm' );
        
        if (e.keyCode === 13 && e.target.value !== '') {
            const newItems = [...items];
            const newTrim = e.target.value.replace( regex, '' );
            if (0 !== newTrim.length && 0 !== newTrim.trim().length) {
                newItems.push(newTrim);
                handleSetValues(newItems);
            }
            e.target.value = '';
        } else {
            const newValues = [];
            let values = [...e.target.value];
            for ( let value of values ) {
                let item = value.replace( regex, '' );
                item ? newValues.push( item ) : '';
            }
            e.target.value = newValues?.join('');
        }
        return;
    }

    // set values after removing out characters in disallowed patterns
    const handleSetValues = (values) => {
        const newValues = [],
            disallowedString = getRegexPatternForDisallowedChars( disallowedCharsArray ),
            regex = new RegExp( `[\r\n${disallowedString}]`, 'gm' );

        for ( let value of values ) {
            let item = value.replace( regex, '' );
            item ? newValues.push( item ) : '';
        }
        setItems(newValues);
    }

    return (
        <div className="sui-multistrings-wrap">
            <div className="sui-multistrings-aria">
                {label && ( <label id={labelId} htmlFor={inputId}>{label}</label> )}
                <textarea 
                    placeholder={placeholder} 
                    id={inputId} 
                    className="sui-multistrings" 
                    {...(label ? {'aria-labelledby': labelId} : '')}
                    {...(description ? {'aria-describedby': descriptionId} : '')}
                    {...(items ? {'defaultValue': items.toString()} : '')}
                />
                {description && ( <p id={descriptionId} className="sui-description" dangerouslySetInnerHTML={{ __html: description }} /> )}
            </div>
            <div className="sui-form-field sui-multistrings" tabIndex="-1" aria-hidden="true">
                {label && ( <label id={labelId} htmlFor={inputId}>{label}</label> )}
                {buildItems(inputId, placeholder, items, disallowedCharsArray)}
                {description && ( <p id={descriptionId} className="sui-description" dangerouslySetInnerHTML={{ __html: description }} /> )}
            </div>
        </div>
    );
}