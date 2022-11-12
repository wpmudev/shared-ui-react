import React from 'react';
import { Post } from '../lib/react-post';

import demoImage from './images/demo.png';

export default {
	title: 'Components/Post/Modifiers',
	component: Post,
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
};

const Title = ({ children }) => {
	const customStyles = {
		margin: 0,
		marginBottom: 10 + 'px',
		color: '#333',
		fontSize: 14 + 'px',
		lineHeight: 22 + 'px',
	};

	return <h3 style={customStyles}>{children}</h3>;
};

const Description = ({ children }) => {
	const customStyles = {
		margin: 0,
		marginBottom: 10 + 'px',
	};

	return (
		<p className="sui-description" style={customStyles}>
			{children}
		</p>
	);
};

const Code = ({ spaceTop = 5, spaceBottom = 20, children }) => {
	const customStyles = {
		display: 'block',
		margin: 0,
		marginTop: spaceTop + 'px',
		marginBottom: spaceBottom + 'px',
		padding: 5 + 'px ' + 10 + 'px',
	};

	return <code style={customStyles}>{children}</code>;
};

const Section = ({
	title,
	description,
	code,
	code2,
	isDefault = false,
	isLast = false,
	children,
}) => {
	return (
		<>
			{title && '' !== title && (
				<Title>
					{title}
					{isDefault && (
						<span
							className="sui-tag sui-tag-sm sui-tag-yellow"
							style={{ marginLeft: 10 + 'px' }}
							aria-hidden="true"
						>
							Default
						</span>
					)}
				</Title>
			)}
			{description && '' !== description && <Description>{description}</Description>}
			{code && '' !== code && (
				<Code {...(code2 && '' !== code2 && { spaceBottom: 5 })}>{code}</Code>
			)}
			{code2 && '' !== code2 && <Code>{code2}</Code>}
			{children}
			{!isLast && <hr />}
		</>
	);
};

export const position = (args) => {
	return (
		<>
			<Section
				title="Inline"
				description="By default, the post image is placed at the left of the post title."
				isDefault={true}
			>
				<div style={{ width: '100%', maxWidth: '300px' }}>
					<Post {...args} />
				</div>
			</Section>

			<Section
				title="Banner"
				description='When using the "banner" argument it places the post image on top of the post title.'
				isLast={true}
			>
				<div style={{ width: '100%', maxWidth: '300px' }}>
					<Post {...args} banner={true} />
				</div>
			</Section>
		</>
	);
};
position.storyName = 'Image Position';
position.args = {
	title: 'Post Title',
	image: demoImage,
	excerpt:
		'<p>Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.</p>',
};
