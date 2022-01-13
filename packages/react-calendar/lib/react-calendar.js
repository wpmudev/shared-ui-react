import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
// import { Input } from '@wpmudev/react-input/lib/react-input';
// react-datepicker css
import 'react-datepicker/dist/react-datepicker.css';

const single = ({ startDate, setStartDate, type, onChange, endDate }) => {
	if (type === 'single') {
		return (
			<DatePicker
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				startDate={startDate}
				dateFormat="MMMM d, yyyy"
				placeholderText="Pick a date"
				className="sui-form-control"
				calendarClassName="sui-calendar"
			/>
		);
	}
	return (
		<DatePicker
			renderCustomHeader={({ monthDate, customHeaderCount, decreaseMonth, increaseMonth }) => (
				<div>
					<button
						aria-label="Previous Month"
						className={'react-datepicker__navigation react-datepicker__navigation--previous'}
						style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
						onClick={decreaseMonth}
					>
						<span
							className={
								'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'
							}
						>
							{'<'}
						</span>
					</button>
					<span className="react-datepicker__current-month">
						{monthDate.toLocaleString('en-US', {
							month: 'long',
							year: 'numeric',
						})}
					</span>
					<button
						aria-label="Next Month"
						className={'react-datepicker__navigation react-datepicker__navigation--next'}
						style={customHeaderCount === 0 ? { visibility: 'hidden' } : null}
						onClick={increaseMonth}
					>
						<span
							className={
								'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'
							}
						>
							{'>'}
						</span>
					</button>
				</div>
			)}
			selectsRange
			selected={startDate}
			onChange={onChange}
			dateFormat="MMMM d, yyyy"
			className="sui-form-control"
			placeholderText="Pick a date"
			startDate={startDate}
			endDate={endDate}
			monthsShown={2}
		/>
	);
};

export const Calendar = ({ type }) => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	const onChange = (dates) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};

	return (
		<div className="sui-form-field">
			<label htmlFor="date-simple-default" id="date-simple-default--label" className="sui-label">
				Expiration Date
			</label>

			<div className="sui-date">
				{single({ startDate, setStartDate, type, onChange, endDate })}
				<span className="sui-icon-calendar" aria-hidden="true"></span>
			</div>

			<span id="date-simple-default--error" className="sui-error-message"></span>

			<span id="date-simple-default--message" className="sui-description">
				Set an expiration date for your module.
			</span>
		</div>
	);

	// const args = {
	// 	label: 'Company Name',
	// 	placeholder: 'Eg. Acme Industries',
	// 	description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
	// 	errorStatus: false,
	// 	errorDescription: 'Here is a description of the error',
	// };

	// return (
	// 	<DatePicker
	// 		renderCustomHeader={({ monthDate, customHeaderCount, decreaseMonth, increaseMonth }) => (
	// 			<div>
	// 				<button
	// 					aria-label="Previous Month"
	// 					className={'react-datepicker__navigation react-datepicker__navigation--previous'}
	// 					style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
	// 					onClick={decreaseMonth}
	// 				>
	// 					<span
	// 						className={
	// 							'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'
	// 						}
	// 					>
	// 						{'<'}
	// 					</span>
	// 				</button>
	// 				<span className="react-datepicker__current-month">
	// 					{monthDate.toLocaleString('en-US', {
	// 						month: 'long',
	// 						year: 'numeric',
	// 					})}
	// 				</span>
	// 				<button
	// 					aria-label="Next Month"
	// 					className={'react-datepicker__navigation react-datepicker__navigation--next'}
	// 					style={customHeaderCount === 0 ? { visibility: 'hidden' } : null}
	// 					onClick={increaseMonth}
	// 				>
	// 					<span
	// 						className={
	// 							'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'
	// 						}
	// 					>
	// 						{'>'}
	// 					</span>
	// 				</button>
	// 			</div>
	// 		)}
	// 		selectsRange
	// 		selected={startDate}
	// 		onChange={onChange}
	// 		customInput={<Input {...args} />}
	// 		dateFormat="MMMM d, yyyy"
	// 		className="sui-form-control"
	// 		placeholderText="Pick a date"
	// 		startDate={startDate}
	// 		endDate={endDate}
	// 		monthsShown={2}
	// 	/>
	// );
};
