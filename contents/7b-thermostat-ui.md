# Coding challenge: Thermostat CLI

/** EDU
  Since asynchronous programming and callbacks are covered only in the last section, we're using `readline-sync` to read input from the CLI,
  which behaves like Ruby's `gets` for example and will feel more familiar.
**/

We can now run tests to make sure all the methods of our `Thermostat` are correctly implemented. However we'd like to be able to interact with it as well - perhaps from the command line.

We'll use a new npm package called `readline-sync` for this:

```
$ npm install readline-sync
```

You can read the documentation for a [basic usage](https://github.com/anseki/readline-sync#basic-methods) of this library.

## Exercise

1. In a new file called `namePrompt.js`, write the code that prompts the user for their name and print the message `"Welcome [name]!"`. You should use the `readline-sync` library in order to do this.

If your code is correct, you should be able to run the program and it should ask for your input, before printing the output:

```bash
$ node namePrompt.js

What is your name? 
prompt: name: Kyle
Welcome Kyle!
```

## Exercise: a CLI for our thermostat


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
 * use the `readline-sync` library to ask for user input.
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



<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/7b-thermostat-ui.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/7b-thermostat-ui.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/7b-thermostat-ui.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/7b-thermostat-ui.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/7b-thermostat-ui.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
