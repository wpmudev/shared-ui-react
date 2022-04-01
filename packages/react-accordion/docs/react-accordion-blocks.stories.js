import React, { useState } from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Accordion, AccordionBlocks, AccordionItemHeader, AccordionItemBody } from '../lib/react-accordion';

import { Dropdown } from '@wpmudev/react-dropdown';
import { Button } from '@wpmudev/react-button';
// import { ButtonIcon } from '@wpmudev/react-button-icon';

export default {
    title: 'Containers/Accordion/Blocks'
}

const Template = ({ children, ...props }) => {
    const [isOpen, setOpen] = useState(false);

    const toggle = e => {
		if (
			'sui-dropdown' !== e.target.className ||
            'sui-button-icon undefined' !== e.target.className ||
            'sui-icon-widget-settings-config' !== e.target.className
		) {
			setOpen(!isOpen);
		}
	};
    
    return (
        <Box>

            <AccordionBlocks { ...props }>

                { children.map( ( child, key ) => (
                    <div className="sui-accordion-item" key={ key }>
                        <AccordionItemHeader
                            title={ child.title }
                            trimmed={ child.trimmed }
                            tag={ child.tag }
                            created={ child.created }
                            { ... null !== child.image && '' !== child.image && {
                                image: child.image
                            } }
                            onClick={ e => toggle(e) }
                        >
                            <div>
                                <Button design="ghost" icon="pencil" label="Edit"/>
                                <Dropdown position="right">
                                    <div icon="eye" name="Preview" />
                                    <div icon="community-people" name="View" />
                                    <div icon="page-multiple" name="Duplicate" />
                                    <div icon="cloud-migration" name="Export" />
                                    <div icon="trash" name="Delete" />
                                </Dropdown>
                            </div>
                        </AccordionItemHeader>

                        <AccordionItemBody>
                            <p>Text</p>
                        </AccordionItemBody>
                    </div>
                ) ) }

            </AccordionBlocks>

        </Box>
    );
}

export const primary = Template.bind({});
primary.storyName = 'Blocks';
primary.args = {
    children: [
        {
            title: 'This title can be cut-off (trim). Resize to test.',
            tag: "Published",
            trimmed: true,
            type: "blocks",
            created: "March 11, 2017 @ 10:18am",
            children: (
                <>
                    <ul className="sui-accordion-item-data">

                        <li data-col="large">
                            <strong>Last Submission</strong>
                            <span>March 11, 2017 @ 10:18am</span>
                        </li>

                        <li>
                            <strong>Views</strong>
                            <span>10000</span>
                        </li>

                        <li>
                            <strong>Submissions</strong>
                            <a href="">1000</a>
                        </li>

                        <li>
                            <strong>Conversion Rate</strong>
                            <span>10%</span>
                        </li>

                        <li>
                            <strong>Fields</strong>
                            <span>4</span>
                        </li>

                    </ul>

                    <div className="sui-chartjs sui-chartjs-animated sui-chartjs-loaded">

                        <div className="sui-chartjs-message sui-chartjs-message--loading">
                            <p><span className="sui-icon-loader sui-loading" aria-hidden="true"></span> Loading data...</p>
                        </div>

                        <div className="sui-chartjs-message">
                            <p><span className="sui-icon-info" aria-hidden="true"></span> This form is in draft state, so we’ve paused collecting data until you publish it live.</p>
                        </div>

                        <div className="sui-chartjs-canvas" aria-hidden="true"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                            <canvas id="demo-accordion-chart-drafted" height="340" width="1838" className="chartjs-render-monitor"></canvas>
                        </div>

                    </div>
			    </>
            )
        }
    ]
};
primary.argTypes = {};