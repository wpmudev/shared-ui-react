import React from 'react';
import { ProgressBar } from '../lib/react-progress-bar';

export default {
	title: 'Components/Progress bar/Modifiers',
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

export const loader = () => {
	return (
		<Template>
			<Section
				title="Progress Bar with loader"
				code="&lt;ProgressBar hasCancel={false} hasLabel={false} hasLoader={true} now={30}/&gt;"
				isDefault={ false }
				isLast={ true }>
				<ProgressBar
					hasCancel={false}
					hasLabel={false}
					hasLoader={true}
					now={30}
				/>
			</Section>
		</Template>
	);
};
loader.storyName = 'With Loader';

export const label = () => {
	return (
		<Template>
			<Section
				title="Boxed Progress Bar"
				code="&lt;ProgressBar hasCancel={false} hasLoader={false} hasLabel={ true } now={30} /&gt;"
				isLast={ true }>
				<ProgressBar
					hasCancel={false}
					hasLoader={false}
					hasLabel={ true }
					now={30}
				/>
			</Section>
		</Template>
	);
};
label.storyName = 'With Label';

export const cancel = () => {
	return (
		<Template>
			<Section
				title="Boxed Progress Bar"
				code="&lt;ProgressBar hasCancel={true} hasLoader={false} hasLabel={false} now={30}/&gt;"
				isLast={ true }>
				<ProgressBar
					hasCancel={true}
					hasLoader={false}
					hasLabel={false}
					now={30}
				/>
			</Section>
		</Template>
	);
};
cancel.storyName = 'With Cancel Button';

export const frame = () => {
	return (
		<Template>
			<Section
				title="Progress Bar with legend text"
				code="&lt;ProgressBar cbFunction={() =&gt; {}} hasCancel={ true } hasFrame={ true } hasLabel={ true } hasLegend={ true } hasLoader={ true } now={30} sourceLang={{ cancel: 'Pause', legend: 'Plugin is loading...' }} /&gt;"
				isLast={ true }>
				<ProgressBar
					cbFunction={() => {}}
					hasCancel={ false }
					hasFrame={ true }
					hasLabel={ false }
					hasLegend={ false }
					hasLoader={ false }
					now={30}
					sourceLang={{
						cancel: 'Pause',
						legend: 'Plugin is loading...'
					}}
				/>
			</Section>
		</Template>
	);
};
frame.storyName = 'With Legend Text';


export const legend = () => {
	return (
		<Template>
			<Section
				title="Progress Bar with legend text"
				code="&lt;ProgressBar cbFunction={() =&gt; {}} hasCancel={ true } hasFrame={ true } hasLabel={ true } hasLegend={ true } hasLoader={ true } now={30} sourceLang={{ cancel: 'Pause', legend: 'Plugin is loading...' }} /&gt;"
				isLast={ true }>
				<ProgressBar
					cbFunction={() => {}}
					hasCancel={ false }
					hasFrame={ true }
					hasLabel={ false }
					hasLegend={ true }
					hasLoader={ false }
					now={30}
					sourceLang={{
						cancel: 'Pause',
						legend: 'Plugin is loading...'
					}}
				/>
			</Section>
		</Template>
	);
};
legend.storyName = 'With Legend Text';
