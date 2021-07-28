# Calling remote APIs

## Objectives

 * Manipulate JS objects
 * Define what a remote API is.
 * Explain how we can use JavaScript's asynchronous behaviour to request data from an API.
 * Use a library to request data from an API.
 * Use a callback function to handle response from an API.

## Objects intermezzo

In other languages, you might have learned to think about objects as "instances of a class" - for example, in the following Ruby code, `bike` would be an object (instance of the `Bike` class):

```ruby
bike = Bike.new
```

However, in JavaScript, objects designate a different kind of values, quite similar to Ruby hashes. Here's an example of a JavaScript object:

```javascript
let person = {
  name: 'Maxine',
  age: 32,
  address: 'London, E1 123'
};

// both ways can be used to access an object's property:
console.log(person.name);
console.log(person['name']);

```

## Exercise: accessing object values

An object is composed of *key-values* pairs. Those values can be any primitive values such as strings or numbers, as in the example above, or they can be more complex things, such as other objects, arrays, or even functions:
```javascript
let person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};
```

1. Print the value of the `city` attribute ('London').
2. Print the value of the second `hobbies` value ('tennis').

## Asynchronous data

We've previously learned how JS can execute code in an asynchronous way, with the example of `setTimeout`.

Another common example of asynchronous behaviour in JavaScript is when we need to *fetch remote data* from other APIs. We'll often use the term APIs (for Application Programming Interfaces) to speak about external sources of data we can fetch and use in our programs. Since we often need to wait before the data is available (the network might be slow and unreliable), it makes sense to use JavaScript's *asynchronous* capabilities to work with APIs.

After all, you wouldn't expect your phone screen to freeze completely while its fetching the latest weather data, or refreshing your work schedule in the background? In the same way, we don't want our program to be unresponsive while we're fetching remote data. 

A good example of such an API is Github's one. If you want to see what it looks like, let's have a look at the [URL for Ruby's Sinatra github repo.](https://api.github.com/repos/sinatra/sinatra) If you open this link in your browser, you'll see only data (in the JSON format):

```json
{
  "id": 106995,
  "node_id": "MDEwOlJlcG9zaXRvcnkxMDY5OTU=",
  "name": "sinatra",
  "full_name": "sinatra/sinatra",
  "private": false,
  // (truncated for brevity)
}
```

As humans, we like to browse nice and colourful webpages and use links, buttons and forms to interact with it. Programs don't need such webpages, they can just read and write raw data. APIs are just a simpler way of interacting with a website like Github - but for programs, rather than humans.

Let's now request the same information but inside our JavaScript code. For this, we'll need another package called `got`.

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

1. Describe the previous program and the order in which things are happening. When will execute the function `handleReceivedResponse`? Is this behaviour *synchronous* or *asynchronous*?
2. Run the program to verify your assumptions. 
3. How would you qualify the function `handleReceivedResponse`?

If you've run the program above, you'll see we received the same data seen previously on the browser. Good! However it's a bit messy and hard to read. What we can do is *convert* the string data into a JavaScript *object* so it is formatted properly. We can do this using `JSON.parse`:

```javascript
let handleReceivedResponse = (response) => {
  console.log(JSON.parse(response));
}
```

1. What is the data type of `response` when the callback is called? What is the data type of the value printed by `console.log`? Are they the same?

## Exercise: wrapping inside a function

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

However, something doesn't seem right with their code when they run it. The variable `repoResponse` doesn't contain the expected response. Can you see why?

1. Describe the order in which things happen in the code above.
2. Run the code. What is printed by the call to `console.log`? Is it what you expected? Can you see why this happens? (If you don't, maybe have a fresh look at [the last section about callbacks](6-async.md))
3. Modify the function `fetchRepoInfo` so the response received in the callback of `then` is finally assigned to the variable `repoResponse`.