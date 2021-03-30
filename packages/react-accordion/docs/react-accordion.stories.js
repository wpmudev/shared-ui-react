import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Accordion, AccordionItem } from '../lib/react-accordion';

export default {
    title: 'Containers/Accordion'
}

const Template = ({ head, items, ...props }) => {
    return (
        <Box>

            <Accordion { ...props }>

                { items.map( ( item, key ) => (
                    <AccordionItem key={ key } { ...item } />
                ) ) }

            </Accordion>

        </Box>
    );
}

export const primary = Template.bind({});
primary.storyName = 'Default';
primary.args = {
    items: [
        {
            name: 'Accordion Item 1',
            icon: 'forminator',
            image: 'https://pbs.twimg.com/profile_images/671394755951984640/GSkxXgDp_400x400.png',
            children: (
                <Box>
                    <BoxBody>
                        <p>Accordion Item 1 – Hello world!</p>
                    </BoxBody>
                </Box>
            )
        },
        {
            name: 'Accordion Item 2',
            icon: 'hustle',
            image: 'https://pbs.twimg.com/profile_images/671394755951984640/GSkxXgDp_400x400.png',
            children: (
                <Box>
                    <BoxBody>
                        <p>Accordion Item 2 – Hello world!</p>
                    </BoxBody>
                </Box>
            )
        },
        {
            name: 'Accordion Item 3',
            icon: 'hummingbird',
            image: 'https://pbs.twimg.com/profile_images/671394755951984640/GSkxXgDp_400x400.png',
            children: (
                <Box>
                    <BoxBody>
                        <p>Accordion Item 3 – Hello world!</p>
                    </BoxBody>
                </Box>
            )
        }
    ]
};
primary.argTypes = {};