import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ButtonIcon } from "@wpmudev/react-button-icon";

const ItemImage = styled.span`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Accordion = (props) => {
  return <div className="sui-accordion">{props.children}</div>;
};

const AccordionItem = (props) => {
  let [open, setOpen] = useState(false);

  function toggle(e) {
    if ("sui-dropdown" !== e.target.className) {
      setOpen(!open);
    }
  }

  const clazz = !open
    ? "sui-accordion-item"
    : "sui-accordion-item sui-accordion-item--open";

  const color = props.color ? props.color : "";

  return (
    <div className={`${clazz}  ${color}`} {...props}>
      <AccordionItemHeader
        state={open ? "true" : "false"}
        header={props.header}
        setToggleOffOn={setToggleOffOn}
        onClick={(e) => toggle(e)}
      />

      <AccordionItemBody>{props.children}</AccordionItemBody>
    </div>
  );
};

const AccordionItemHeader = (props) => {
  let [openHeader, setOpenHeader] = useState(false);

  useEffect(() => {
    setOpenHeader(props.state);
  });

  const indicator = (
    <ButtonIcon
      icon="chevron-down"
      label={openHeader ? "Close section" : "Open section"}
      className="sui-button-icon sui-accordion-open-indicator"
    />
  );

  const actions = (
    <div className="sui-accordion-col-auto">
      {props.children}
      {indicator}
    </div>
  );

  let array = props.header.map((item,key) => {
    let size = !props.header.size
      ? "sui-accordion-col-auto"
      : "sui-accordion-col-" + props.header.size;

    let title = item.title ? "sui-accordion-item-title" : "";

    return <div className={`${title} ${size}` key={key}>{item.content}</div>;
  });

  return (
    <div className="sui-accordion-item-header" {...props}>
      {array}
      {actions}
    </div>
  );
};

const AccordionItemBody = (props) => {
  return <div className="sui-accordion-item-body">{props.children}</div>;
};

export { Accordion, AccordionItem, AccordionItemHeader, AccordionItemBody };
