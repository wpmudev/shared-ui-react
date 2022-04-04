import React, { useState, useEffect } from 'react';
import { Box, BoxBody } from '@wpmudev/react-box';
import { Accordion, AccordionItemHeader, AccordionItemBody } from '../lib/react-accordion';

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

            <Accordion { ...props }>

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
                            { child.chartTitles && (
                                <ul className={ `sui-accordion-item-data ${isLoading && ('sui-onload')}` }>
                                    {child.chartTitles}
                                </ul>
                            )}

                            <div className={ `sui-chartjs sui-chartjs-animated ${!isLoading && ('sui-chartjs-loaded')}` }>

                                <div className="sui-chartjs-message sui-chartjs-message--loading">
                                    <p><span className="sui-icon-loader sui-loading"></span> Loading data...</p>
                                </div>
                                
                                {child.tag !== 'Published' && child.infoMessage && ( 
                                    <div className={`sui-chartjs-message ${ child.chartData ? 'sui-chartjs-message' : '' }`}>
                                        <p><span className="sui-icon-info"></span> {child.infoMessage}</p>
                                    </div>
                                )}

                                <div className="sui-chartjs-canvas">
                                    {child.chartData && (
                                        <Line data={ child.chartData } options={ child.chartOptions } fill="start" />
                                    )}
                                </div>

                            </div>
                        </AccordionItemBody>
                    </div>
                ) ) }

            </Accordion>

        </Box>
    );
}

export const primary = Template.bind({});
primary.storyName = 'Published';
primary.args = {
    classes: "sui-accordion-block",
    children: [
        {
            title: 'This title can be cut-off (trim). Resize to test.',
            tag: "Published",
            trimmed: true,
            lastDate: "March 11, 2017 @ 10:18am",
            chartTitles: (
                <>
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
                </>
            ),
            chartData: chartData,
            chartOptions: chartOptions,
        }
    ]
};

export const secondary = Template.bind({});
secondary.storyName = 'Draft';
secondary.args = {
    classes: "sui-accordion-block",
    children: [
        {
            title: 'Title',
            tag: "Draft",
            trimmed: true,
            lastDate: "March 12, 2018 @ 10:18am",
            infoMessage: "This form is in draft state, so we’ve paused collecting data until you publish it live.",
            chartTitles: (
                <>
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
			    </>
            ),
            chartData: chartDataDraft,
            chartOptions: chartOptions,
        }
    ]
};

secondary.argTypes = {};

export const ternary = Template.bind({});
ternary.storyName = 'Empty';
ternary.args = {
    classes: "sui-accordion-block",
    children: [
        {
            title: 'Title',
            tag: "Draft",
            trimmed: true,
            lastDate: "March 12, 2018 @ 10:18am",
            infoMessage: " This form is still in draft state. You can test your form, but we won't start collecting conversion data until you publish it live.",
            chartTitles: (
                <>
                    <li data-col="large">
                        <strong>Last Submission</strong>
                        <span>Never</span>
                    </li>

                    <li>
                        <strong>Views</strong>
                        <span>0</span>
                    </li>

                    <li>
                        <strong>Submissions</strong>
                        <a href="">0</a>
                    </li>

                    <li>
                        <strong>Conversion Rate</strong>
                        <span>0%</span>
                    </li>

                    <li>
                        <strong>Fields</strong>
                        <span>7</span>
                    </li>
			    </>
            )
        }
    ]
};

ternary.argTypes = {};