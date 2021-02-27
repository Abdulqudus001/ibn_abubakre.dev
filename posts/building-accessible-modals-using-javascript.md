---
title: Building Accessible Modals Using JavaScript
date: 2021-02-25T15:30:35.335Z
summary: Modals or dialogs are important building blocks in modern web
  applications. This post talks about how to improve accessibility of the modals
  while taking advantage of JavaScript
tags:
  - HTML
  - CSS
  - JavaScript
image: https://res.cloudinary.com/ibnabubakre/image/upload/v1614293159/Group_6_2.png
---
According to Tim Berners-Lee, *The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.*. As time passed, several changes have been made to the web, and combined with bad practices, bad design or testing makes the web lose some of its universality.

## Web Accessibility

Accessibility means being easily reached or used. Web accessibility means that websites, tools, technologies relating to the web are built in a way that can easily be accessed by people regardless of their disabilities.

This article focuses on how to build an accessible modal and assumes you already have an idea of what accessibility is. If you don't, you can take a look at this [article](https://developers.google.com/web/fundamentals/accessibility) by google developers.

## What is a modal

A modal is a web page element that displays in front of a page and disables all other content, until the user is done interacting with it.

| ![Image of a modal with title, content and two actions buttons](https://res.cloudinary.com/ibnabubakre/image/upload/v1614286939/modal.png) |
| ------------------------------------------------------------------------------------------------------------------------------------------ |
| *Sample modal with action buttons by [Abubakar Saeed](https://twitter.com/AbubakerSaeed96)*                                                |

For a user without any disability, it's pretty easy to use the modal, simply move your cursor over to the modal, and begin interacting with it. But what happens when the user needs to make use of assistive technologies to use your application?

## Accessible Modals

To make an accessible modal, one needs to make sure the focus is moved to the modal once opened, and the user is not able to interact with other elements on the page until the modal is closed.

### Let's get started

First, let's get our modal structure. Note the `role` and `aria-modal` attribute

```html
<section class="accessible-modal">
  <button class="open-modal-button">Click here to open modal</button>

  <div class="modal" role="dialog" aria-modal="true">
    <div class="modal-content">
      <button class="close-modal-button" aria-label="Close modal">
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
      <h1>Hello, the modal has opened!</h1>

      <button class="submit-modal-button">
        Submit &rarr;
      </button>
    </div>
  </div>
</section>
```

and our styles

```css
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.5);
}

@keyframes open {
  from {
    transform: scale(0)
  }
  
  50% {
    transform: scale(1.2)
  }
  
  to {
    transform: scale(1);
  }
}

.modal--open {
  visibility: visible;
  opacity: 1;
  pointer-events: all;
  animation: open .5s linear;
}

.modal-content {
  width: 400px;
  max-width: 100%;
  padding: 50px 20px;
  background: linear-gradient(to right, rgb(36, 51, 66), rgb(54, 45, 83));
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFF;
}

.modal-content button {
  transition: background-color .2s ease;
}

.modal-content button:hover {
  background-color: #0d80f2;
  border: none;
}

.close-modal-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #FFF;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #FFF;
  background-color: transparent;
  cursor: pointer;
}

.submit-modal-button {
  color: #FFF;
  border: 1px solid #FFF;
  border-radius: 50px;
  margin: 20px 0 0;
  min-height: 50px;
  min-width: 150px;
  background-color: transparent;
}
```

This is pretty much straightforward. We have a modal which is hidden by default, now we have to make the modal visible when the button is clicked. So let's get our hands dirty with some JavaScript code.

The first thing we need to do is open the modal when the open modal button is clicked.

```javascript
// Use querySelector to select the button
const openModalButton = document.querySelector('.open-modal-button');
// Use querySelector to select the modal
const modal = document.querySelector('.modal');
// Add a click event listener to the button
openModalButton.addEventListener('click', () => {
  modal.classList.add('modal--open');
});
```

So that works okay. Next we want to trap the focus within the modal, such that using the `tab` or `shift + tab` key won't take the focus away from the modal. To do that, we would have to save the last active element before the modal was opened. This would allow us have an element to return focus to when the modal is closed. 

Let's modify our code a bit to accommodate that.

```javascript
// Create a variable that stores the last active element
let previousActiveElement = null;
// Use querySelector to select the close and submit button
const closeModalButton = document.querySelector('.close-modal-button');
const submitButton = document.querySelector('.submit-modal-button');
const openModalButton = document.querySelector('.open-modal-button');
const modal = document.querySelector('.modal');

// Create function to help toggle modal visibility
const toggleModal = () => {
  modal.classList.toggle('modal--open');
}

openModalButton.addEventListener('click', () => {
  // Save the current focused element before the modal is opened
  previousActiveElement = document.activeElement;
  toggleModal();
});
```

After that, we would then get the first and last focusable element in our modal so we can trap the focus within the modal. Then we focus on the first focusable element in the modal (in this case, our close button). Let's create functions to help us achieve that.

```javascript
let previousActiveElement = null;
const closeModalButton = document.querySelector('.close-modal-button');
const submitButton = document.querySelector('.submit-modal-button');
const openModalButton = document.querySelector('.open-modal-button');
const modal = document.querySelector('.modal');

const toggleModal = () => {
  modal.classList.toggle('modal--open');
}

// Get all focusable elements within the modal
const getFocusableElements = () => {
  /**
   * I'm selecting button in this case because the only focusable
   * elements in the modal are buttons
   */
  const buttons = modal.querySelectorAll('button');
  return [...buttons];
}

// Get the first focusable element within the modal
const firstFocusableElement = () => {
  const focusableElements = getFocusableElements();
  return focusableElements[0];
}

openModalButton.addEventListener('click', () => {
  previousActiveElement = document.activeElement;
  toggleModal();
  // Focus on the first focusable element in the modal
  firstFocusableElement().focus();
});
```

The next thing we want to do is listen to the `tab` or `shift + tab` keydown event to prevent the focus from leaving the modal.

```javascript
let previousActiveElement = null;
const closeModalButton = document.querySelector('.close-modal-button');
const submitButton = document.querySelector('.submit-modal-button');
const openModalButton = document.querySelector('.open-modal-button');
const modal = document.querySelector('.modal');

const toggleModal = () => {
  modal.classList.toggle('modal--open');
}

const getFocusableElements = () => {
  const buttons = modal.querySelectorAll('button');
  return [...buttons];
}

const firstFocusableElement = () => {
  const focusableElements = getFocusableElements();
  return focusableElements[0];
}

const lastFocusableElement = () => {
  const focusableElements = getFocusableElements();
  const length = focusableElements.length;
  return focusableElements[length - 1];
}

openModalButton.addEventListener('click', () => {
  previousActiveElement = document.activeElement;
  toggleModal();
  firstFocusableElement().focus();
});

const handleKeyDown = (e) => {
  const key = e.keyCode || e.which
  // keyCode for tab is 9
  if (key === 9) {
  // Check if the shift key is pressed
    if (e.shiftKey) {
      /**
       * Check if the current active element is the first
       * focusable element in the modal
       */
      if (document.activeElement === firstFocusableElement()) {
        e.preventDefault();
        // Move focus to the last focusable in the modal
        lastFocusableElement().focus();
      }
    } else {
      /**
       * Check if the current active element is the last
       * focusable element in the modal
       */
      if (document.activeElement === lastFocusableElement()) {
        e.preventDefault();
        // Move focus to the first focusable element in the modal
        firstFocusableElement().focus();
      }
    }
  }
}

modal.addEventListener('keydown', handleKeyDown);
```

This essentially completes our "*cage*". When the `tab` key is pressed and the focus is already on the last focusable element in the modal, we prevent the default behavior (which is to focus on the next focusable element outside the modal) using `e.preventDefault()` and then move the focus back to the first focusable element. The same thing happens when the `shift + tab` key is pressed.

We're almost there, we're just left with closing the modal. We could close the modal using the `esc` key, or when the close or submit button is clicked. Let's add that:

```javascript
let previousActiveElement = null;
const closeModalButton = document.querySelector('.close-modal-button');
const submitButton = document.querySelector('.submit-modal-button');
const openModalButton = document.querySelector('.open-modal-button');
const modal = document.querySelector('.modal');

const toggleModal = () => {
  modal.classList.toggle('modal--open');
}

const getFocusableElements = () => {
  const buttons = modal.querySelectorAll('button');
  return [...buttons];
}

const firstFocusableElement = () => {
  const focusableElements = getFocusableElements();
  return focusableElements[0];
}

const lastFocusableElement = () => {
  const focusableElements = getFocusableElements();
  const length = focusableElements.length;
  return focusableElements[length - 1];
}

openModalButton.addEventListener('click', () => {
  previousActiveElement = document.activeElement;
  toggleModal();
  firstFocusableElement().focus();
});

// Create a function to toggle modal visibility and restore focus
const closeModalWithFocusRestore = () => {
  toggleModal();
  // Move focus back to the element that was focused on before opening the modal 
  previousActiveElement.focus();
}

// Close modal when the close button is clicked
closeModalButton.addEventListener('click', () => {
  closeModalWithFocusRestore();
});

// Close modal when the submit button is clicked
submitButton.addEventListener('click', () => {
  closeModalWithFocusRestore();
});

const handleKeyDown = (e) => {
  const key = e.keyCode || e.which
  if (key === 9) {
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement()) {
        e.preventDefault();
        lastFocusableElement().focus();
      }
    } else {
      if (document.activeElement === lastFocusableElement()) {
        e.preventDefault();
        firstFocusableElement().focus();
      }
    }
  } else if (key === 27) {
    closeModalWithFocusRestore();
  }
}

modal.addEventListener('keydown', handleKeyDown);
```

Here's what our modal looks like

https://codepen.io/abdulqudus001/pen/GRqorZZ?tabs=result,html

### TL;DR

To make an accessible modal, you should

1. Add `role="dialog"` to help people with assistive technologies understand what's going on
2. Your modal should have at least one focusable element and focus should be kept within the modal for as long as the modal is open
3. Keyboard focus should move back to where it was before the modal was opened
4. Prevent the user from interacting with any other element on the screen

That being said, you don't always have to build modals from scratch, there are a lot of libraries out there you could use. You just need to make these libraries follow accessibility best practices.

Feel like taking it up a notch, here are some helpful resources that can help

1. [Dialog role by MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)
2. [Focus trap](https://github.com/focus-trap/focus-trap): saves one the stress of manually getting all the focusable elements in a modal
3. [Accessibility best practices for modals by w3.org](https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html)