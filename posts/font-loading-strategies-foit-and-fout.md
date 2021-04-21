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

When a custom font is not ready to be loaded, some browsers would hide the text completely while others would only hide it for a few seconds. Browsers like Chrome and Firefox would hide the text for 3 seconds and if the font doesn't get loaded by then, a system font would be loaded. Other browsers like Safari completely hides the text until the font is ready to be loaded. The image below is a screenshot of a lighthouse audit that shows what happens when you don't account for FOIT in your application

![Screenshot of lighthouse test showing effect of FOIT](https://res.cloudinary.com/ibnabubakre/image/upload/v1619036990/lighthouse.png)

## Flash Of Unstyled Text (FOUT)

In this case, before the custom font is loaded, a system font is loaded by default and swapped out as soon as the custom font ready. This is the preferred behavior as showing a *flash of invisible text* has a significant effect on your websites overall performance.

In this article, we would look at two ways to avoid showing the invisible text. The first option, which is quite simple and straightforward is to add the `font-display: swap` rule to our CSS. Such that when you want to setup your custom font, we tell the browser to load a system font and swap it out when our font is done loading. Here's how that would look like:

```css
@font-face {
  font-family: Poppins;
  font-display: swap;
}
```

This method is quite straightforward but sadly is not supported by all browsers, so if you're looking to account for all browsers, this might not work for you.

Another method, though involves more code but can work across all browsers involve the use of an external library called [FontFaceObserver](https://github.com/bramstein/fontfaceobserver). To make this work, you have to

1. Make sure you don't use the custom font in your CSS on initial page load.
2. Use the `FontFaceObserver` library to detect when the font is loaded
3. Update the page styling to use the custom font

Here's a [codelab](https://web.dev/codelab-avoid-invisible-text/) by google that helps understand how to use the `FontFaceObserver` library.

*TL;DR*

1. FOIT and FOUT are font loading strategies used by browsers to load custom fonts
2. FOIT shows an invisible text while FOUT uses a system font until the font is loaded
3. FOUT should be preferred over FOIT.

|Browser|Default behavior|
|-------|----------------|
|Edge|Uses system font until the custom font is ready (FOUT)|
|Safari|Hides text until the custom font is ready (FOIT)|
|Firefox|Initially hides text for 3 seconds. Uses system font after that until the custom font is ready (FOIT & FOUT)|
|Chrome|Initially hides text for 3 seconds. Uses system font after that until the custom font is ready (FOIT & FOUT)|


