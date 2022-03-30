import React from 'react'

const RadioCheckboxInput = ({ 
    type, 
    label, 
    labelId, 
    mainClasses, 
    id, 
    name, 
    image, 
    defaultChecked, 
    disabled,
    ...props
}) => {
    return (
        image ? (
            <label className={`sui-${type}-image`} htmlFor={id}>
                <img
                    src={image.src}
                    srcSet={image.srcset}
                    alt={image.alt} />
                <span className={mainClasses}>
                    <input
                        id={id}
                        type={type}
                        name={name}
                        aria-labelledby={labelId}
                        disabled={disabled}
                        defaultChecked={defaultChecked}
                        {...props} 
                    />
                    <span aria-hidden="true"></span>
                    {label && ((<span id={labelId}>{label}</span>))}
                </span>
            </label>
        ) : (
            <label className={mainClasses} htmlFor={id}>
                <input 
                    id={id}
                    type={type} 
                    name={name}
                    aria-labelledby={labelId}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    {...props}
                />
                <span aria-hidden="true"></span>
                {label && ((<span id={labelId}>{label}</span>))}
            </label>
        )
    );
}

const RadioCheckboxGroup = ({ size, stacked, type, options }) => {

    const mainClasses = [`sui-${type}`];

    if (size === 'small') {
        mainClasses.push(`sui-${type}-sm`);
    }

    if (stacked) {
        mainClasses.push(`sui-${type}-stacked`);
    }

    return (
        <div className="sui-form-field" role={type == 'radio' ? 'radiogroup' : 'group'}>
            {options?.map((option, index) => {
                return (
                    option.image ?
                    (
                        <RadioCheckboxInput 
                            index={index}
                            type={type}
                            label={option.label}
                            labelId={option.labelId}
                            mainClasses={mainClasses.join(' ')}
                            id={option.id}
                            name={option.name}
                            image={option.image}
                            defaultChecked={option.defaultChecked}
                            disabled={option.disabled}
                        />
                    ) : (
                        <RadioCheckboxInput 
                            index={index}
                            type={type}
                            label={option.label}
                            labelId={option.labelId}
                            mainClasses={mainClasses.join(' ')}
                            id={option.id}
                            name={option.name}
                            defaultChecked={option.defaultChecked}
                            disabled={option.disabled}
                        />
                    )
                );
            })}
        </div>
    )
}

export {
    RadioCheckboxGroup,
    RadioCheckboxInput
}