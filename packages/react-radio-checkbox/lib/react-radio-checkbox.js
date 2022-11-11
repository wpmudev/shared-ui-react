import React from 'react'

const RadioCheckboxInput = ({ 
    type, 
    label, 
    labelId, 
    id, 
    name, 
    image, 
    defaultChecked, 
    disabled,
    ...props
}) => {

    const mainClasses = [`sui-${type}`];

    if (props.size === 'small') {
        mainClasses.push(`sui-${type}-sm`);
    }

    if (props.stacked) {
        mainClasses.push(`sui-${type}-stacked`);
    }

    return (
        image ? (
            <label className={`sui-${type}-image`} htmlFor={id}>
                <img
                    src={image.src}
                    srcSet={image.srcset}
                    alt={image.alt} />
                <span className={mainClasses.join(' ')}>
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
            <label className={mainClasses.join(' ')} htmlFor={id}>
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

const RadioCheckboxGroup = ({ type, options, ...props }) => {
    return (
        <div className="sui-form-field" role={'radio' === type ? 'radiogroup' : 'group'}>
            {options?.map((option, index) => {
                return (
                    option.image ?
                    (
                        <RadioCheckboxInput 
                            key={index}
                            type={type}
                            label={option.label}
                            labelId={option.labelId}
                            id={option.id}
                            name={option.name}
                            image={option.image}
                            defaultChecked={option.defaultChecked}
                            disabled={option.disabled}
                            {...props}
                        />
                    ) : (
                        <RadioCheckboxInput 
                            key={index}
                            type={type}
                            label={option.label}
                            labelId={option.labelId}
                            id={option.id}
                            name={option.name}
                            defaultChecked={option.defaultChecked}
                            disabled={option.disabled}
                            {...props}
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
