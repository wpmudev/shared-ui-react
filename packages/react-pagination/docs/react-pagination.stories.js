import React from 'react';
import { Pagination } from '../lib/react-pagination';

export default {
	title: 'Components/Pagination',
	component: Pagination,
}

export const primary = ( args ) => <Pagination { ...args } />;
primary.storyName = 'Pagination';
primary.args = {};
primary.argTypes = {};