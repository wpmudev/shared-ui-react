'use strict';

module.exports = button;

const button = ({
	label,
	...props
}) => {
    return (
		<button
			{ ...props }
			className="sui-button"
		>
			{ label }
		</button>
	);
}
