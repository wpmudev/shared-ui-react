import React, { useState } from "react";

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
        onClick={(e) => toggle(e)}
      />

      <AccordionItemBody>{props.children}</AccordionItemBody>
    </div>
  );
};

const AccordionItemHeader = (props) => {
  let toggleBtn = (text) => {
    return (
      <div
        className="sui-accordion-item-title sui-accordion-col-auto"
        style={{
          display: "flex",
          minWidth: "6em",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <label
          for="flexbox-accordion-sample-item-3"
          className="sui-toggle sui-accordion-item-action"
        >
          <input
            type="checkbox"
            id="flexbox-accordion-sample-item-3"
            onClick={() =>
              props.setToggleOffOn((prev) => {
                return !prev;
              })
            }
          />
          <span aria-hidden="true" className="sui-toggle-slider"></span>
          <span className="sui-screen-reader-text">Toggle</span>
        </label>
        {text}
      </div>
    );
  };

  let array = props.header.map((item, key) => {
    let size = !item.size
      ? "sui-accordion-col-auto"
      : "sui-accordion-col-" + item.size;

    let title = item.title ? "sui-accordion-item-title" : "";

    return (
      <div className={`${title} ${size}`} key={key}>
        {item.toggle ? toggleBtn(item.toggle) : null}
        {item.content}
      </div>
    );
  });

  return (
    <div className="sui-accordion-item-header" {...props}>
      {array}
    </div>
  );
};

const AccordionItemBody = (props) => {
  return <div className="sui-accordion-item-body">{props.children}</div>;
};

export { Accordion, AccordionItem, AccordionItemHeader, AccordionItemBody };
