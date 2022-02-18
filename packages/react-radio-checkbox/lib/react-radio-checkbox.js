import React from 'react'

export const RadioAndCheckbox = ({ size, stacked, type, options }) => {

    const mainClass = [`sui-${type}`];

    if (size === 'small') {
        mainClass.push(`sui-${type}-sm`);
    }

    if (stacked) {
        mainClass.push(`sui-${type}-stacked`);
    }

    return (
        <div className="sui-form-field" role={type == 'radio' ? 'radiogroup' : null}>
            {options.map((option, index) => {
                return (
                    option.image ?
                    (
                        <label className={`sui-${type}-image`} htmlFor={option.id} key={index}>
                            <img
                                src={option.image.src}
                                srcSet={option.image.srcset}
                                alt={option.image.alt}
                            />
                            <span className={mainClass.join(' ')}>
                                <input 
                                    id={option.id} 
                                    type={type} 
                                    name={option.name} 
                                    aria-labelledby={option.arialabelledby} 
                                    defaultChecked={option.defaultChecked} 
                                    disabled={option.disabled} 
                                />
                                <span aria-hidden="true"></span>
                                <span id={option.arialabelledby}>{option.label}</span>
                            </span>
                        </label>
                    ) : (
                        <label className={mainClass.join(' ')} htmlFor={option.id} key={index}>
                            <input 
                                id={option.id} 
                                type={type} 
                                name={option.name} 
                                aria-labelledby={option.arialabelledby} 
                                defaultChecked={option.defaultChecked} 
                                disabled={option.disabled} 
                            />
                            <span aria-hidden="true"></span>
                            <span id={option.arialabelledby}>{option.label}</span>
                        </label>
                    )
                );
            })}
        </div>
    )
}

