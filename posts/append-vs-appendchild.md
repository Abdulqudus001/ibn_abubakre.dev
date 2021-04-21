---
title: .append vs .appendChild
date: 2021-02-13T14:55:54.496Z
summary: This post covers the basic differences between the append and
  appendChild method, where, and when to use them.
tags:
  - HTML
  - JavaScript
  - Arrays
image: https://res.cloudinary.com/ibnabubakre/image/upload/v1613230866/Group_2_2.png
caption: append vs append child text written in cursive font on a yellow background
---
This is the first post in the **this vs that** series. A series aimed at comparing two often confusing terms, methods, objects, definition or anything frontend related.

append and appendChild are two popular methods used to add elements into the Document Object Model(DOM). They are often used interchangeably without much troubles, but if they are the same, then why not scrape one....Well they are only similar, but different. Here's how:

## .append()
This method is used to add an element in form of a Node object or a DOMString (basically means text). Here's how that would work.
```javascript
// Inserting a Node object
const parent = document.createElement('div');
const child = document.createElement('p');
parent.append(child);
// This appends the child element to the div element
// The div would then look like this <div><p></p></div>
```

```javascript
// Inserting a DOMString
const parent = document.createElement('div');
parent.append('Appending Text');
// The div would then look like this <div>Appending Text</div>
```

## .appendChild()
Similar to the **.append** method, this method is used to elements in the DOM, but in this case, only accepts a Node object.

```javascript
// Inserting a Node object
const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
// This appends the child element to the div element
// The div would then look like this <div><p></p></div>
```

```javascript
// Inserting a DOMString
const parent = document.createElement('div');
parent.appendChild('Appending Text');
// Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'
```

### Differences
1. `.append` accepts Node objects and DOMStrings while `.appendChild` accepts only Node objects

    ```javascript
    const parent = document.createElement('div');
    const child = document.createElement('p');
    // Appending Node Objects
    parent.append(child) // Works fine
    parent.appendChild(child) // Works fine
    // Appending DOMStrings
    parent.append('Hello world') // Works fine
    parent.appendChild('Hello world') // Throws error
    ```

2. `.append` does not have a return value while `.appendChild` returns the appended Node object

    ```javascript
    const parent = document.createElement('div');
    const child = document.createElement('p');
    const appendValue = parent.append(child);
    console.log(appendValue) // undefined
    const appendChildValue = parent.appendChild(child);
    console.log(appendChildValue) // <p><p>
    ```

3. `.append` allows you to add multiple items while `appendChild` allows only a single item

    ```javascript
    const parent = document.createElement('div');
    const child = document.createElement('p');
    const childTwo = document.createElement('p');
    parent.append(child, childTwo, 'Hello world'); // Works fine
    parent.appendChild(child, childTwo, 'Hello world');
    // Works fine, but adds the first element and ignores the rest
    ```

### Conclusion

In cases where you can use `.appendChild`, you can use `.append` but not vice versa.

That's all for now, if there are any terms that you need me to shed more light on, you can add them in the comments section or you can reach me on [twitter](twitter.com/ibn_abubakre)

