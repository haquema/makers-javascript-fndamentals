# A CLI prompt for the thermostat

## Objectives
 * Use a callback function to handle a CLI prompt.
 * Use the `readline` package.

Let's go back to our thermostat. We'll build a small CLI prompt so we can interact with it from the terminal and change the temperature.

We'll use the package `readline` to read user input — here's an example:

```javascript
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your favorite food? ', (answer) => {
  console.log(`Oh, so your favorite food is ${answer}`);
});
```

Note that the function given in second argument to `.question` is another example of a **callback**. It will get executed only when the user finally enters something in the prompt.

## Exercise

In the thermostat project directory, create a new file `cli.js`. The goal of this exercise is to control the thermostat using the commands "up" and "down" — a correct program would result in the following input/output on the terminal:

```
$ node cli.js

Temperature is 20
Enter command > up
Temperature is 21
Enter command > down
Temperature is 20
Enter command > down
Temperature is 19
Enter command > down
Temperature is 18
Enter command > 

```

In order to complete this exercise, you'll have to:

 * create an instance of the `Thermostat` class.
 * install the `readline` package with `npm install`.
 * use the `readline` library and [its `question` method to ask for user input](https://nodejs.org/api/readline.html#rlquestionquery-options-callback).
 * use loops and conditionals.

## Exercise: more commands

Update the code so the program user can also enable and disable the thermostat's power saving mode, with the commands "psm on" and "psm off". If PSM is on, and the minimum or maximum temperature is reached, display an additional warning message to the user. The terminal input and output for a valid program should look like this:

```
$ node cli.js

Temperature is 20
Enter command > up
Temperature is 21
Enter command > up
Temperature is 22
Enter command > up
Temperature is 23
Enter command > up
Temperature is 24
Enter command > psm on
Temperature is 24
Enter command > up
Temperature is 25 (maximum reached)
Enter command > up
Temperature is 25 (maximum reached)
Enter command > psm off
Temperature is 25
Enter command > up
Temperature is 26
```

## Additional resources

 * [Use `readline`'s `.question` method to ask for user input](https://nodejs.org/api/readline.html#rlquestionquery-options-callback)

[Next Challenge](24_calling_apis.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/23_callbacks_cli.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/23_callbacks_cli.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/23_callbacks_cli.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/23_callbacks_cli.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/23_callbacks_cli.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
