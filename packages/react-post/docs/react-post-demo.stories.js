import React from 'react';
import { Post } from '../lib/react-post';

import demoImage from './images/demo.png';

export default {
	title: 'Components/Post',
	component: Post,
	parameters: {
		notes: {
			disable: true,
		},
	},
};

export const demo = args => {
	return (
		<div style={ { width: '100%', maxWidth: '300px' } }>
			<Post {...args} />
		</div>
	);
};
demo.storyName = 'Demo';
demo.args = {
	title: 'Post Title',
	image: demoImage,
	excerpt: '<p>Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.</p>',
	time: '5',
	banner: false,
};
demo.argTypes = {
	title: {
		type: {
			required: true,
		},
		description: 'This adds a title for the post component and is a required property to include.',
		table: {
			type: { summary: 'string' },
		},
		control: {
			type: 'text',
		},
	},
	image: {
		type: {
			required: true,
		},
		description: 'This adds an image to the post component and is a required property to include.',
		table: {
			type: { summary: 'string' },
		},
		control: {
			type: 'text',
		},
	},
	excerpt: {
		description: 'Use this property to load an extract of the post. It does not matter how long it is, by default it will be shorten to fit design requirements.',
		table: {
			type: { summary: 'string' },
		},
	},
	time: {
		description: 'Some posts may contain a minimum reading time recommendation.',
		table: {
			type: { summary: 'number' },
		},
		control: {
			type: 'number',
		},
	},
	banner: {
		description: 'Switch the image position from left to top of the content.',
		table: {
			type: {
				summary: 'true | false'
			},
		},
		control: {
			type: 'boolean',
		},
	},
};