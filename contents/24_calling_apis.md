# Calling remote APIs

## Objectives

 * Define what a remote API is.
 * Use a library to request data from an API.
 * Use a callback function to handle response from an API.

## Reminder about JS objects

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

We've previously learned how JS can execute code *later* with callbacks, with the example of `setTimeout`. Another common use of callbacks in JavaScript is when we need to *fetch remote data* from other APIs. Since we often need to wait before the data is available (the network might be slow and unreliable), it makes sense to use callbacks to handle API responses.

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

If you've run the program above, you'll see we received the same data seen previously on the browser. Good! However it's a bit messy and hard to read. What we can do is *convert* the string data into a JavaScript *object* so it is formatted properly. We can do this using `JSON.parse`:

```javascript
const stringValue = '{ "name": "John" }';
const objectValue = JSON.parse(stringValue);

console.log(objectValue); // { name: 'John' }
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

<details>
<summary>Reveal suggested solution</summary>

```javascript
const got = require('got');

const handleReceivedResponse = (response) => {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
}

got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);
```
</details>


[Next Challenge](26_callbacks_return.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/24_calling_apis.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/24_calling_apis.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/24_calling_apis.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/24_calling_apis.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/24_calling_apis.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
