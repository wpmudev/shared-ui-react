import React from 'react'

const Selectors = ({
    name,
    columns = '',
    content = [],
}) => {
    let classes = 'sui-box-selectors';
    
    switch (columns) {
        case 'one':
            classes += ' sui-box-selectors-col-1';
            break;
        case 'two':
            classes += ' sui-box-selectors-col-2';
            break;
        case 'three':
            classes += ' sui-box-selectors-col-3';
            break;
        case 'four':
            classes += ' sui-box-selectors-col-4';
            break;
        case 'five':
            classes += ' sui-box-selectors-col-5';
            break;
        default:
            break;
    }

    return (
        <div className={classes}>
            <ul role="radiogroup">
                {content.map((item, index) => (
                    <li key={index}>
                        <label 
                            htmlFor={item.id} 
                            className={`sui-box-selector ${item.disabled && ('sui-disabled')} ${item.vertical && ('sui-box-selector-vertical')}`}
                        >
                            <input type="radio" 
                                name={name} 
                                id={item.id} 
                                aria-labelledby={item.labelId}
                                aria-describedby={item.descriptionId}
                                disabled={item.disabled ? true : false}
                            />
                            <span aria-hidden="true">
                                {item.icon && (<span className={`sui-icon-${item.icon}`}></span>)}
                                <span id={item.labelId} aria-hidden="true">{item.label}</span>
                                {item.isPro && (<span className="sui-tag sui-tag-pro">Pro</span>)}
                            </span>
                            {item.description && (<span id={item.descriptionId} aria-hidden="true">{item.description}</span>)}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export { Selectors }
