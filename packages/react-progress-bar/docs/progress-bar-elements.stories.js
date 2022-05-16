import React from 'react';
import { ProgressBar } from '../lib/react-progress-bar';

export default {
	title: 'Components/Progress Bar/Elements',
	component: ProgressBar,
	parameters: {
		actions: {
			disable: true,
		},
		controls: {
			disable: true,
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

export const Loader = () => {
	return (
		<Section
			title="Loading Wheel"
			description={
				[
					"By default, the component shows the loading wheel but you can hide it by setting ",
					<code style={{ fontSize: 11 }}>hasLoader</code>,
					" property to ",
					<code style={{ fontSize: 11 }}>false</code>,
					"."
				]
			}
			isLast={ true }>
			<ProgressBar now={ 30 } hasCancel={ false } hasBar={ false } hasLabel={ false } />
		</Section>
	);
};

export const Percent = () => {
	return (
		<Section
			title="Percentage Text"
			description={
				[
					"By default, the component shows the progress value or percentage, but you can hide it by setting ",
					<code style={{ fontSize: 11 }}>hasLabel</code>,
					" property to ",
					<code style={{ fontSize: 11 }}>false</code>,
					"."
				]
			}
			isLast={true}>
			<ProgressBar hasLoader={ false } hasCancel={ false } hasBar={ false } now={ 30 } />
		</Section>
	);
};

export const Cancel = () => {
	return (
		<Section
			title="Cancel Button"
			description={
				[
					"By default, the component shows the cancel button, but you can hide it by setting ",
					<code style={{ fontSize: 11 }}>hasCancel</code>,
					" property to ",
					<code style={{ fontSize: 11 }}>false</code>,
					". You can also pass a function when clicking on it by using the ",
					<code style={{ fontSize: 11 }}>cbFunction</code>,
					" property."
				]
			}
			isLast={ true }>
			<ProgressBar now={ 30 } hasLoader={ false } hasBar={ false } hasLabel={ false } />
		</Section>
	);
};

export const Legend = () => {
	return (
		<>
            <Section
				title="Legend Text"
				description={
					[
						"This text appears below the progress bar and only when ",
						<code style={{ fontSize: 11 }}>hasFrame</code>,
						" and ",
						<code style={{ fontSize: 11 }}>hasLegend</code>,
						" properties are set to ",
						<code style={{ fontSize: 11 }}>true</code>,
						". You can edit the text using ",
						<code style={{ fontSize: 11 }}>sourceLang</code>,
						" property."
					]
				}
				isLast={ true }>
				<ProgressBar hasLoader={ false } hasCancel={ false } now={ 30 } hasLabel={ false } hasFrame={ true } />
			</Section>
		</>
	);
};