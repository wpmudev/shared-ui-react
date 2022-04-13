import React from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Accordion, AccordionItem } from '../lib/react-accordion';

export default {
    title: 'Containers/Accordion'
}

const Template = ({ children, ...props }) => {
    return (
        <Box>

            <Accordion { ...props }>

                { children.map( ( child, key ) => (
                    <AccordionItem key={ key } { ...child } />
                ) ) }

            </Accordion>

        </Box>
    );
}

export const primary = Template.bind({});
primary.storyName = 'Default';
primary.args = {
    children: [
        {
            title: 'Accordion Item 1',
            icon: 'forminator',
            image: 'https://i.postimg.cc/j57qvw0V/Tu7j65-LQ-400x400.png',
            children: (
                <Box>
                    <BoxBody>
                        <p>Accordion Item 1 – Hello world!</p>
                    </BoxBody>
                </Box>
            )
        },
        {
            title: 'Accordion Item 2',
            icon: 'hustle',
            image: 'https://i.postimg.cc/j57qvw0V/Tu7j65-LQ-400x400.png',
            children: (
                <Box>
                    <BoxBody>
                        <p>Accordion Item 2 – Hello world!</p>
                    </BoxBody>
                </Box>
            )
        },
        {
            title: 'Accordion Item 3',
            icon: 'hummingbird',
            image: 'https://i.postimg.cc/j57qvw0V/Tu7j65-LQ-400x400.png',
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