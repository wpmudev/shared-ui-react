import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
// react-datepicker css
import 'react-datepicker/dist/react-datepicker.css';

const ParentWrapper = styled.div`
	.sui-date .react-datepicker__input-container .sui-form-control.sui-date-field {
		padding-left: 14px;
	}
`;

const DateWrapper = styled.div`
	.sui__calendar {
		margin: 0;
		padding: 14px;
		border-width: 1px;
		border-style: solid;
		border-color: #dddddd;
		border-radius: 4px;
		background-color: #ffffff;
		box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.07);
		* {
			box-sizing: border-box;
			font-variant-ligatures: none;
			text-rendering: optimizeLegibility;
			font-smoothing: antialiased;
			text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
		}
		.react-datepicker__day-name {
			margin: 0 !important;
			width: 30px;
			height: 30px;
			padding-bottom: 5px;
			color: #333;
			font-size: 12px;
			line-height: 30px;
			font-family: Roboto, Arial, sans-serif;
			font-weight: 700;
			letter-spacing: -0.25px;
		}
		.react-datepicker__day {
			margin: 0 !important;
			width: 30px;
			height: 30px;
			border-radius: 4px;
			background-color: #ffffff;
			color: #888888;
			font-size: 12px;
			line-height: 30px;
			font-family: 'Roboto', Arial, sans-serif;
			font-weight: 400;
			letter-spacing: -0.25px;
			-webkit-transition: all 0.3s ease;
			transition: all 0.3s ease;
			&:hover {
				background-color: #f8f8f8;
				color: #333333;
			}
		}
		.react-datepicker__header {
			background: unset;
			border-bottom: unset;
		}
		.react-datepicker__triangle {
			display: none;
		}
		.ui-datepicker-header {
			display: block;
			position: relative;
			margin: 0 0 5px;
			.ui-corner-all {
				width: 30px;
				height: 30px;
				cursor: pointer;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				position: absolute;
				top: 0;
				margin: 0;
				padding: 0;
				border: 0;
				border-radius: 4px;
				background-color: transparent;
				transition: 0.3s ease;
				&:before {
					display: block;
					color: #888888;
				}
				span {
					display: none;
				}
				&:hover {
					background-color: #f2f2f2;
					&:before {
						color: #333333;
					}
				}
				&:active {
					background-color: #f2f2f2;
					&:before {
						color: #333333;
					}
				}
			}
			.ui-corner-all.ui-state-disabled {
				opacity: 0.5;
				opacity: 0.5;
			}
			.ui-datepicker-title {
				display: block;
				padding: 0 40px;
				color: #333333;
				font-size: 12px;
				line-height: 30px;
				font-family: 'Roboto', Arial, sans-serif;
				font-weight: bold;
				letter-spacing: -0.25px;
				text-align: center;
				display: block;
				padding: 0 40px;
				color: #333333;
				font-size: 12px;
				line-height: 30px;
				font-family: 'Roboto', Arial, sans-serif;
				font-weight: bold;
				letter-spacing: -0.25px;
				text-align: center;
			}
		}
		.ranges {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			display: block;
			flex: 0 0 auto;
			position: absolute;
			top: 20px;
			right: 0;
			left: 0;
			.ranges__wrapper {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				margin: 0;
				padding: 0;
				border: 0;
				list-style: none;
				button {
					list-style: none;
					cursor: pointer;
					display: block;
					margin: 0 5px;
					padding: 3px 10px;
					border: 0;
					border-radius: 10px;
					background-color: #f2f2f2;
					color: #333333;
					font: bold 10px/12px 'Roboto', Arial, sans-serif;
					letter-spacing: -0.25px;
					text-align: center;
					&:hover {
						background-color: #e1f6ff;
					}
					&:focus {
						background-color: #e1f6ff;
					}
					&:first-child {
						margin-left: 0;
					}
					&:last-child {
						margin-right: 0;
					}
				}
				button.active {
					background-color: #17a8e3;
					color: #ffffff;
				}
			}
		}
		.react-datepicker__month {
			margin: 0;
		}
		.react-datepicker__day--today {
			background-color: #fff5d5;
			color: #666666;
		}
		.react-datepicker__day--outside-month {
			visibility: hidden;
			height: 0;
		}
		.react-datepicker__day--selected {
			color: #17a8e3;
			background-color: #e1f6ff;
		}
	}
	.sui__calendar.sui__calendar--range {
		.react-datepicker__month-container {
			&:last-child {
				margin-left: 10px;
				padding-left: 10px;
				border-left: 1px solid #e6e6e6;
			}
			&:first-child {
				border-left: unset;
			}
		}
		.react-datepicker__day.react-datepicker__day--selected {
			color: #ffffff;
			background-color: #17a8e3;
		}
		.react-datepicker__day.react-datepicker__day--range-end {
			color: #ffffff;
			background-color: #17a8e3;
		}
		.react-datepicker__day--in-range {
			&:not(.react-datepicker__day--range-end) {
				&:not(.react-datepicker__day--range-start) {
					color: #17a8e3;
					background-color: #e1f6ff;
					&:not(.react-datepicker__day--weekend) {
						border-radius: 0;
					}
				}
			}
		}
		.react-datepicker__day--in-selecting-range {
			&:not(.react-datepicker__day--selecting-range-start) {
				color: #17a8e3;
				background-color: #e1f6ff;
				border-radius: 0;
			}
		}
		.react-datepicker__day--selected {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
			border-top-left-radius: 4px;
			border-bottom-left-radius: 4px;
		}
		.react-datepicker__week {
			.react-datepicker__day--in-range {
				&:first-child {
					&:not(.react-datepicker__day--range-end) {
						border-top-right-radius: 0;
						border-bottom-right-radius: 0;
						border-top-left-radius: 4px;
						border-bottom-left-radius: 4px;
					}
				}
				&:last-child {
					&:not(.react-datepicker__day--range-start) {
						border-top-left-radius: 0;
						border-bottom-left-radius: 0;
						border-top-right-radius: 4px;
						border-bottom-right-radius: 4px;
					}
				}
			}
			.react-datepicker__day--in-selecting-range {
				&:first-child {
					border-top-left-radius: 4px;
					border-bottom-left-radius: 4px;
				}
				&:last-child {
					border-top-right-radius: 4px;
					border-bottom-right-radius: 4px;
				}
			}
		}
		.react-datepicker__day--range-end {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
			border-top-right-radius: 4px;
			border-bottom-right-radius: 4px;
			&.react-datepicker__day--range-start {
				border-top-left-radius: 4px;
				border-bottom-left-radius: 4px;
			}
		}
	}
	.react-datepicker-popper[data-placement^='bottom'] {
		padding-top: 0;
	}
	.react-datepicker__header {
		position: unset;
	}
	.sui__calendar--range {
		padding-top: 52px;
	}
	.react-datepicker__day--disabled {
		text-decoration: line-through;
		pointer-events: none;
		background-color: #fff;
		color: #ddd;
	}
`;

