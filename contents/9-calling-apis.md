# Async data

## Objectives

 * Use a library to request data from an external source.
 * Use a callback function to handle response from an external source.

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
2. Run the program to verify your assumptions. 
3. How would you qualify the function `handleReceivedResponse`?

If you've run the program above, you'll see we received the same data seen previously on the browser. Good! However it's a bit messy and hard to read. What we can do is *convert* the string data into a Javascript *object* so it is formatted properly. We can do this using `JSON.parse`:

```javascript
let handleReceivedResponse = (response) => {
  console.log(JSON.parse(response));
}
```

1. What is the data type of `response` when the callback is called? What is the data type of the value printed by `console.log`? Are they the same?

## Wrapping inside a function

As you might have guessed already, we can skip naming the callback function, and write the same code in a more concise way:

```javascript
got('https://api.github.com/repos/sinatra/sinatra').then((response) => {
  console.log(response);
});
```

Someone from your cohort has then decided to wrap this whole code into a function,  called `fetchRepoInfo`, so it can be reused for any github repo. They made the URL dynamic with the repo name, and they `return` the response data from the function, as shown below:
```javascript

const fetchRepoInfo = (repoName) => {
  got(`https://api.github.com/repos/${repoName}`).then((response) => {
    return response;
  });
}

let repoResponse = fetchRepoInfo('sinatra/sinatra');

console.log(repoResponse);
```

However, something doesn't seem right with their code when they run it. Can you see what?

1. Describe the order in which things happen in the code above.
2. Run the code. What is printed by the call to `console.log`? Is it what you expected? Can you see why this happens? (If you don't, maybe have a fresh look at [the last section about callbacks](6-async.md))
3. Modify the function `fetchRepoInfo` so the response received in the callback of `then` is finally assigned to the variable `repoResponse`.