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
---
When building web applications, there are times we need to use custom fonts and even though custom web fonts have been around for quite some time now, browsers still don't have an optimal way of loading these fonts which could affect your website's overall performance score.

Fonts are usually large files that take time to load. To cater for this, some browsers would hide the text until the font is loaded (*flash of invisible text*) or show a system font (*flash of unstyled text*)

## Flash Of Invisible Text (FOIT)

While the custom web font is being loaded, some browsers would temporarily hide the text until the font has been loaded. This is referred to as *Flash Of Invisible Text* and is not usually advisable because that would mean your users would 

## Flash Of Unstyled Text (FOUT)