const Link = styled.a`
	&.ui-datepicker-prev {
		left: 0;
		&:before {
			content: 'Ó';
		}
	}

	&.ui-datepicker-next {
		right: 0;
		&:before {
			content: '˜';
		}
	}

	&.ui-datepicker-next:before,
	&.ui-datepicker-prev:before {
		font-family: wpmudev-plugin-icons !important;
		speak: none;
		font-size: 1em;
		font-style: normal;
		font-weight: 400;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
		text-rendering: auto;
		display: inline-block;
		color: #888;
		opacity: 1;
		-webkit-font-smoothing: antialiased;
	}
`;

const singleDatepicker = ({ startDate, setStartDate }) => {
	return (
		<DateWrapper>
			<DatePicker
				renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
					<div className="ui-datepicker-header ui-widget-header ui-corner-all">
						<Link className="ui-datepicker-prev ui-corner-all" title="Prev" onClick={decreaseMonth}>
							<span className="ui-icon ui-icon-circle-triangle-w">Prev</span>
						</Link>
						<Link className="ui-datepicker-next ui-corner-all" title="Next" onClick={increaseMonth}>
							<span className="ui-icon ui-icon-circle-triangle-e">Next</span>
						</Link>
						<div className="ui-datepicker-title">
							<span className="ui-datepicker-month">
								{monthDate.toLocaleString('en-US', {
									month: 'long',
								})}
							</span>
							&nbsp;
							<span className="ui-datepicker-year">
								{monthDate.toLocaleString('en-US', {
									year: 'numeric',
								})}
							</span>
						</div>
					</div>
				)}
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				startDate={startDate}
				dateFormat="MMMM d, yyyy"
				placeholderText="Pick a date"
				className="sui-form-control sui-date-field"
				calendarClassName="sui__calendar"
			/>
		</DateWrapper>
	);
};

