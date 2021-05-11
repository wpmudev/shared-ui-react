import React from "react";
import { Box, BoxBody } from "@wpmudev/react-box";
import { Accordion, AccordionItem } from "../lib/react-accordion";

export default {
  title: "Containers/Accordion",
};

const Template = ({ children, ...props }) => {
  return (
    <Box>
      <Accordion {...props}>
        {children.map((child, key) => (
          <AccordionItem key={key} {...child} />
        ))}
      </Accordion>
    </Box>
  );
};

export const primary = Template.bind({});
primary.storyName = "Default";
primary.args = {
  children: [
    {
      color: "sui-error",
      header: [
        {
          title: true,
          size: "4",
          content: (
            <>
              <span
                aria-hidden="true"
                className="sui-icon-warning-alert sui-error"
              ></span>
              Item
            </>
          ),
        },
        {
          size: "4",
          content: (
            <div className="sui-circle-score sui-grade-f loaded" data-score="8">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle stroke-width="16" cx="50" cy="50" r="42"></circle>
                <circle
                  stroke-width="16"
                  cx="50"
                  cy="50"
                  r="42"
                  stroke-dasharray="0,2103.150263212341"
                  style={{
                    animation: "3s ease 0s 1 normal forwards running sui8",
                  }}
                ></circle>
              </svg>
              <span className="sui-circle-score-label">8</span>
            </div>
          ),
        },
        {
          size: "2",
          content: (
            <>
              More information
              <button className="sui-button-icon sui-button-icon sui-accordion-open-indicator">
                <span
                  className="sui-icon-chevron-down"
                  aria-hidden="true"
                ></span>
                <span className="sui-screen-reader-text">Close section</span>
              </button>
            </>
          ),
        },
      ],
      children: (
        <Box>
          <BoxBody>
            <p>Accordion Item 1 – Hello world!</p>
          </BoxBody>
        </Box>
      ),
    },
    {
      color: "sui-success",
      header: [
        {
          size: "auto",
          toggle: <h3>Item</h3>,
          content: <></>,
        },
        {
          size: "auto",
          content: (
            <>
              <button className="sui-button-icon sui-button-icon sui-accordion-open-indicator">
                <span
                  className="sui-icon-chevron-down"
                  aria-hidden="true"
                ></span>
                <span className="sui-screen-reader-text">Close section</span>
              </button>
            </>
          ),
        },
      ],
      children: (
        <Box>
          <BoxBody>
            <p>Accordion Item 1 – Hello world!</p>
          </BoxBody>
        </Box>
      ),
    },
    {
      color: "sui-warning",
      header: [
        {
          title: true,
          size: 5,
          content: (
            <>
              Title
              <span className="sui-tag">Draft Title </span>
            </>
          ),
        },
        {
          size: 4,
          content: (
            <>
              <div className="sui-accordion-item-date">
                <strong>Last Submission</strong> March 11, 2017 @ 10:18am
              </div>
            </>
          ),
        },
        {
          size: 3,
          content: (
            <>
              <button className="sui-button sui-button-ghost sui-accordion-item-action">
                <span className="sui-icon-pencil" aria-hidden="true"></span>
                Edit
              </button>
              <div className="sui-dropdown sui-accordion-item-action">
                <button className="sui-button-icon sui-dropdown-anchor">
                  <span
                    className="sui-icon-widget-settings-config"
                    aria-hidden="true"
                  ></span>
                </button>
                <ul>
                  <li>
                    <a href="">
                      <span className="sui-icon-eye" aria-hidden="true"></span>
                      Preview
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span
                        className="sui-icon-community-people"
                        aria-hidden="true"
                      ></span>
                      View
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span
                        className="sui-icon-page-multiple"
                        aria-hidden="true"
                      ></span>
                      Duplicate
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span
                        className="sui-icon-cloud-migration"
                        aria-hidden="true"
                      ></span>
                      Export
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span
                        className="sui-icon-trash"
                        aria-hidden="true"
                      ></span>
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
              <button
                className="sui-button-icon sui-accordion-open-indicator"
                aria-label="Open Item"
              >
                <span
                  className="sui-icon-chevron-down"
                  aria-hidden="true"
                ></span>
              </button>
            </>
          ),
        },
      ],
      children: (
        <Box>
          <BoxBody>
            <p>Accordion Item 1 – Hello world!</p>
          </BoxBody>
        </Box>
      ),
    },
  ],
};
primary.argTypes = {};
