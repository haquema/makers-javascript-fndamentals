# A Github client

## Objectives

 * Implement a class that fetches data from a remote API.

## About fetching data from APIs

You've previously learned how we can pass "callback" functions to other functions, with
the example of `setTimeout`. This is an example of **asynchronous behaviour**.

Another example of asynchronous behaviour in JavaScript is when we need to *fetch remote data* from
other APIs. Since we often need to wait before the data is available (the network might be
slow and unreliable), it makes sense to use callbacks to handle API responses.

A good example of such an API is Github's one. If you want to see what it looks like,
let's have a look at the [URL for Ruby's Sinatra Github
repo.](https://api.github.com/repos/sinatra/sinatra) If you open this link in your
browser, you'll see only data (in the JSON format):

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

As humans, we like to browse nice and colourful webpages and use links, buttons and forms
to interact with it. Programs don't need such webpages, they can just read and write raw
data. APIs are just a simpler way of interacting with a website like Github - but for
programs, rather than humans.

## Using the `got` package

We'll use the package `got` to send HTTP requests from our JavaScript program.

Initialise a new project directory and run the following command to install the package.

```
$ npm add got@11
```

In the same directory, create a file named `githubRequest.js` and write the following
code:

```javascript
// file: githubRequest.js

// Load the `got` function.
const got = require('got');

// Create a "handler" callback function.
const handleReceivedResponse = (response) => {
  console.log(response.body);
}

const url = 'https://api.github.com/repos/sinatra/sinatra';

// Call `got` and provide the handler callback function.
// This will get called by `got` when the response is received.
got(url).then(handleReceivedResponse);
```

```js
// We can also rewrite the above using a shorter version,
// by defining the "handler" function as an anonymous function

got(url)
  .then((response) => {
    console.log(response.body);
  });
```

If you've run the program above, you'll see we received the same data seen previously on
the browser. Good! However it's a bit messy and hard to read.

What we can do is *convert* the string data into a JavaScript *object* so it is formatted
properly. We can do this using `JSON.parse`:

```javascript
const stringValue = '{ "name": "John" }';
const objectValue = JSON.parse(stringValue);

console.log(objectValue); // { name: 'John' }

// We can access properties like a regular JS object
console.log(objectValue.name);
```

## Exercise 

1. Modify the code in `githubRequest.js` so it converts the received response body to an
   object, using `JSON.parse`, and prints it.

You should get the following output (some part was omitted for clarity):

```
node githubRequest.js

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

## Exercise

Create a function `fetchJson` (in `fetchJson.js`) which accepts one URL as argument, and
one callback function.

It should send an HTTP request using `got` to the URL, and calls the given function with
the received response's data. This data should be parsed from JSON into a plain JavaScript
object.

```js
// In node

const fetchJson = require('./fetchJson');

fetchJson('https://jsonplaceholder.typicode.com/todos', (response) => {
  console.log(response);
})

// This should log
// (after a few moments, depending on your network connection):
//
// [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
//   },
//   (...)
// ]
```

## Exercise 

Create a function `fetchRepositoryInfo` (in `fetchRepositoryInfo.js`) which
  * fetches repository data from Github's API
  * calls the given callback with the received data (as a JS object):

```js
// In node

const fetchRepositoryInfo = require('./fetchRepositoryInfo');

fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
  console.log(receivedResponse);
});

// This should log:
//
// {
//   id: 106995,
//   node_id: 'MDEwOlJlcG9zaXRvcnkxMDY5OTU=',
//   name: 'sinatra',
//   full_name: 'sinatra/sinatra',
//   private: false,
//   owner: {
//     login: 'sinatra',
//     id: 8312,
//     node_id: 'MDEyOk9yZ2FuaXphdGlvbjgzMTI=',
//   (...)
//   (...)
// }
```


## Challenge

1. Implement a class `GithubApi` (in `githubApi.js`) with a method `fetchRepositoryData`
   which:
    * fetches repository data from Github's API.
    * calls the given callback with the received data (after transforming the JSON into a
      JavaScript object).

```js
// In node

const GithubApi = require('./githubApi');

const api = new GithubApi();

api.fetchRepositoryData('sinatra/sinatra', (repositoryData) => {
  console.log(repositoryData);
});

// This should log:
//
// {
//   id: 106995,
//   node_id: 'MDEwOlJlcG9zaXRvcnkxMDY5OTU=',
//   name: 'sinatra',
//   full_name: 'sinatra/sinatra',
//   private: false,
//   owner: {
//     login: 'sinatra',
//     id: 8312,
//     node_id: 'MDEyOk9yZ2FuaXphdGlvbjgzMTI=',
//   (...)
//   (...)
// }
```

2. Test-drive a class `Github` which has the following behaviour:

```js
const api = new GithubApi();

// We inject the instance of `GithubApi`:
const gihub = new Github(api);

// This method will delegate to `GithubApi.fetchRepositoryData()`
github.fetch('sinatra/sinatra');

// And after a few moments, this should return a JS object with the repo information.
github.getRepoData();
```

## Mocking the `GithubApi` class

In unit tests for the `Github` class, we should now mock the dependency on `GithubApi`.
Below is one way we can do it.

```js
// file: github.test.js

describe('Github', () => {
  it('gets the repo data fetched by the Api class', () => {

    // 1. We mock the implementation of the API class
    const mockedApi = {
      // 2. It has a method `fetchRepositoryData`...
      fetchRepositoryData: (repoName, callback) => {
        // 3. ...which calls the given callback function
        callback({
          name: 'sinatra/sinatra',
          description: 'Some fake description'
        });
      }
    }

    // 4.  We can now call
    //    `mockedApi.fetchRepositoryData('repo-name', callbackFunction)`
    //     and get the expected behaviour (our callbackFunction will be called 
    //     with the fake repo data)

    const github = new Github(mockedApi);

    // 5. The mocked implementation will be called instead of the real one
    github.fetch('sinatra/sinatra');
    
    // 6. We should get the fake repo data by calling `github.getRepoData()`
    expect(github.getRepoData()).toEqual({
      name: 'sinatra/sinatra',
      description: 'Some fake description'
    })
  });
});
```


[Next Challenge](06_weather_api.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=challenges/05_calling_apis.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=challenges/05_calling_apis.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=challenges/05_calling_apis.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=challenges/05_calling_apis.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=challenges/05_calling_apis.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
