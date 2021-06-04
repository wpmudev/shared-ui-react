import React from 'react';
import { Pagination } from '../lib/react-pagination';

export default {
	title: 'Components/Pagination',
	component: Pagination,
}

export const primary = ( args ) => <Pagination { ...args } ><h1>Blahhhhhhhhhhh</h1><div>Blahhhhhhhhhhh</div></Pagination>;
primary.storyName = 'Pagination';
primary.args = {
	elements:80,
	limit:5,
	results:true,
	skip:true
};
primary.argTypes = {};