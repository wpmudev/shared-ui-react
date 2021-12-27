import React, { useState } from "react";
import { useCopyToClipboard } from "@wordpress/compose";

const CopyToClipboard = htmlCode => {
	const [hasCopied, setHasCopied] = useState(false);
	const CopyToClipboardRef = useCopyToClipboard(htmlCode, () => {
		setHasCopied(true);
	});

	return (
		<button
			className={hasCopied ? "sui-button sui-tooltip" : "sui-button"}
			aria-label={hasCopied ? "Copied!" : ""}
			data-tooltip={hasCopied ? "Copied!" : ""}
			onMouseLeave={() => setHasCopied(false)}
			ref={CopyToClipboardRef}
			data-clipboard-target="">
			Copy
		</button>
	);
};

const Snippets = ({ copy, content }) => {
	const htmlCode = content;

	return (
		<div className="sui-code-snippet-wrapper">
			<pre className="sui-code-snippet">{htmlCode}</pre>
			{copy && CopyToClipboard(htmlCode)}
		</div>
	);
};

export { Snippets };
