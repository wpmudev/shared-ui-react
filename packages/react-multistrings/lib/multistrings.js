import React, { useState } from 'react';
import { Input } from '@wpmudev/react-input';
import { ButtonIcon } from '@wpmudev/react-button-icon';

export const MultiString = ({
    uniqueId,
    label,
    placeholder,
    description,
    values = [],
    disallowedCharsArray = [],
}) => {

    const [items, setItems] = useState(values);

    const buildWrapper = (label, description, uniqueId, placeholder) => {

        const labelId = `${uniqueId}-label`;
        const descriptionId = `${uniqueId}-description`;
        const inputId = `${uniqueId}-input`;

        return (
            <div className="sui-multistrings-wrap">
                <div className="sui-multistrings-aria">
                    {label && ( <label id={labelId} htmlFor={inputId}>{label}</label> )}
                    <textarea 
                        placeholder={placeholder} 
                        id={inputId} 
                        className="sui-multistrings" 
                        aria-labelledby="exclude-files-strings-label" 
                        aria-describedby="exclude-files-description"
                        defaultValue={items.toString()}
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

    const buildItems = (inputId, placeholder, items, disallowedCharsArray) => {
        return (
            <ul className="sui-multistrings-list">
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
                    <Input id={inputId} autoComplete="off" placeholder={placeholder} aria-autocomplete="none" style={{ height: 'auto' }} onKeyDown={ (e) => handleKeyPress(e, disallowedCharsArray) } />
                </li>
            </ul>
        );
    }

    // delete items on click of close
    const handleDelete = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    // add items on enter key press
    const handleKeyPress = (e, disallowedCharsArray) => {
        const disallowedString = getRegexPatternForDisallowedChars( disallowedCharsArray ),
            regex = new RegExp( `[\r\n${disallowedString}]`, 'gm' );
        
        // Do nothing if the key is from the disallowed ones.
        if ( disallowedCharsArray.includes( e.key ) ) {
            e.preventDefault();
            return;
        } else if (e.keyCode === 13) {
            if( disallowedCharsArray.includes( e.target.value ) ) {
                e.target.value = '';
                return;
            }
            const newItems = [...items];
            newItems.push(e.target.value);
            setItems(newItems);
            e.target.value = '';
        } else {
            return;
        }
    }

    // disallowed characters
    const getRegexPatternForDisallowedChars = (disallowedCharsArray) => {
        // Regex for removing the disallowed keys from the inserted strings.
        const escapeRegExp = string => string.replace( /[.*+?^${}()|[\]\\]/g, '\\$&' ),
            disallowedPattern = escapeRegExp( disallowedCharsArray.join( '' ) );
        return disallowedPattern;
    }

    // remove disallowed characters
    const handleInsertTags = (disallowedCharsArray) => {

        const disallowedString = getRegexPatternForDisallowedChars( disallowedCharsArray ),
            regex = new RegExp( `[\r\n${disallowedString}]`, 'gm' );

        // Sanitize the values on keydown.
        $tagInput.on( 'keydown', function( e ) {

            // Do nothing if the key is from the disallowed ones.
            if ( disallowedCharsArray.includes( e.key ) ) {
                e.preventDefault();
                return;
            }

            let input    = $( this ),
                oldValue = $textarea.val(),
                newValue = input.val();

            // Get rid of new lines, commas, and any chars passed by the admin from the newly entered value.
            const newTrim = newValue.replace( regex, '' ),
                isEnter   = ( 13 === e.keyCode );

            if ( isEnter ) {
                e.preventDefault();
                e.stopPropagation();
            }

            // If there's no value to add, don't insert any new value.
            if ( 0 !== newTrim.length && 0 !== newTrim.trim().length ) {

                if ( isEnter ) {
                    const newTextareaValue = oldValue.length ? `${ oldValue }\n${ newTrim }` : newTrim;

                    // Print new value on textarea.
                    $textarea.val( newTextareaValue );

                    // Print new value on the list.
                    const html = buildItem( newTrim );
                    $( html ).insertBefore( $mainWrapper.find( '.sui-multistrings-input' ) );

                    // Clear input value.
                    input.val( '' );

                    // Bid the event to remove the tags.
                    bindRemoveTag( $mainWrapper );

                } else {
                    input.val( newTrim );
                }

            } else {
                input.val( '' );
            }

        });
    }

    return (
        <div>
            {buildWrapper(label, description, uniqueId, placeholder)}
        </div>
    );
}