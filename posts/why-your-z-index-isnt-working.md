---
title: Why your z-index isn't working
date: 2021-05-09T16:21:35.525Z
summary: Rather than setting the z-index of an element to 9999 expecting it to
  somehow work, this article lists possible reasons why your z-index doesn't
  work and how to go about it.
tags:
  - HTML
  - CSS
image: https://res.cloudinary.com/ibnabubakre/image/upload/v1620581709/Group_2_3.png
caption: Image showing z-index levels 0, 1 and -1.
---
I was building a sidebar recently, and I encountered a bug where the content of the page was always on top of the mobile navbar no more how high I raised the z-index of the sidebar. This took me a while to figure out and I'm writing this article hoping that someone out there won't waste a lot of time like I did trying to solve the bug.

## What is z-index

z-index is a CSS property that allows you to set the [stacking order](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) of *positioned* elements in the DOM. Here's how to specify the z-index from your CSS:

```css
.element {
  z-index: 1;
}
```

When no z-index is set, the stacking order follows the appearance 
of the elements in the DOM. 

## I set the z-index correctly, so why doesn't it work?

The z-index of an element depends on a number of things, and usually, when these conditions aren't met, the z-index of your element would most likely not take effect.

Here are some of the reasons why your z-index doesn't work;

### You set z-index on a static element

By default, every element has a position of static. z-index only works on positioned elements (relative, absolute, fixed, sticky) so if you set a z-index on an element with a static position, it won't work.

### A ridiculously large z-index was previously set

You might be working on an existing codebase that had the z-index of an element set to 999 (for example). This would affect the stacking order as only an element with a higher z-index can show on top. So you would need to set the z-index of at least 1000 for the z-index to work. Also, it's good practice to avoid setting large z-index values, that way you can avoid issues such as this.

### The parent element has a lower z-index

The z-index of an element can only go as far as the maximum z-index of its parent (it cannot appear in a higher stacking context than its parent). Take for example;

```css
.child {
  z-index: 3;
}

.element-to-cover {
  z-index: 2;
}

.parent {
  z-index: 1;
}
```

In this case, you want to display the `child` element over the `element-to-cover` element so you set the z-index to 3. This should work since it has a z-index higher than the `element-to-cover`, but because the parent element has a z-index of 1, the `child` element would not appear above the `element-to-cover`

## Summary

1. You have to set the position of an element for the z-index to work
2. Check to see if the element has a lower z-index value than the element you want it to appear over 
3. The z-index won't work if the parent element has a z-index lower than the z-index of your element