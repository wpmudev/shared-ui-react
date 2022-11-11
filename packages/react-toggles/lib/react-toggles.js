import React, { useState } from 'react';

export const Toggles = ({
	toggleState,
	disabled,
	labelId,
	descriptionId,
	label,
	description,
	id,
	additionalSettingsId,
	additionalSettings,
	labelHidden,
}) => {
	const [checkedState, setCheckedState] = useState(toggleState);

	const changeState = () => {
		setCheckedState(!checkedState);
	};

	return (
		<React.Fragment>
			<label htmlFor={id} className="sui-toggle">
				<input
					type="checkbox"
					id={id}
					aria-labelledby={!labelHidden ? labelId : null}
					aria-describedby={description ? descriptionId : null}
					aria-controls={additionalSettings ? additionalSettingsId : null}
					disabled={disabled}
					onClick={changeState}
					defaultChecked={checkedState}
				/>

				<span className="sui-toggle-slider" aria-hidden="true"></span>

				{label && (
					<span
						id={labelId}
						className={!labelHidden ? 'sui-toggle-label' : 'sui-screen-reader-text'}
					>
						{label}
					</span>
				)}

				{description && (
					<span id="unique-id-description" className="sui-description">
						{description}
					</span>
				)}
			</label>
			{additionalSettings && (
				<div
					tab-index="0"
					id={additionalSettingsId}
					className="sui-toggle-content"
					aria-label="A brief description"
					style={{ display: checkedState ? 'block' : 'none' }}
				>
					<div className="sui-row">
						<div className="sui-col-md-6">
							<div className="sui-form-field">
								<label htmlFor="custom-width" id="custom-width-label" className="sui-label">
									Width (px)
								</label>
								<input
									type="number"
									defaultValue="5"
									min="0"
									id="custom-width"
									className="sui-form-control"
									aria-labelledby="custom-width-label"
								/>
							</div>
						</div>

						<div className="sui-col-md-6">
							<div className="sui-form-field">
								<label htmlFor="custom-height" id="custom-height-label" className="sui-label">
									Height (px)
								</label>
								<input
									type="number"
									defaultValue="2"
									min="0"
									id="custom-height"
									className="sui-form-control"
									aria-labelledby="custom-height-label"
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};
