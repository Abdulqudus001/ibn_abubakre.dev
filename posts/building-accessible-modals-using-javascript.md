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

This talk focuses on how to build an accessible modal and assumes you already have an idea of what accessibility is. If you don't, you can take a look at this [article](https://developers.google.com/web/fundamentals/accessibility) by google developers.

## What is a modal
A modal is a web page element that displays in front of a page and disables all other content, until the user is done interacting with it.

| ![Image of a modal with title, content and two actions buttons](https://res.cloudinary.com/ibnabubakre/image/upload/v1614286939/modal.png) | 
|:--:| 
| *Sample modal with action buttons by [Abubakar Saeed](https://twitter.com/AbubakerSaeed96)* |
For a user without any disability, it's pretty easy to use the modal, simply move your cursor over to the modal, and begin interacting with it. But what happens when the user need to make use of assistive technologies to use your application?

## Accessible Modals
To make an accessible modal, we need to make sure the focus is moved to the modal once opened, and the user is not able to interact with other elements on the page until the modal is closed.

### Let's get started
First, let's get our modal structure
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



