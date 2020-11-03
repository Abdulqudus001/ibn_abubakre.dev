---
title: "How to Send Email with SendGrid in Node.js Apps"
path: "send-email"
date: "2019-05-04"
tags: ["array", "node"]
summary: This is just a sample summary
image:
  path: ../media/send-email.png
  alt: "Send Grid Image Thingy"
  caption: '<span>Photo by <a href="sendgrid.com">SendGrid</a></span>'
---

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit labore nobis inventore? Similique magni sit culpa cumque labore deleniti repudiandae harum nemo asperiores eum, quidem impedit reiciendis velit aspernatur cum.

# What is SendGrid
SendGrid is a great service made by Twilio for sending emails. Rather than setting up your own email server for sending email with your apps, we use SendGrid to do the hard work for us.

## How to use sendgrid
It also decrease the chance of email ending up in spam since it is a known trustworthy service.
It also has very easy to use libraries for various platforms for sending emails. Node.js is one of the platforms that are supported.

To send emails with SendGrid, install the SendGrid SDK package by running `npm i @sendgrid/mail` . Then in your code, add `const sgMail = require(‘@sendgrid/mail’);` to import the installed package.
Then in your code, you send email by:
```js
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: email,
  from: 'email@example.com',
  subject: 'Example Email',
  text: `
    Dear user,  Here is your email.`,
  html: `
    <p>Dear user,</p></pre>
        Here is your email.</p>`,
};
sgMail.send(msg);
```
where `process.env.SENDGRID_API_KEY` is the SendGrid’s API, which should be stored as an environment variable since it is a secret.
Testing is easy since you don’t need to set up a local development email server.
Sending email is this simple and easy with SendGrid API. It is also free if you send small amounts of email, which is a great benefit.
![](../media/send-email.png)