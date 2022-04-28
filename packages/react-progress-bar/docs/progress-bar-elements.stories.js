import React from 'react';
import { ProgressBar } from '../lib/react-progress-bar';

export default {
	title: 'Components/Progress Bar/Elements',
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
};

const Template = ({ children }) => {
	return (
		<div className="sui-box">
			<div className="sui-box-body">
				{children}
			</div>
		</div>
	);
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

export const loading = () => {
	return (
		<Template>
			<Section
				title="Loading Wheel"
				isLast={true}
				code="&lt;ProgressBar hasCancel={false} hasBar={false} hasLabel={false} /&gt;">
				<ProgressBar hasCancel={false} hasBar={false} hasLabel={false} />
			</Section>
		</Template>
	);
};

export const percentage = () => {
	return (
		<Template>
            <Section
				title="Percentage Text"
				isLast={true}
				code="&lt;ProgressBar hasLoader={false} hasCancel={false} hasBar={false} now={50} /&gt;">
				<ProgressBar hasLoader={false} hasCancel={false} hasBar={false} now={50} />
			</Section>
		</Template>
	);
};

export const bar = () => {
	return (
		<Template>
            <Section
				title="Loading Bar"
				isLast={true}
				code="&lt;ProgressBar hasLoader={false} hasCancel={false} now={30} hasLabel={false} /&gt;">
				<ProgressBar hasLoader={false} hasCancel={false} now={30} hasBar={true} hasLabel={false} />
			</Section>
		</Template>
	);
};

export const cancel = () => {
	return (
		<Template>
            <Section
				title="Cancel Button"
				isLast={true}
				code="&lt;ProgressBar hasLoader={false} hasBar={false} hasLabel={false} /&gt;">
				<ProgressBar hasLoader={false} hasBar={false} hasLabel={false} />
			</Section>
		</Template>
	);
};

export const legend = () => {
	return (
		<Template>
            <Section
				title="Legend Text"
				code="&lt;ProgressBar hasLoader={false} hasCancel={false} now={30} hasLabel={false} hasFrame={true} /&gt;"
				isLast={ true }>
				<ProgressBar hasLoader={false} hasCancel={false} now={30} hasLabel={false} hasFrame={true} />
			</Section>
		</Template>
	);
};