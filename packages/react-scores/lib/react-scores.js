import React from "react";

const Scores = ({ type, scoreValue, large }) => {
	let classMain = "sui-circle-score loaded";

	// class according to type
	switch (type) {
		case "error":
			classMain += " sui-grade-f";
			break;

		case "warning":
			classMain += " sui-grade-c";
			break;

		case "success":
			classMain += " sui-grade-a";
			break;

		default:
			classMain += " sui-grade-f";
			break;
	}

	// if score is large then add class to make it larger
	if (large) {
		classMain += " sui-circle-score-lg";
	}

	// load circle score
	const loadCircleScore = ({ scoreValue }) => {
		const score = scoreValue,
			radius = 42,
			circumference = 2 * Math.PI * radius,
			dashLength = (circumference / 100) * score,
			gapLength = dashLength * 100 - score;

		return (
			<>
				<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<circle strokeWidth="16" cx="50" cy="50" r="42" />
					<circle
						strokeWidth="16"
						cx="50"
						cy="50"
						r="42"
						strokeDasharray={`0, ${gapLength}`}
						style={{ animation: "sui" + score + " 3s forwards" }}
					/>
				</svg>
				<span className="sui-circle-score-label">{score}</span>
			</>
		);
	};

	return (
		<div className={classMain}>
			{loadCircleScore({ scoreValue: scoreValue })}
		</div>
	);
};

export { Scores };
