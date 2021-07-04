import React, { useState, useEffect, useRef } from 'react';
import { Menu } from './menu';

const Select = (props) => {
  let [itemList, setItemList] = useState(
    props.children.sort().map((item, key) => {
      return { item, key };
    })
  );
  let [originalItems, setOriginalItems] = useState(
    props.children.sort().map((item, key) => {
      return { item, key };
    })
  );
  let [clickedItems, setClickedItems] = useState([]);
  let [menuVisible, setMenuVisible] = useState(false);
  let [input, setInput] = useState('');
  let txtarea = useRef();

  function handleChange(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    setItemList(
      originalItems.filter((item) => {
        let lowercaseWord = item.item.toLowerCase();
        if (
          input.length == 0 &&
          !clickedItems.some((itm) => {
            let lowercase = itm.item.toLowerCase();
            return lowercase.startsWith(lowercaseWord);
          })
        ) {
          return true;
        } else if (
          lowercaseWord.startsWith(input.toLowerCase()) &&
          (!clickedItems.some((itm) => {
            let lowercase = itm.item.toLowerCase();
            return lowercase.startsWith(input.toLowerCase());
          }) ||
            itemList.some(
              (it) => it.item.toLowerCase() === item.item.toLowerCase()
            ))
        ) {
          return true;
        }
      })
    );
  }, [input]);

  function handleRemove(e) {
    let type =
      e.target.tagName == 'SPAN'
        ? e.target.parentElement.parentElement.innerText
        : e.target.parentElement.innerText;
    setClickedItems((prev) => {
      return prev.filter((item) => {
        if (item.key === parseInt(e.target.parentElement.id)) {
          return false;
        }
        return true;
      });
    });

    setItemList((prev) => [
      ...prev,
      {
        item: type,
        key: parseInt(e.target.parentElement.id),
      },
    ]);
  }

  let selectedItems = clickedItems.map((item) => {
    return (
      <li className='select2-selection__choice' key={item.key} id={item.key}>
        <button
          type='button'
          className='select2-selection__choice__remove'
          tabIndex='-1'
          title='Remove item'
          aria-label='Remove item'
          onClick={handleRemove}
          key={item.key}
          id={item.key}
        >
          <span class='sui-icon-close' aria-hidden='true'></span>
        </button>
        <span className='select2-selection__choice__display'>{item.item}</span>
      </li>
    );
  });
  return (
    <div className='sui-form-field' style={{ position: 'relative' }}>
      <label className='sui-label'>{props.label}</label>

      <select
        id='select-smart-default'
        className='sui-select select2-hidden-accessible sui-screen-reader-text'
        data-theme='search'
        multiple=''
        data-select2-id='select2-data-select-smart-default'
        tabIndex='-1'
        aria-hidden='true'
      >
        {itemList.map((item) => {
          return <option key={item.key}>{item.item}</option>;
        })}
      </select>
      <span
        className='select2 select2-container sui-select sui-select-theme--search sui-select-dropdown-container--below select2-container--focus'
        dir='ltr'
        data-select2-id='select2-data-8-9vmd'
        style={{ width: 'auto' }}
      >
        <span className='selection'>
          <span
            className='select2-selection select2-selection--multiple'
            role='combobox'
            aria-haspopup='true'
            aria-expanded='false'
            tabIndex='-1'
            aria-disabled='false'
          >
            <ul
              className='select2-selection__rendered'
              id='select2-select-smart-default-container'
            >
              {selectedItems}
            </ul>
            <span className='select2-search select2-search--inline'>
              <textarea
                ref={txtarea}
                className='select2-search__field'
                type='search'
                tabIndex='0'
                autoCorrect='off'
                autoCapitalize='none'
                spellCheck='false'
                role='searchbox'
                aria-autocomplete='list'
                autoComplete='off'
                aria-label='Search'
                aria-describedby='select2-select-smart-default-container'
                placeholder=''
                style={{ width: '0.75em' }}
                onFocus={() => setMenuVisible(true)}
                onChange={handleChange}
              ></textarea>
            </span>
            <span className='sui-icon-chevron-down' aria-hidden='true'></span>
          </span>
        </span>
        <span className='dropdown-wrapper' aria-hidden='true'></span>
      </span>
      <Menu
        setInput={setInput}
        txtarea={txtarea}
        itemList={itemList}
        setClickedItems={setClickedItems}
        setItemList={setItemList}
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
      />
      <span
        role='alert'
        className='sui-error-message sui-hidden'
        hidden=''
      ></span>
      <span className='sui-description'>{props.desc}</span>
    </div>
  );
};

export { Select };
