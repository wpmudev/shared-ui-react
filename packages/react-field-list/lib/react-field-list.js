import React from 'react';

export const FieldList = ({ title, description, options }) => {
	return (
		<div className="sui-field-list">
			<div className="sui-field-list-header">
				<h3 className="sui-field-list-title">{title}</h3>
				<p className="sui-description">{description}</p>
			</div>

			{options ? (
				<div className="sui-field-list-body">
					{Object.keys(options).map((key) => {
						const option = options[key];
						return (
							<div className="sui-field-list-item" key={key}>
								<label className="sui-field-list-item-label" htmlFor={key}>
									{option}
								</label>

								<label className="sui-toggle">
									<input type="checkbox" id={key} />
									<span className="sui-toggle-slider"></span>
								</label>
							</div>
						);
					})}
				</div>
			) : null}
		</div>
	);
};
