---
title: Document Fragments and why you should use them
date: 2021-02-24T21:20:37.088Z
summary: This post discuss document fragments, its pros, and how you can use
  them to improve your site performance
tags:
  - JavaScript
  - HTML
image: https://res.cloudinary.com/ibnabubakre/image/upload/v1614201900/1_bcZz-qb_DNpvrNNwQBhQmQ.jpg
---
A document fragment is a fragment of a Document Object Model (DOM) tree, a chunk of tree that's separated from the rest of the DOM.
Before going further, let's talk about browser reflow and how it affects performance.

According to the [google developers](https://developers.google.com/speed/docs/insights/browser-reflow), reflow is the name of the web browser process for re-calculating the positions and geometries
of elements in the document, for the purpose of re-rendering part or all of the document.

Browser reflow can be caused by resizing the window,
changing  the font, adding or removing a stylesheet, activation of a css psuedo-class, a script manipulating the DOM amongst others.
There are are several events other events that could trigger a browser reflow, but our main focus is the DOM manipulation from the script file.

Let's take for example the following data format gotten from [restcountries api](https://restcountries.eu/rest/v2/all) and we need to display each country, with its flag;

```javascript
const countries = [
  {
    name: "Afghanistan",
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
  },
  {
    name: "Åland Islands",
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
  },
  {
    name: "Albania",
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
  },
];
```

A simple approach to this would be:
 - loop over each element in the array
 - create a new element
 - append to an element in the DOM.

Here's how we would go about that in code.
```javascript
// Select the parent element
const parentElement = document.querySelector('.countries');
// Loop over the array of countries and create each element
countries.forEach(country => {
    // Create a new div element
	const countryCard = document.createElement('div');
    // Create a new image element
	const img = document.createElement('img');
    // Set the src attribute of the image to the flag value from the data
	img.src = country.flag;
    // Attach the image to the div we initially created
	countryCard.appendChild(img);
	// Attach the card to parent element
	parentElement.appendChild(countryCard);
});
```
Seems pretty simple and straightforward, and there seems to be nothing to worry about....if it's not broken, why fix it right?? 😃😃.

But under the hood, for every time we append the countryCard to the parentElement, we're causing a browser reflow. We might not notice any
glitch or drastic decline in performance in this case and that's because we only have three elements in the array, now imagine we had to the same thing for
all the countries and their individual states...you see where this is going?

Lucky for us, the browser provides a `DocumentFragment` object for us. As explained earlier, the document fragment is basically an interface
that represents a minimal document object [(MDN)](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment).

It allows us perform actions we would normally perform on the actual DOM
but without the usual side effects, so we can easily create and append new elements without worrying about the numerous browser reflows that could
occur, and after we're done, we attach the fragment back into the DOM, hence only causing a single browser reflow as opposed to the hundreds or thousands of reflows we could have otherwise caused if we didn't use the fragment.

Now let's repeat the same thing we did above, but this time using the document fragment. The first thing we need to do is create the fragment.
That can be done using the `DocumentFragment` constructor or the `createDocumentFragment` method.

```javascript
let fragment = new DocumentFragment();
// or let fragment = document.createDocumentFragment();
const parentElement = document.querySelector('.countries');
// Loop over the array of countries and create each element
countries.forEach(country => {
    // Create a new div element
	const countryCard = document.createElement('div');
    // Create a new image element
	const img = document.createElement('img');
    // Set the src attribute of the image to the flag value from the data
	img.src = country.flag;
    // Attach the image to the div we initially created
        countryCard.appendChild(img);
	// Append card to fragment element
	fragment.appendChild(countryCard);
});
// After iterating, we then insert fragment contents into the DOM
parentElement.appendChild(fragment);
```

Something really interesting about the `DocumentFragment` is that the contents of the fragment are actually moved into the DOM, leaving behind
an empty `DocumentFragment`.
So you don't really have to worry about memory consumption....pretty awesome right? :wink::wink:

The document fragment is just one of many ways we could improve browser performance. There are several other techniques we could use to improve
performance of our web application