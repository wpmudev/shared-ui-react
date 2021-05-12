# @wpmudev/react-accordion

## Usage

`Accordion` component works like a wrapper which wraps around `AccordionItem` component or an array of `AccordionItems` components. `Accordion` component takes as a prop an array of objects where each object represents a single accordion item. A single accordion item consists of two parts, `header` and `children`.

### Color

This property takes sui styling as a key and can be left out if. Example: `color: "sui-error",`

### Header

This property is an array of objects where each object is a single header item. An object inside of a header array works with several properties:

#### `title:` Title is a boolean property which controls whether or not the item is going to have "sui-accordion-item-title" in its class name. This property can be left out.

#### `toggle:text` Toggle property displays a toggle slider on an accordion item's header where it's key is the text that is going to appear next to the slider. This property can be left out if the toggle button is not necessary.

#### `size:"auto"` Size variable controls what is the size of the header item going to be and it can have "auto" key or a number key where "auto" makes the item auto adjust its size and a number key makes the item adjust its size based on a 12 grid. This property can be left out, where default value is "auto".

#### `content: <><h1>content</h1></>` This is the property that takes a JSX element as a property and it is the main property of the object since it stores the content that will be placed inside the header item.

### Header

This is a property that stores the children item or items of the accordion item. It takes JSX elements and shows them when the accordion item is expanded.

## Example of usage:

```
<Accordion>
        {items.map((item, key) => (
          <AccordionItem key={key} {...item} />
        ))}
</Accordion>
```

```
items: [
    {color: "sui-error",
      header: [{
          title: true,
          size: "4",
          content: (
            <>
              <span aria-hidden="true" className="sui-icon-warning-alert sui-error"></span>
              Item
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
    }]
```
