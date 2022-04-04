import React, { useState, useEffect } from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Accordion, AccordionBlocks, AccordionItemHeader, AccordionItemBody } from '../lib/react-accordion';

import { Dropdown } from '@wpmudev/react-dropdown';
import { Button } from '@wpmudev/react-button';
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

import { chartData, chartDataDraft, chartOptions } from './demo-data';

Chart.register(...registerables);

export default {
    title: 'Containers/Accordion/Blocks'
}

const Template = ({ children, ...props }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);
    
    const toggle = e => {
		if (
			'sui-dropdown' !== e.target.className ||
            'sui-button-icon undefined' !== e.target.className ||
            'sui-icon-widget-settings-config' !== e.target.className
		) {
			setIsOpen(!isOpen);
            setIsLoading(!isOpen);
		}
	};

    let clazz = !isOpen
			? 'sui-accordion-item'
			: 'sui-accordion-item sui-accordion-item--open';
    
    return (
        <Box>

            <AccordionBlocks { ...props }>

                { children.map( ( child, key ) => (
                    <div className={clazz} key={ key }>
                        <AccordionItemHeader
                            title={ child.title }
                            trimmed={ child.trimmed }
                            tag={ child.tag }
                            lastDate={ child.lastDate }
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
                            <>
                                <ul className={ `sui-accordion-item-data ${isLoading && ('sui-onload')}` }>

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

                                <div className={ `sui-chartjs sui-chartjs-animated ${!isLoading && ('sui-chartjs-loaded')}` }>

                                    <div className="sui-chartjs-message sui-chartjs-message--loading">
                                        <p><span className="sui-icon-loader sui-loading" aria-hidden="true"></span> Loading data...</p>
                                    </div>

                                    <div className="sui-chartjs-message">
                                        <p><span className="sui-icon-info" aria-hidden="true"></span> This form is in draft state, so we’ve paused collecting data until you publish it live.</p>
                                    </div>

                                    <div className="sui-chartjs-canvas" aria-hidden="true">
                                        <Line data={ chartDataDraft } options={ chartOptions } fill="start" />
                                    </div>

                                </div>
                            </>
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
            lastDate: "March 11, 2017 @ 10:18am",
            children: (
                <>
                    <ul class="sui-accordion-item-data">

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

                    <div class="sui-chartjs sui-chartjs-animated">

                        <div class="sui-chartjs-message sui-chartjs-message--loading">
                            <p><span class="sui-icon-loader sui-loading" aria-hidden="true"></span> Loading data...</p>
                        </div>

                        <div class="sui-chartjs-canvas">
                            <Line data={ chartData } options={ chartOptions } fill="start" />
                        </div>

                    </div>
			    </>
            )
        }
    ]
};

export const secondary = Template.bind({});
secondary.storyName = 'New Blocks';
secondary.args = {
    children: [
        {
            title: 'This title can be cut-off (trim). Resize to test.',
            tag: "Draft",
            trimmed: true,
            lastDate: "March 11, 2017 @ 10:18am",
            children: (
                <>
                    <ul className="sui-accordion-item-data sui-onload">

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

                    <div className="sui-chartjs sui-chartjs-animated">

                        <div className="sui-chartjs-message sui-chartjs-message--loading">
                            <p><span className="sui-icon-loader sui-loading" aria-hidden="true"></span> Loading data...</p>
                        </div>

                        <div className="sui-chartjs-message">
                            <p><span className="sui-icon-info" aria-hidden="true"></span> This form is in draft state, so we’ve paused collecting data until you publish it live.</p>
                        </div>

                        <div className="sui-chartjs-canvas" aria-hidden="true">
                            <Line data={ chartDataDraft } options={ chartOptions } fill="start" />
                        </div>

                    </div>
			    </>
            )
        }
    ]
};

secondary.argTypes = {};