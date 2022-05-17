import React, { useState } from 'react';
import { Input } from '@wpmudev/react-input';
import { ButtonIcon } from '@wpmudev/react-button-icon';

export const MultiString = ({
    uniqueId,
    label,
    placeholder,
    description,
    values = [],
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
                    {buildItems(inputId, placeholder, items)}
                    {description && ( <p id={descriptionId} className="sui-description" dangerouslySetInnerHTML={{ __html: description }} /> )}
                </div>
            </div>
        );
    }

    const buildItems = (inputId, placeholder, items) => {
        return (
            <ul className="sui-multistrings-list">
                {items && items.map((item, index) => {
                    return (
                        <li key={index} title={item}>
                            <i className="sui-icon-page sui-sm" aria-hidden="true"></i>
                            {item}
                            <ButtonIcon label="Delete" icon="close" color="white" onClick={ () => handleDelete(index) }/>
                        </li>
                    );
                })}
                <li className="sui-multistrings-input">
                    <Input id={inputId} autoComplete="off" placeholder={placeholder} aria-autocomplete="none" style={{ height: 'auto' }} onKeyDown={ (e) => handleKeyPress(e) } />
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
    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            const newItems = [...items];
            newItems.push(e.target.value);
            setItems(newItems);
            e.target.value = '';
        }
    }

    return (
        <div>
            {buildWrapper(label, description, uniqueId, placeholder)}
        </div>
    );
}