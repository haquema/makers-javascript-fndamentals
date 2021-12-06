# Callbacks

## Objectives
 * Understand what a callback function is.
 * Use a callback function with `setInterval`.

We'll go back to our thermostat program in a moment — but first, we need to learn about another important concept in JavaScript: callback functions. 

As the name imply, a callback is **a function**:

```js
const printMessage = () => {
  console.log('Hello there');
}
```

But we don't use the name "callback" for *any* function. Usually, we can say a function is used as "callback" when it's given to another function.

Let's have a look at an example — the native function `setTimeout` allows us to delay the execution of some code after a certain time. 

```js
const printMessage = () => {
  console.log('Hello there');
}

setTimeout(printMessage, 2000);
```

It gets two arguments:
 * the function to execute after the delay
 * the delay (in milliseconds, so in the previous example, 2 seconds)

Note that the following syntax is doing the exact same thing, using an anonymous function (i.e a function not bound to a name) directly:

```js
setTimeout(() => {
  console.log('Hello there');
}, 2000);
```

## Exercise

In this exercise, you'll need to use the function `setInterval`. It works the same way as `setTimeout`, but rather than executing the given function once after a delay, it executes it repeatedly. For example, if we give `2000` for the number of millisecond, the function will execute every 2 seconds:

```js
setInterval(myFunction, 2000); // myFunction will execute every 2 seconds
```

In a new file `counter.js`:

 * Declare a variable `counter` initialised at the value 0 — this value will need to change, so use `let` rather than `const`.
 * Declare a function called `increment` that:
   * increments the value of `counter` by 1
   * and prints it using `console.log`
 * Using `setInterval`, call this function every second so the counter is incremented and printed every second.

If you've done the above correctly, you should be able to run the file and see the counter being incremented and printed every second:

```
$ node index.js
1
2
3
(...)
```

<details>
  <summary>Reveal suggested solution</summary>

  ```js
  let counter = 0;

  const increment = () => {
    counter += 1;
    console.log(counter);
  }

  setInterval(increment, 1000); // every 1s
  ```
</details>

---

The function given in second argument to `setInterval` is an example of a **callback** — we've declared this function, but it won't be called until `setInterval` decides to call it (i.e every second, in the last example). The name "callback" comes from the fact that this function's purpose is to be *called back* by another part of the code, at a later time.

### Additional resources

 * [What is a callback? (video)](https://www.youtube.com/watch?v=xHneyv38Jro)

[Next Challenge](23_callbacks_cli.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/22_callbacks.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/22_callbacks.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/22_callbacks.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/22_callbacks.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/22_callbacks.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
