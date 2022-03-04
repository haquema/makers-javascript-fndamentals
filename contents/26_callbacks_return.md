# Using a callback to return a value

## Objectives

 * Implement a function that receives a callback.

In the previous exercise, we ended up with the following code:

```js
const handleReceivedResponse = (response) => {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
}

got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);
```

We can write the previous code in a more concise way, using an anonymous function:

```javascript
got('https://api.github.com/repos/sinatra/sinatra').then((response) => {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
});
```

## Exercise

Someone from your cohort has then decided to wrap this whole snippet into a function, called `fetchRepoInfo`, so it can be reused for any Github repo. They made the URL dynamic with the repo name, as shown below:

```js
const fetchRepoInfo = (repoName) => {
  got(`https://api.github.com/repos/${repoName}`).then((response) => {
    const responseObject = JSON.parse(response.body);
    console.log(responseObject);
  });
}
```

But we need a way to "return" or "pass back" the `responseObject` to the function's caller.
```javascript

const fetchRepoInfo = (repoName) => {
  got(`https://api.github.com/repos/${repoName}`).then((response) => {
    const responseObject = JSON.parse(response.body);
    // send back the responseObject to fetchRepoInfo's caller
  });
}

fetchRepoInfo('sinatra/sinatra'); // we want to get back the response object here
```

1. Modify the function `fetchRepoInfo` so it accepts a second argument that is a callback function, and so we can call `fetchRepoInfo` this way:

```javascript
fetchRepoInfo('sinatra/sinatra', (repoResponseObject) => {
  console.log(repoResponseObject);
});
```

<details>
<summary>Reveal suggested solution</summary>

```javascript
const got = require('got');

const fetchRepoInfo = (repoName, callback) => {
  got(`https://api.github.com/repos/${repoName}`).then((response) => {
    const responseObject = JSON.parse(response.body);
    callback(responseObject);
  });
}

// The function would then be called this way:
fetchRepoInfo('sinatra/sinatra', (repoResponseObject) => {
  console.log(repoResponseObject);
});

```
</details>
  


[Next Challenge](27_weather_api.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/26_callbacks_return.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/26_callbacks_return.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/26_callbacks_return.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/26_callbacks_return.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/26_callbacks_return.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