const rangeDatepicker = ({
	startDate,
	setStartDate,
	setEndDate,
	onChange,
	endDate,
	rangeDate,
	setRangeDate,
}) => {
	return (
		<DateWrapper>
			<DatePicker
				renderCustomHeader={({ monthDate, customHeaderCount, decreaseMonth, increaseMonth }) => (
					<>
						{customHeaderCount === 0 ? (
							<div className="ranges">
								<div className="ranges__wrapper">
									<button
										className={rangeDate === 'today' ? 'active' : ''}
										data-type="today"
										onClick={() => {
											setStartDate(new Date());
											setEndDate(new Date());
											setRangeDate('today');
										}}
									>
										Today
									</button>
									<button
										className={rangeDate === 'tomorrow' ? 'active' : ''}
										data-type="tomorrow"
										onClick={() => {
											var tomorrow = new Date();
											tomorrow.setDate(tomorrow.getDate() + 1);
											setStartDate(tomorrow);
											setEndDate(tomorrow);
											setRangeDate('tomorrow');
										}}
									>
										Tomorrow
									</button>
									<button
										className={rangeDate === 'week' ? 'active' : ''}
										data-type="week"
										onClick={() => {
											var curr = new Date(); // get current date
											var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
											var last = first + 6; // last day is the first day + 6

											var firstday = new Date(curr.setDate(first));
											var lastday = new Date(curr.setDate(last));

											setStartDate(firstday);
											setEndDate(lastday);
											setRangeDate('week');
										}}
									>
										1 week
									</button>
									<button
										className={rangeDate === 'month' ? 'active' : ''}
										data-type="month"
										onClick={() => {
											var date = new Date();
											var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
											var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
											setStartDate(firstDay);
											setEndDate(lastDay);
											setRangeDate('month');
										}}
									>
										30 days
									</button>
									<button
										className={rangeDate === 'custom' ? 'active' : ''}
										data-type="custom"
										onClick={() => {
											var month = new Date();
											month.setDate(month.getDate() + 29);
											setStartDate(new Date());
											setEndDate(new Date());
											setRangeDate('custom');
										}}
									>
										Custom
									</button>
								</div>
							</div>
						) : (
							''
						)}
						<div className="ui-datepicker-header ui-widget-header ui-corner-all">
							<Link
								className="ui-datepicker-prev ui-corner-all"
								title="Prev"
								style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
								onClick={decreaseMonth}
							>
								<span className="ui-icon ui-icon-circle-triangle-w">Prev</span>
							</Link>
							<Link
								className="ui-datepicker-next ui-corner-all"
								title="Next"
								style={customHeaderCount === 0 ? { visibility: 'hidden' } : null}
								onClick={increaseMonth}
							>
								<span className="ui-icon ui-icon-circle-triangle-e">Next</span>
							</Link>
							<div className="ui-datepicker-title">
								<span className="ui-datepicker-month">
									{monthDate.toLocaleString('en-US', {
										month: 'long',
									})}
								</span>
								&nbsp;
								<span className="ui-datepicker-year">
									{monthDate.toLocaleString('en-US', {
										year: 'numeric',
									})}
								</span>
							</div>
						</div>
					</>
				)}
				selectsRange
				fixedHeight
				selected={startDate}
				onChange={onChange}
				dateFormat="MMMM d, yyyy"
				className="sui-form-control sui-date-field"
				startDate={startDate}
				endDate={endDate}
				monthsShown={2}
				calendarClassName="sui__calendar sui__calendar--range"
			/>
		</DateWrapper>
	);
};

export const Calendar = ({ type, errorStatus }) => {
	const [startDate, setStartDate] = useState(type === 'single' ? null : new Date());

	var month = new Date();
	month.setDate(month.getDate() + 29);

	const [endDate, setEndDate] = useState(month);

	const [rangeDate, setRangeDate] = useState('custom');

	const onChange = (dates) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
		setRangeDate('custom');
	};

	return (
		<ParentWrapper>
			<div className={`sui-form-field${errorStatus ? ' sui-form-field-error' : ''}`}>
				<label htmlFor="date-simple-default" id="date-simple-default--label" className="sui-label">
					Expiration Date
				</label>

				<div className="sui-date">
					{type === 'single'
						? singleDatepicker({ startDate, setStartDate })
						: rangeDatepicker({
								startDate,
								setStartDate,
								setEndDate,
								onChange,
								endDate,
								rangeDate,
								setRangeDate,
						  })}
					<span className="sui-icon-calendar" aria-hidden="true"></span>
				</div>

				{errorStatus ? (
					<span id="date-simple-default--error" className="sui-error-message">
						Expiration date is empty or date inserted is not valid.
					</span>
				) : (
					''
				)}

				<span id="date-simple-default--message" className="sui-description">
					Set an expiration date for your module.
				</span>
			</div>
		</ParentWrapper>
	);
};
