import React from 'react';
import { ProgressBar } from '../lib/react-progress-bar';

export default {
	title: 'Components/Progress Bar/States',
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

export const Initial = () => {
	return (
		<Section
			title="Initial"
			description="By default, the progress bar has zero value as its initial state."
			code="&lt;ProgressBar now={ 0 } /&gt;"
			isDefault={ true }
			isLast={ true }>
			<ProgressBar now={ 0 } />
		</Section>
	);
};

export const Loading = () => {
	return (
		<Section
			title="Loading"
			description="While the process is happening, the progress bar fills with blue."
			code="&lt;ProgressBar now={ 30 } /&gt;"
			isLast={ true }>
			<ProgressBar now={ 30 } />
		</Section>
	);
};

export const Complete = () => {
	return (
		<Section
			title="Complete"
			description="The progress bar measures in percentage, which means once the progress reaches 100, the whole bar will be blue."
			code="&lt;ProgressBar now={ 100 } /&gt;"
			isLast={ true }>
			<ProgressBar now={ 100 } />
		</Section>
	);
};
