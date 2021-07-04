# @wpmudev/react-select


## Usage

Select componend wraps around the array of items that will be shown in the dropdown menu.
The componet has a built-in search mechanism that searches through the available items.
The component also takes two arguments: `label` and `desc`. <br/>
-label stores a text that will be displayed on the top of the select component<br/>
-desc stores a text that will be displayed at the bottom of the select component<br/>

HOW TO USE:

```

let arrayOfItems = ["One","Two","Three","Four","Five"]


<Select label="Numbers" desc="List of numbers">
    {arrayOfItems}
<Select />


```
