# Asynchronous Intermezzo: fetching data

Another common example of asynchronous behaviour in Javascript is when we need to *fetch remote data* from other APIs. We'll often use the term APIs (for Application Programming Interfaces) to speak about external sources of data we can fetch and use in our programs.

A good example of such an API is the Github one. If you want to see what it looks like, let's have a look at the [URL for Ruby's Sinatra github repo.](https://api.github.com/repos/sinatra/sinatra) If you open this link in your browser, you'll see only data (in the JSON format). As humans, we like to browse nice webpages and use links, buttons and forms to interact with it. Programs don't need such webpages, they can just read the data. APIs are just a simpler way of interacting with a website like Github, for programs.

Let's now request the same information but inside our Javascript code. For this, we'll need another package called `got`.

```
npm install got
```

In the same directory, create a file named `github.js` and write the following code:

```javascript
const got = require('got');

let handleReceivedResponse = (response) => {
  console.log(response);
}

got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);
```

1. Describe the previous program and the order in which things are happening. When will execute the function `handleReceivedResponse`?
2. Run the program to verify your assumptions. Write some `console.log` inside and outside `handleReceivedResponse` if it helps. 
3. How would you qualify the function `handleReceivedResponse`?

If you've run the program above, you'll see we received the same data seen previously on the browser. Good! However it's a bit messy and hard to read. What we can do is *convert* the string data into a Javascript *object* so it is formatted properly. We can do this using `JSON.parse`:

```javascript
let handleReceivedResponse = (response) => {
  console.log(JSON.parse(response));
}
```
