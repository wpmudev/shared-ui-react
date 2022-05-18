import React from 'react'
import { MultiString } from '../lib/multistrings'

export default {
	title: 'Components/Multiple Strings',
	component: MultiString,
};

export const demo = (args) => <MultiString {...args} />;
demo.storyName = 'Demo';
demo.args = {
	uniqueId: 'exclusion-list',
	label: 'Global file exclusions',
	placeholder: 'Enter a new value',
	description: 'Use relative paths to the file or folder. For example <strong style="color: #333;">/wp-content/custom-folder/</strong> or <strong style="color: #333;">/file.php</strong>. Press enter to add each exclusion.',
	values: ['value 1', 'value 2', 'value 3'],
	disallowedChars: "pawan,kumar,97,98,value 1",
};