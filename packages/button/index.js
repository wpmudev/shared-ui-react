import React from 'react'

export const Button = ({
	text,
	href
}) => {
	if ( href ) {
		return (
			<a
				href={ href }
				className="sui-button"
			>
				{ text }
			</a>
		);
	}

	return (
		<button
			type="button"
			className="sui-button"
		>
			{ text }
		</button>
	);
}
