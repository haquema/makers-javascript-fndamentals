# Calling remote APIs

## Objectives

 * Manipulate JS objects
 * Define what a remote API is.
 * Explain how we can use JavaScript's asynchronous behaviour to request data from an API.
 * Use a library to request data from an API.
 * Use a callback function to handle response from an API.

## Objects intermezzo

Remember that an "object" is, in JavaScript, a data structure composed of key-value pairs (also called in other languages a "map" or "hash"):

```javascript
const person = {
  name: 'Maxine',
  age: 32,
  address: 'London, E1 123'
};

// both ways can be used to access an object's property:
console.log(person.name);
console.log(person['name']);
```

## Asynchronous data

We've previously learned how JS can execute code in an asynchronous way, with the example of `setTimeout`.

Another common example of asynchronous behaviour in JavaScript is when we need to *fetch remote data* from other APIs. We'll often use the term APIs (for Application Programming Interfaces) to speak about external sources of data we can fetch and use in our programs. Since we often need to wait before the data is available (the network might be slow and unreliable), it makes sense to use JavaScript's *asynchronous* capabilities to work with APIs.

After all, you wouldn't expect your phone screen to freeze completely while its fetching the latest weather data, or refreshing your work schedule in the background? In the same way, we don't want our program to be unresponsive while we're fetching remote data. 

A good example of such an API is Github's one. If you want to see what it looks like, let's have a look at the [URL for Ruby's Sinatra Github repo.](https://api.github.com/repos/sinatra/sinatra) If you open this link in your browser, you'll see only data (in the JSON format):

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
$ npm install got
```

In the same directory, create a file named `github.js` and write the following code:

```javascript
const got = require('got');

const handleReceivedResponse = (response) => {
  console.log(response.body);
}

got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);
```

1. Describe the previous program and the order in which things are happening. When will execute the function `handleReceivedResponse`? Is this behaviour *synchronous* or *asynchronous*?
2. Run the program to verify your assumptions. 
3. How would you qualify the function `handleReceivedResponse`?

If you've run the program above, you'll see we received the same data seen previously on the browser. Good! However it's a bit messy and hard to read. What we can do is *convert* the string data into a JavaScript *object* so it is formatted properly. We can do this using `JSON.parse`:

```javascript
const object_value = JSON.parse(string_value)
```

## Exercise 

1. Modify the code from the previous exercise so it converts `response.body` to a JS object and prints it.

You should then have the following output (some part was omitted for clarity):

```
node github.js

{
  id: 106995,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMDY5OTU=',
  name: 'sinatra',
  full_name: 'sinatra/sinatra',
  private: false,
  owner: {
    login: 'sinatra',
    id: 8312,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjgzMTI=',
  (...)
  (...)
}
```

## Exercise: wrapping inside a function

As you might have guessed already, we can skip naming the callback function, and write the same code in a more concise way:

```javascript
got('https://api.github.com/repos/sinatra/sinatra').then((response) => {
  console.log(response);
});
```

Someone from your cohort has then decided to wrap this whole code into a function,  called `fetchRepoInfo`, so it can be reused for any Github repo. They made the URL dynamic with the repo name, and they `return` the response data from the function, as shown below:
```javascript

const fetchRepoInfo = (repoName) => {
  got(`https://api.github.com/repos/${repoName}`).then((response) => {
    return response;
  });
}

const repoResponse = fetchRepoInfo('sinatra/sinatra');

console.log(repoResponse);
```

However, something doesn't seem right with their code when they run it. The variable `repoResponse` doesn't contain the expected response. Can you see why?

1. Describe the order in which things happen in the code above.
2. Run the code. What is printed by the call to `console.log`? Is it what you expected? Can you see why this happens? (If you don't, maybe have a fresh look at [the last section about callbacks](6-async.md))
3. Modify the function `fetchRepoInfo` so it accepts a second argument that is a callback function, and we can call `fetchRepoInfo` this way:

```javascript
fetchRepoInfo('sinatra/sinatra', (repoResponse) => {
  console.log(repoResponse);
});
```

4. Order those different steps in the order they happen:
    * The Github API is called
    * `fetchRepoInfo` is called
    * the callback function to print out the response is called
    * the Github API response is received
  


[Next Challenge](11_weather_api.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/10_calling_apis.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/10_calling_apis.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/10_calling_apis.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/10_calling_apis.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/10_calling_apis.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
