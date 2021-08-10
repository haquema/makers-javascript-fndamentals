# Coding challenge: Thermostat CLI

We can now run tests to make sure all the methods of our `Thermostat` are correctly implemented. However we'd like to be able to interact with it as well - perhaps from the command line.

We'll use a new npm package called `readline-sync` for this:

```
npm install readline-sync
```

You can read the documentation for a [basic usage](https://github.com/anseki/readline-sync#basic-methods) of this library.

## Exercise

1. In a new file called `namePrompt.js`, write the code that prompts the user for their name and print the message `"Welcome [name]!"`. You should use the `readline-sync` library in order to do this.

If your code is correct, you should be able to run the program and it should ask for your input, before printing the output:

```bash
node namePrompt.js

What is your name? 
prompt: name: Kyle
Welcome Kyle!
```

## Exercise: a CLI for our thermostat


In the thermostat project directory, create a new file `cli.js`. The goal of this exercise is to control the thermostat using the commands "up" and "down" — a correct program would result in the following input/output on the terminal:

```
node cli.js

prompt: command: up
Temperature is now 21

prompt: command: down
Temperature is now 20

prompt: command: down
Temperature is now 19

prompt: command: down
Temperature is now 18

```

In order to complete this exercise, you'll have to:

 * create an instance of the `Thermostat` class.
 * use the `readline-sync` library to ask for user input.
 * use a loop.

## Exercise

Update the code so the program user can also enable and disable the thermostat's power saving mode, with the commands "psm on" and "psm off". If the minimum or maximum temperature is reached, display a warning message for the user. The terminal input and output for a valid program should look like this:

```
node cli.js

prompt: command: up
Temperature is now 21

prompt: command: up
Temperature is now 22

prompt: command: psm on
PSM is now on

prompt: command: up
Temperature is now 23

prompt: command: up
Temperature is now 24

prompt: command: up
Temperature is now 25 (maximum reached!)

prompt: command: up
Temperature is now 25 (maximum reached!)

prompt: command: up
Temperature is now 25 (maximum reached!)

prompt: command: psm off
PSM is now off

prompt: command: up
Temperature is now 26
```

