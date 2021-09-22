# Asynchronous JS and callbacks

## Objectives

 * Describe "the flow of control of a program" as "the order in which the parts of the code are executed".
 * Understand how asynchronous behaviour is different from synchronous
 * Follow the flow of control to help you understand how callbacks work.

## Instructions

### High level goal for the week

At a high level, this week is about building the skills that let you learn a new language and its patterns.  In this workshop, you'll practice following the flow of control to understand the callbacks JavaScript pattern.

### Following the flow of control

Imagine you want to follow the flow of control in this code. That is, you want to understand what parts run and in what order they run. Consider this example taken from the file `index.js`:

```js
rl.question('What is the secret word? ', (answer) => {
  console.log(`Thanks for entering the secret word: ${answer}. You can go on.`);
});
```

1. Before running the code with `node`, add some `console.log`s.  Log `console.log(1)` in the bit of code you think will get run first, `console.log(2)` in the bit of code you think will get run second, and so on. For example:

```js
console.log(1);

rl.question('What is the secret word? ', (answer) => {
  console.log(2);
  console.log(`Thanks for entering the secret word: ${answer}. You can go on.`);
  console.log(3);
});

console.log(4);
```

2. Run the code to see if the numbers get printed in the order you assumed (1, 2, 3 etc.). If they do, your prediction is correct.

3. If your prediction is incorrect, examine the code and experiment with it to try to figure out why. Once you have more information, update your `console.log`s to reflect your prediction and return to step 2.

#### Following the flow fast

A developer constantly analyses the flow of control of their code.  Keep trying to improve this skill.  The more adept you are at reading the flow of control without running the code, the faster you'll be.  Build this intuition by making predictions and checking if your prediction is right.

### Demo

I'll follow the flow of control in this code:

```js
rl.question('What is the secret word? ', (answer) => {
  console.log(`Thanks for entering the secret word: ${answer}. You can go on.`);
});
```

### Work through the questions (40 mins)

* Pair up.

* Clone this repo. 

* Navigate into this workshop's directory and do a `git pull` to ensure you have the latest copy of the workshop. Then run `npm install` to install any required packages.

* Run `node index.js`.

* You should see the prompt `What is the secret word?`.

* Open `index.js` in your text editor.

* For each question, paste the provided code into `index.js`. The code for question 1 (below) is currently in `index.js`.

* Follow the process outlined in the demo to understand the flow of control of the code in the questions. Research anything you are unsure about.

* Swap driver and navigator. Continue with the next question.

## Questions

Follow the process for understanding the flow of control that we used in the demo. Some of the examples below also have additional questions to answer with your pair partner(s).

### Question 1

1. `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, read and experiment with the code to figure out why.  Correct the `console.log`s.

```js
rl.question('What is the secret word? ', (answer) => {
  console.log(`Thanks for entering the secret word: ${answer}. You can go on.`);
});
```

### Question 2

1. `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.
2. Explain what is happening in the code to your pair partner(s). What is the input parameter `peopleResponse` into the callback and where does it come from?

```js
got("https://async-workshops-api.herokuapp.com/people")
  .json()
  .then(peopleResponse => {
    console.log("People response:", peopleResponse)
  });
```

### Question 3

1. `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.

2. What value does `getReturnValue` have? What value does `peopleResponse` have? Why are they different?

```js
let getReturnValue = got("https://async-workshops-api.herokuapp.com/people")
  .json()
  .then(peopleResponse => {
    console.log("People response:", peopleResponse)
  });
```

### Question 4

1. `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.
2. Where do the values for `person` come from?

```js
got("https://async-workshops-api.herokuapp.com/people")
  .json()
  .then(peopleResponse => {
    peopleResponse.forEach((person) => console.log(person.name))
  });
```

### Question 5
`console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.

```js
setTimeout(() => {
  console.log("Hi there!");
}, 0)
```

### Plenary (10 mins)

We'll come back together for a short plenary to discuss our understanding of following the flow of control and callbacks.

## Resources

* [JavaScript event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
* [Callbacks explained with examples and links to other resources](https://www.sandersdenardi.com/understanding-javascript-callbacks/)
* [Callbacks tutorial](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=skills-workshops&prefill_File=javascript_fundamentals/callbacks_following_the_flow_of_control/README.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=skills-workshops&prefill_File=javascript_fundamentals/callbacks_following_the_flow_of_control/README.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=skills-workshops&prefill_File=javascript_fundamentals/callbacks_following_the_flow_of_control/README.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=skills-workshops&prefill_File=javascript_fundamentals/callbacks_following_the_flow_of_control/README.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=skills-workshops&prefill_File=javascript_fundamentals/callbacks_following_the_flow_of_control/README.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->


<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/async-js-and-callbacks/README.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/async-js-and-callbacks/README.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/async-js-and-callbacks/README.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/async-js-and-callbacks/README.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/async-js-and-callbacks/README.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
