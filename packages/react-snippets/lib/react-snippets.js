import React from "react";

const Snippets = ({ copy, content }) => {
	const htmlCode = content;

	if (copy) {}

	return (
		<div className="sui-code-snippet-wrapper">
			<pre className="sui-code-snippet">{htmlCode}</pre>
			{copy && (
				<button className="sui-button" data-clipboard-target>
					Copy
				</button>
			)}
		</div>
	);
};

export { Snippets };
