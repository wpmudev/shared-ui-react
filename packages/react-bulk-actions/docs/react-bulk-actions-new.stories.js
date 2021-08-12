import React from 'react';
import { testPassFunction } from '../lib/react-bulk-actions-new';

export default {
	title: "Components/Bulk Actions (New)"
};

const Template = args => {
	const [ isOpen, setIsOpen ] = testPassFunction();

	return (
		<>
			<button onClick={ setIsOpen }>Click Me</button>
			<div className={ `${ isOpen ? '' : 'sui-hidden' }` }>Hidden content</div>
		</>
	);
};

export const primary = Template.bind({});
primary.storyName = "Default";