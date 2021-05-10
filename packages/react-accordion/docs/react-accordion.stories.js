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
          size: "auto",
          content: (
            <div>
              <h1>Hello</h1>
            </div>
          ),
        },
        {
          size: 2,
          content: (
            <div>
              <h1>Hello 2</h1>
            </div>
          ),
        },
        {
          size: 3,
          content: (
            <div>
              <h1>Hello 3</h1>
            </div>
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
          size: 2,
          content: (
            <div>
              <h2>Some Text</h2>
            </div>
          ),
        },
        {
          size: 3,
          content: (
            <button role="button" class="sui-button sui-button-lg">
              Button
            </button>
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
          size: 3,
          content: (
            <div>
              <span class="sui-icon-check" aria-hidden="true"></span>
              <span class="sui-icon-warning-alert" aria-hidden="true"></span>
              <span class="sui-icon-info" aria-hidden="true"></span>
            </div>
          ),
        },

        {
          size: 4,
          content: (
            <div>
              <span class="sui-icon-unlock" aria-hidden="true"></span>
              <span class="sui-icon-warning-alert" aria-hidden="true"></span>
              <span class="sui-icon-info" aria-hidden="true"></span>
              <span class="sui-icon-key" aria-hidden="true"></span>
              <span class="sui-icon-unlock" aria-hidden="true"></span>
            </div>
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
