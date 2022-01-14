/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import styled from 'styled-components';
// react-datepicker css
import 'react-datepicker/dist/react-datepicker.css';


const Wrapper = styled.div`
	.sui-calendar {
		margin: 0;
		padding: 14px;
		border-width: 1px;
		border-style: solid;
		border-color: #DDDDDD;
		border-radius: 4px;
		background-color: #FFFFFF;
		-webkit-box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.07);
				box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.07);
	}

	.sui-calendar * {
		-webkit-box-sizing: border-box;
          box-sizing: border-box;
		font-variant-ligatures: none;
		-webkit-font-variant-ligatures: none;
		text-rendering: optimizeLegibility;
		-moz-osx-font-smoothing: grayscale;
		font-smoothing: antialiased;
		-webkit-font-smoothing: antialiased;
		text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
	}

	.sui-calendar .react-datepicker__day-name,
	.sui-calendar .react-datepicker__day {
		margin: 0 !important;
		width: 30px;
		height: 30px;
	}

	.sui-calendar .react-datepicker__day-name {
		padding-bottom: 5px;
		color: #333;
		font-size: 12px;
		line-height: 30px;
		font-family: Roboto,Arial,sans-serif;
		font-weight: 700;
		letter-spacing: -.25px;
	}

	.sui-calendar .react-datepicker__header{
		background: unset;
		border-bottom: unset;
	}

	.sui-calendar .react-datepicker__triangle{
		display: none;
	}

	.sui-calendar.calendar-daterange .react-datepicker__month-container:last-child{
		margin-left: 10px;
		padding-left: 10px;
		border-left: 1px solid #e6e6e6;
	}

	.react-datepicker-popper[data-placement^=bottom]{
		padding-top: 0;
	}

	.sui-date{
		padding-left: 14px;
	}

	.sui-calendar.calendar-daterange .react-datepicker__month-container:first-child{
		border-left: unset;
	}

	.sui-calendar .ui-datepicker-header {
		display: block;
		position: relative;
		margin: 0 0 5px;
	}

	.sui-calendar .ui-datepicker-header .ui-corner-all {
		width: 30px;
		height: 30px;
		cursor: pointer;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
			-ms-flex-direction: column;
				flex-direction: column;
		-webkit-box-align: center;
			-ms-flex-align: center;
				align-items: center;
		-webkit-box-pack: center;
			-ms-flex-pack: center;
				justify-content: center;
		position: absolute;
		top: 0;
		margin: 0;
		padding: 0;
		border: 0;
		border-radius: 4px;
		background-color: transparent;
		-webkit-transition: 0.3s ease;
		transition: 0.3s ease;
	}

	.sui-calendar .ui-datepicker-header .ui-corner-all:before {
		display: block;
		color: #888888;
	}

	.sui-calendar .ui-datepicker-header .ui-corner-all span {
		display: none;
	}

	.sui-calendar .ui-datepicker-header .ui-corner-all:hover, .sui-calendar .ui-datepicker-header .ui-corner-all:active {
		background-color: #F2F2F2;
	}

	.sui-calendar .ui-datepicker-header .ui-corner-all:hover:before, .sui-calendar .ui-datepicker-header .ui-corner-all:active:before {
		color: #333333;
	}

	.sui-calendar .ui-datepicker-header .ui-corner-all.ui-datepicker-prev {
		left: 0;
	}

	.sui-calendar .ui-datepicker-header .ui-corner-all.ui-datepicker-next:before,
	.sui-calendar .ui-datepicker-header .ui-corner-all.ui-datepicker-prev:before {
		font-family: wpmudev-plugin-icons!important;
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

	.sui-calendar .ui-datepicker-header .ui-corner-all.ui-datepicker-prev:before {
		content: "Ó";
	}

	.sui-calendar .ui-datepicker-header .ui-corner-all.ui-datepicker-next {
		right: 0;
	}

	.sui-calendar .ui-datepicker-header .ui-corner-all.ui-datepicker-next:before {
		content: "˜";
	}

	.sui-calendar .ui-datepicker-header .ui-corner-all.ui-state-disabled {
		opacity: 0.5;
	}

	.sui-calendar .ui-datepicker-header .ui-datepicker-title {
		display: block;
		padding: 0 40px;
		color: #333333;
		font-size: 12px;
		line-height: 30px;
		font-family: "Roboto", Arial, sans-serif;
		font-weight: bold;
		letter-spacing: -0.25px;
		text-align: center;
	}

	.sui-calendar .ui-datepicker-header .ui-corner-all.ui-state-disabled {
		opacity: 0.5;
	}

	.sui-calendar .ui-datepicker-header .ui-datepicker-title {
		display: block;
		padding: 0 40px;
		color: #333333;
		font-size: 12px;
		line-height: 30px;
		font-family: "Roboto", Arial, sans-serif;
		font-weight: bold;
		letter-spacing: -0.25px;
		text-align: center;
	}

	.react-datepicker__header{
		position: unset;
	}

	.sui-calendar .ranges{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
	}

	.calendar-daterange{
		padding-top: 52px;
	}

	.sui-calendar .ranges {
		display: block;
		-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
				flex: 0 0 auto;
		position: absolute;
		top: 20px;
		right: 0;
		left: 0;
	}

	.sui-calendar .ranges ul {
		width: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
			flex-wrap: wrap;
		-webkit-box-align: center;
			-ms-flex-align: center;
				align-items: center;
		-webkit-box-pack: center;
			-ms-flex-pack: center;
				justify-content: center;
		margin: 0;
		padding: 0;
		border: 0;
	}

	.sui-calendar .ranges ul, 
	.sui-calendar .ranges ul li {
		list-style: none;
	}

	.sui-calendar .ranges ul li {
		cursor: pointer;
		display: block;
		margin: 0 5px;
		padding: 3px 10px;
		border: 0;
		border-radius: 10px;
		background-color: #F2F2F2;
		color: #333333;
		font: bold 10px/12px "Roboto", Arial, sans-serif;
		letter-spacing: -0.25px;
		text-align: center;
	}

	.sui-calendar .ranges ul li:hover, 
	.sui-calendar .ranges ul li:focus {
		background-color: #E1F6FF;
	}

	.sui-calendar .ranges ul li.active {
		background-color: #17A8E3;
		color: #FFFFFF;
	}

	.sui-calendar .ranges ul li:first-child {
		margin-left: 0;
	}

	.sui-calendar .ranges ul li:last-child {
		margin-right: 0;
	}

	.sui-calendar .react-datepicker__month{
		margin: 0;
	}

	.sui-calendar .react-datepicker__day {
		border-radius: 4px;
		background-color: #FFFFFF;
		color: #888888;
		font-size: 12px;
		line-height: 30px;
		font-family: "Roboto", Arial, sans-serif;
		font-weight: 400;
		letter-spacing: -0.25px;
		-webkit-transition: all 0.3s ease;
		transition: all 0.3s ease;
	}

	.sui-calendar .react-datepicker__day:hover {
		background-color: #F8F8F8;
		color: #333333;
	}

	.sui-calendar .react-datepicker__day--today {
		background-color: #FFF5D5;
		color: #666666;
	}

	.sui-calendar .react-datepicker__day--outside-month{
		visibility: hidden;
		height: 0;
	}

	.sui-calendar.calendar-daterange .react-datepicker__day.react-datepicker__day--selected,
	.sui-calendar.calendar-daterange .react-datepicker__day.react-datepicker__day--range-end {
		color: #FFFFFF;
		background-color: #17A8E3;
	}
	
	.sui-calendar.calendar-daterange .react-datepicker__day--in-range:not(.react-datepicker__day--range-end):not(.react-datepicker__day--range-start),
	.sui-calendar.calendar-daterange .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--selecting-range-start),
	.sui-calendar .react-datepicker__day--selected {
		color: #17A8E3;
		background-color: #E1F6FF;
	}

	.sui-calendar.calendar-daterange .react-datepicker__day--selected, 
	.sui-calendar.calendar-daterange .react-datepicker__week .react-datepicker__day--in-range:first-child {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	.sui-calendar.calendar-daterange .react-datepicker__day--range-end,
	.sui-calendar.calendar-daterange .react-datepicker__week .react-datepicker__day--in-range:last-child {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.sui-calendar.calendar-daterange .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--selecting-range-start),
	.sui-calendar.calendar-daterange .react-datepicker__day--in-range:not(.react-datepicker__day--range-end):not(.react-datepicker__day--range-start):not(.react-datepicker__day--weekend) {
		border-radius: 0;
	}
	
	.sui-calendar.calendar-daterange .react-datepicker__day--selected, 
	.sui-calendar.calendar-daterange .react-datepicker__week .react-datepicker__day--in-range:first-child,
	.sui-calendar.calendar-daterange .react-datepicker__week .react-datepicker__day--in-selecting-range:first-child {
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}

	.sui-calendar.calendar-daterange .react-datepicker__day--range-end,
	.sui-calendar.calendar-daterange .react-datepicker__week .react-datepicker__day--in-range:last-child,
	.sui-calendar.calendar-daterange .react-datepicker__week .react-datepicker__day--in-selecting-range:last-child {
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}
`;

