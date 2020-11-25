import React, { Component } from 'react';
import { TutorialsPage } from './tutorial-page';
import { TutorialsWidget } from './tutorial-widget';

// import './Tutorials.css';

export class Tutorials extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		if ( this.props.widget ) {
			return <TutorialsWidget { ...this.props } />
		}

		return <TutorialsPage { ...this.props } />
	}
}