import React from 'react';
import { Button } from '../lib/button';

export default {
	title: 'Button',
	component: Button,
}

export const primary = () => <Button label="Hello button" />
primary.storyName = 'Default';

export const secondary = () => <Button label="Hello button" ghost={ true } />
secondary.storyName = 'Outlined';