const Link = styled.a`

`;


const single = ({ startDate, setStartDate, type, onChange, endDate }) => {
	if (type === 'single') {
		return (
			<Wrapper>
				<DatePicker
					renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
						<div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
							<Link
								className="ui-datepicker-prev ui-corner-all"
								title="Prev"
								onClick={decreaseMonth}
							>
								<span className="ui-icon ui-icon-circle-triangle-w">Prev</span>
							</Link>
							<Link
								className="ui-datepicker-next ui-corner-all"
								title="Next"
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
					)}
					selected={startDate}
					onChange={(date) => setStartDate(date)}
					startDate={startDate}
					dateFormat="MMMM d, yyyy"
					placeholderText="Pick a date"
					className="sui-form-control"
					calendarClassName="sui-calendar"
				/>
			</Wrapper>
		);
	}
	return (
		<Wrapper>
			<DatePicker
				renderCustomHeader={({ monthDate, customHeaderCount, decreaseMonth, increaseMonth }) => (
					<>
						{customHeaderCount === 0 ?
							<div className="ranges">
								<ul>
									<li data-range-key="Today">Today</li>
									<li data-range-key="Tomorrow">Tomorrow</li>
									<li data-range-key="1 week">1 week</li>
									<li data-range-key="30 days">30 days</li>
									<li data-range-key="Custom" className="active">Custom</li>
								</ul>
							</div> 
							: ''
						}
						<div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
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
				className="sui-form-control"
				placeholderText="Pick a date"
				startDate={startDate}
				endDate={endDate}
				monthsShown={2}
				calendarClassName="sui-calendar calendar-daterange"
			/>
		</Wrapper>
	);
};

// select date custom range
const customRange = () => {

}

export const Calendar = ({ type }) => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	const [rangeDate, setRangeDate] = useState(null);

	const onChange = (dates) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
		setRangeDate(null);
	};

	return (
		<div className="sui-form-field">
			<label htmlFor="date-simple-default" id="date-simple-default--label" className="sui-label">
				Expiration Date
			</label>

			<div className="sui-date">
				{single({ startDate, setStartDate, type, onChange, endDate, rangeDate, setRangeDate })}
				<span className="sui-icon-calendar" aria-hidden="true"></span>
			</div>

			<span id="date-simple-default--error" className="sui-error-message"></span>

			<span id="date-simple-default--message" className="sui-description">
				Set an expiration date for your module.
			</span>
		</div>
	);
};
