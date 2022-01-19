import React from 'react';
import { Button } from '@wpmudev/react-button';

export default function ToolTips({ text, tooltipText, position }) {
	let classes = 'sui-tooltip ';

	// switch position
	switch (position) {
		case 'top':
		case 'top-left':
		case 'top-right':
		case 'bottom':
		case 'bottom-left':
		case 'bottom-right':
		case 'left':
		case 'right':
			classes = classes + ' sui-tooltip-' + position;
			break;
		default:
			break;
	}
	return <Button label={text} className={classes} data-tooltip={tooltipText} />;
}
