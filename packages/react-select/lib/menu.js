import React, { useRef, useEffect } from "react";

const Menu = (props) => {
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      event.target.tagName !== "TEXTAREA"
    ) {
      props.setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  function handleLiClick(e) {
    props.setItemList((prev) => {
      return prev.filter((item) => {
        if (item.key !== parseInt(e.target.id)) {
          return true;
        }
      });
    });

    let clickedObject = e.target.innerText;
    let clickedObjectKey = parseInt(e.target.id);
    props.setClickedItems((prev) => {
      return [...prev, { item: clickedObject, key: clickedObjectKey }];
    });

    props.txtarea.current.focus();
    props.txtarea.current.value = "";
    props.setInput("");
  }

  function handleHover(e) {
    e.target.className =
      "select2-results__option select2-results__option--selectable select2-results__option--highlighted";
  }
  function handleOut(e) {
    e.target.className =
      "select2-results__option select2-results__option--selectable";
  }

  return (
    <div
      ref={ref}
      style={{ width: "100%", margin: "0px", position: "absolute" }}
    >
      {props.menuVisible && (
        <span className="select2-container sui-select sui-select-theme--search sui-select-dropdown-container--open select2-container--open">
          <span
            className="sui-select-dropdown sui-select-dropdown--below"
            dir="ltr"
          >
            <span className="select2-results">
              <ul
                className="select2-results__options"
                role="listbox"
                aria-multiselectable="true"
                id="select2-select-smart-default-results"
                aria-expanded="true"
                aria-hidden="false"
              >
                {props.itemList.length === 0 ? (
                  <li
                    className="select2-results__option select2-results__option--selectable"
                    role="option"
                    aria-selected="false"
                  >
                    No items available
                  </li>
                ) : (
                  props.itemList.map((item) => {
                    return (
                      <li
                        className="select2-results__option select2-results__option--selectable"
                        role="option"
                        aria-selected="false"
                        onClick={handleLiClick}
                        onMouseOver={handleHover}
                        onMouseOut={handleOut}
                        key={item.key}
                        id={item.key}
                      >
                        {item.item}
                      </li>
                    );
                  })
                )}
              </ul>
            </span>
          </span>
        </span>
      )}
    </div>
  );
};

export { Menu };
