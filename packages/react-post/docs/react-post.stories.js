import React from 'react';
import { Post } from '../lib/react-post';

export default {
    title: 'Components/Post',
    component: Post
}

const Template = args => {
    return (
        <div style={ { width: '100%', maxWidth: '300px' } }>
            <Post {...args} />
        </div>
    );
};

export const primary = Template.bind({});
primary.storyName = 'Side Image';
primary.args = {
    // image: 'https://www.wpexplorer.com/wp-content/uploads/amazing_fb_ad.png',
    title: 'Post Title',
    excerpt: '<p>Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.</p>',
    time: '5',
};
primary.argTypes = {};

export const secondary = Template.bind({});
secondary.storyName = 'Banner Image';
secondary.args = {
    ...primary.args,
    banner: true
};
secondary.argTypes = {};
