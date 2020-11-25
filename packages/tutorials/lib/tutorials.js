import React, { Component } from 'react';
import { TutorialsList } from './tutorials-list';
import { TutorialsWidget } from './tutorial-widget';

export class Tutorials extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		if ( this.props.widget ) {
			return <TutorialsWidget { ...this.props } />
		}

		return <TutorialsList { ...this.props } />
	}
}