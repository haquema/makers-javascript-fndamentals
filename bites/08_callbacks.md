# Callbacks

_**This is a Makers Bite.** Bites are designed to train specific skills or tools. They
contain an intro, a demonstration video, some exercises with an example solution video,
and a challenge without a solution video for you to test your learning. [Read more about
how to use Makers
Bites.](https://github.com/makersacademy/course/blob/main/labels/bites.md)_

Learn to explain and use callback functions.

## Introduction

You will now learn about another important concept in JavaScript: callback functions. They
are used a lot in JavaScript, so it's important to understand how they work. You'll see
later how they can be useful.

As the name imply, a callback is **a function**:

```js
const printMessage = () => {
  console.log('Hello there');
}
```

But we don't use the name "callback" for *any* function. Usually, we can say a function is
used as "callback" when it's given to another function.

### An example?

Let's have a look at the native function `setTimeout` — it allows us to delay the
execution of some code after a certain time. 

```js
const printMessage = () => {
  console.log('Hello there');
}

setTimeout(printMessage, 2000);
```

It gets two arguments:
 * the function to execute after the delay
 * the delay (in milliseconds, so in the previous example, 2 seconds)

Note that the following syntax is doing the exact same thing, using an anonymous function
(i.e a function not bound to a name) directly:

```js
setTimeout(() => {
  console.log('Hello there');
}, 2000);
```

The function given in second argument to `setTimeout` is an example of a **callback** —
we've declared this function, but it won't be called until `setTimeout` decides to call it
(i.e after a delay, in the last example). The name "callback" comes from the fact that
this function's purpose is to be *called back* by another part of the code, at a later
time.

This is an example of **asynchronous programming** — the execution of the callback
function is not "in sync" with the rest of the program execution, because it has a delay
before being called.

## Demonstration

Stop this video before the exercise starts so you have the chance to try it yourself
first.

[Demonstration Video](https://youtu.be/KnB61fZjcv4?t=849)

## Exercise

1. Declare a function `printHello` which prints a greeting message.
2. Use `setTimeout` to execute this function after a 3 seconds delay.

[Example solution](https://youtu.be/KnB61fZjcv4?t=1013)

## Exercise

To work on this exercise, it might be good to think again of functions as regular values.
Revisit the previous section is this wasn't clear.

Declare a function `executeAfterDelay` which calls the given function after the given
delay in seconds:

```js
const printHello = () => {
  console.log('Hello!');
}

executeAfterDelay(5, printHello);

// After about 5 seconds, you should see the message being logged

Hello!
```

[Example solution](https://youtu.be/KnB61fZjcv4?t=1058)

## Challenge

In this challenge you'll need to use the function `setInterval`. It works the same way as
`setTimeout`, but rather than executing the given function once after a delay, it executes
it repeatedly. For example, if we give `2000` for the number of milliseconds, the function
will execute every 2 seconds:

```js
setInterval(myFunction, 2000); // myFunction will execute every 2 seconds
```

In a new file `counter.js`:

 * Declare a variable `counter` initialised at the value 0 — this value will need to
   change, so use `let` rather than `const`.
 * Declare a function called `increment` that:
   * increments the value of `counter` by 1
   * and prints it using `console.log`
 * Using `setInterval`, call this function every second so the counter is incremented and
   printed every second.

If you've done the above correctly, you should be able to run the file and see the counter
being incremented and printed every second:

```
$ node counter.js
1
2
3
(...)
```

---


### Additional resources

 * [What is a callback? (video)](https://www.youtube.com/watch?v=xHneyv38Jro)

[Next Challenge](09_arrays.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=bites/08_callbacks.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=bites/08_callbacks.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=bites/08_callbacks.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=bites/08_callbacks.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=bites/08_callbacks.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
