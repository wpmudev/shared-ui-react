import React from 'react';
import { ProgressBar } from '../lib/react-progress-bar';

export default {
	title: 'Components/Progress Bar/Modifiers',
	component: ProgressBar,
	parameters: {
		actions: {
			disabled: true,
		},
		controls: {
			disabled: true,
		},
		notes: {
			disabled: true,
		},
		previewTabs: {
			'storybook/docs/panel': {
				hidden: true,
			},
		},
	},
	decorators: [
		( Story ) => (
			<div className="sui-box">
				<div className="sui-box-body">
					<Story />
				</div>
			</div>
		),
	],
};

const Title = ({ children }) => {
	const customStyles = {
		margin: 0,
		marginBottom: 10 + 'px',
		color: '#333',
		fontSize: 14 + 'px',
		lineHeight: 22 + 'px',
	};

	return (
		<h3 style={ customStyles }>{ children }</h3>
	);
}

const Description = ({ children }) => {
	const customStyles = {
		margin: 0,
		marginBottom: 10 + 'px',
	};

	return (
		<p className="sui-description" style={ customStyles }>
			{ children }
		</p>
	);
}

const Code = ({ spaceTop = 5, spaceBottom = 20, children }) => {
	const customStyles = {
		display: 'block',
		margin: 0,
		marginTop: spaceTop + 'px',
		marginBottom: spaceBottom + 'px',
		padding: 5 + 'px ' + 10 + 'px',
	};

	return (
		<code style={ customStyles }>{ children }</code>
	);
}

const Section = ({ title, description, code, code2, isDefault = false, isLast = false, children }) => {
	return (
		<>
			{ title && '' !== title && (
				<Title>{ title }{ isDefault && (
					<span
						className="sui-tag sui-tag-sm sui-tag-yellow"
						style={ { marginLeft: 10 + 'px' } }
						aria-hidden="true"
					>Default</span>
				)}</Title>
			)}
			{ description && '' !== description && (
				<Description>{ description }</Description>
			)}
			{ code && '' !== code && (
				<Code { ... ( code2 && '' !== code2 ) && { spaceBottom: 5 } }>{ code }</Code>
			)}
			{ code2 && '' !== code2 && (
				<Code>{ code2 }</Code>
			)}
			{ children }
			{ !isLast && <hr /> }
		</>
	);
}

export const Design = () => {
	return (
		<>
			<Section
				title="Unboxed"
				description="By default, the progress bar is simple and shows all the necessary elements to work."
				code="&lt;ProgressBar now={ 30 } /&gt;"
				isDefault={ true }>
				<ProgressBar now={ 30 } />
			</Section>

			<Section
				title="Boxed Simple"
				description={
					[
						"Using the ",
						<code style={{ fontSize: 11 }}>hasFrame</code>,
						" property, you can display a gray border with inner spacing around the progress bar and its elements."
					]
				}
				code="&lt;ProgressBar now={ 30 } hasFrame={ true } hasLegend={ false } /&gt;">
				<ProgressBar now={ 30 } hasFrame={ true } hasLegend={ false } />
			</Section>

			<Section
				title="Boxed with Legend"
				description={
					[
						"The boxed variation can come with a legend at the bottom if necessary that you can display using the ",
						<code style={{ fontSize: 11 }}>hasLegend</code>,
						" property."
					]
				}
				code="&lt;ProgressBar now={ 30 } hasFrame={ true } hasLegend={ true } /&gt;"
				isLast={ true }>
				<ProgressBar now={ 30 } hasFrame={ true } hasLegend={ true } />
			</Section>
		</>
	);
};
Design.storyName = 'By Design';
