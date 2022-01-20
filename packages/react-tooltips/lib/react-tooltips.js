import React from 'react';
import { Button } from '@wpmudev/react-button';
import { Tooltip } from '@mui/material';

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

	return (
		<Tooltip title={tooltipText} placement={position} classes={'sui-tooltip'} arrow>
			<span>
				<Button label={text} />
			</span>
		</Tooltip>
	);
}
