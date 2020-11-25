import React, { Component } from 'react';
import { TutorialsList } from './tutorials-list';
import { TutorialsSlider } from './tutorials-slider';

export class Tutorials extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		if ( this.props.widget ) {
			return <TutorialsSlider { ...this.props } />
		}

		return <TutorialsList { ...this.props } />
	}
}