import React from 'react';

export const FieldList = ({ title, description }) => {
	return (
		<div className="sui-field-list">
			<div className="sui-field-list-header">
				<h3 className="sui-field-list-title">{title}</h3>

				<p className="sui-description">{description}</p>
			</div>

			<div className="sui-field-list-body">
				<div className="sui-field-list-item">
					<label className="sui-field-list-item-label" htmlFor="toggle-1">
						Posts
					</label>

					<label className="sui-toggle">
						<input type="checkbox" id="toggle-1" />
						<span className="sui-toggle-slider"></span>
					</label>
				</div>
			</div>
		</div>
	);
};
