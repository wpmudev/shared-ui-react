import React from 'react';
import { ProgressBar } from '../lib/react-progress-bar';

export default {
	title: 'Components/Progress bar/Elements',
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

export const elements = () => {
	return (
		<Template>
			<Section
				title="Loading Wheel"
				code="&lt;ProgressBar hasLoader={true} hasCancel={false} hasBar={false} hasLabel={false} /&gt;"
				isLast={ false }>
				<ProgressBar hasLoader={true} hasCancel={false} hasBar={false} hasLabel={false} />
			</Section>
            <Section
				title="Percentage Text"
				code="&lt;ProgressBar hasLoader={false} hasCancel={false} hasBar={false} now={50} hasLabel={true} /&gt;"
				isLast={ false }>
				<ProgressBar hasLoader={false} hasCancel={false} hasBar={false} now={50} hasLabel={true} />
			</Section>
            <Section
				title="Loading Bar"
				code="&lt;ProgressBar hasLoader={false} hasCancel={false} now={30} hasBar={true} hasLabel={false} /&gt;"
				isLast={ false }>
				<ProgressBar hasLoader={false} hasCancel={false} now={30} hasBar={true} hasLabel={false} />
			</Section>
            <Section
				title="Cancel Button"
				code="&lt;ProgressBar hasLoader={false} hasCancel={true} hasBar={false} hasLabel={false} /&gt;"
				isLast={ false }>
				<ProgressBar hasLoader={false} hasCancel={true} hasBar={false} hasLabel={false} />
			</Section>
            <Section
				title="Legend Text"
				code="&lt;ProgressBar hasLoader={false} hasCancel={false} now={30} hasBar={true} hasLabel={false} hasFrame={true} /&gt;"
				isLast={ true }>
				<ProgressBar hasLoader={false} hasCancel={false} now={30} hasBar={true} hasLabel={false} hasFrame={true} />
			</Section>
		</Template>
	);
};
