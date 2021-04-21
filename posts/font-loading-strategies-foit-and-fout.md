---
title: "Font loading strategies: FOIT and FOUT"
date: 2021-04-17T17:16:05.723Z
summary: Flash Of Invisible Text and Flash Of Unstyled Text are two font loading
  strategies used in major browsers. This post looks at what they are and how
  they affect your website
tags:
  - Performance
  - CSS
image: https://res.cloudinary.com/ibnabubakre/image/upload/v1618689853/Group_34.png
caption: Image illustrating how flash of invisible text and flash of unstyled
  text behaves in browsers
---
Custom web fonts have been around for a while now but sadly web browsers still don't have an optimal way of loading them. Web fonts are usually large files and they take quite some time to load on your web page. Different browsers have different ways of handling this delay. While some browsers would show a system font pending when the custom font gets loaded (*Flash Of Unstyled Text*), some browsers would show blank text until the font has been loaded (*Flash Of Invisible Text*). 

## Flash Of Invisible Text (FOIT)

When a custom font is not ready to be loaded, some browsers would hide the text completely while others would only hide it for a few seconds. Browsers like Chrome and Firefox would hide the text for 3 seconds and if the font doesn't get loaded by then, a system font would be loaded. Other browsers like Safari completely hides the text until the font is ready to be loaded. 

## Flash Of Unstyled Text (FOUT)

In this case, before the custom font is loaded, a system font is loaded by default and swapped out as soon as the custom font ready. This is the preferred behavior as showing a *flash of invisible text* has a significant effect on your websites overall performance.