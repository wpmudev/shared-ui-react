import React from 'react';
import { bar, ProgressBar, pecentage, progressIcon, closeBtn } from '../lib/react-progress-bar';

export default {
	title: 'Components/Progress bar',
	component: ProgressBar,
};

const func = () => {
	console.log('OnClick Event Managed');
};

const content = (progress) => {
	return (
		<>
			{bar(progress)}
			{pecentage(progress)}
			{progressIcon()}
			{closeBtn(func)}
		</>
	);
};

export const basic = (args) => <ProgressBar {...args} />;

basic.storyName = 'Basic';

basic.args = {
	content,
	outlined: false,
	progress: 50,
};
