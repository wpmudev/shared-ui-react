import React from 'react';
import { Button } from '../lib/button';

export default {
	title: 'Button'
}

export const primary = () => <Button>Hello button</Button>

export const secondary = () => <Button color="blue">Hello button</Button>