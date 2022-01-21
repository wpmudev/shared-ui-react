import React from 'react';

export const Toggles = ({}) => {
	return (
		<div className="sui-form-field">
			<label htmlFor="unique-id" className="sui-toggle">
				<input
					type="checkbox"
					id="unique-id"
					aria-labelledby="unique-id-label"
					aria-describedby="unique-id-description"
				/>

				<span className="sui-toggle-slider" aria-hidden="true"></span>

				<span id="unique-id-label" className="sui-toggle-label">
					Toggle Label
				</span>

				<span id="unique-id-description" className="sui-description">
					Toggle description goes here.
				</span>
			</label>
		</div>
	);
};
