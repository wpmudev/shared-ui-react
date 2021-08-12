import React from 'react';
import { testPassFunction, testNumberFunction } from '../lib/react-bulk-actions-new';

export default {
	title: "Components/Bulk Actions (New)"
};

const Template = args => {
	const [ isOpen, setIsOpen ] = testPassFunction();
	const [ count, setCount ] = testNumberFunction();

	return (
		<>
			<button className={ `sui-button ${ isOpen ? 'sui-button-red' : 'sui-button-blue' }` } onClick={ setIsOpen }>
				{ isOpen ? 'Close Me' : 'Show Me' }
			</button>
			<button className="sui-button" onClick={ setCount }>Magic Number</button>

			<div className={ `sui-border-frame${ isOpen ? '' : ' sui-hidden' }` }>
				<p>Hidden content { count }</p>
			</div>
		</>
	);
};

export const primary = Template.bind({});
primary.storyName = "Default";