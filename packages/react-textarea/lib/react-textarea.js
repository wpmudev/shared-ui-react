import React from "react"

export const Textarea = (props) =>{

    let placeholder = props.placeholder  ? props.placeholder : ""
    let classNam = props.error ? "sui-form-field sui-form-field-error" : "sui-form-field"


    return(
        <div className={classNam}>

	<label for="unique-id" id="label-unique-id" className="sui-label">{props.label}</label>

	<textarea
		placeholder={placeholder}
		id="unique-id"
		className="sui-form-control"
		aria-labelledby="label-unique-id"
		aria-describedby="error-unique-id description-unique-id"
	></textarea>
    { props.error && <span id="error-unique-id" className="sui-error-message">{props.errorText}</span>}
	<span id="description-unique-id" className="sui-description">{props.desc}</span>

</div>
    )
}