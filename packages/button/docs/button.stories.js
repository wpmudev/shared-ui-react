import React from 'react';
import { Button } from '../lib/button';

export default {
	title: 'Button'
}

export const primary = () => <Button label="Hello button" />

export const secondary = () => <Button label="Hello button" ghost={ true } />