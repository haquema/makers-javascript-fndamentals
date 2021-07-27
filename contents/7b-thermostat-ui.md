# Coding challenge: Thermostat CLI

```
npm install prompt
```

https://github.com/flatiron/prompt#getting-basic-prompt-information

## Exercise

1. In a new file called `namePrompt.js`, write a code that prompts the user for their name and print the message `"Your name is [name]"`

```javascript
prompt.get(['name'], (err, result) => {
  console.log(`Your name is ${result.name}`);
});
```

You will note that the callback function used to retrieve the user input is getting two arguments: `err` and `result`. This is a very common pattern in Javascript libraries, when dealing with asynchronous results: the first argument will usually contain an error if something wrong happened, or contain `null`. The second argument is then the result that is of interest for us (in this case, the user CLI input).

We might want to handle that error in case something wrong happens:

```javascript
prompt.get(['name'], (err, result) => {
  // if error is not null, we couldn't get user input
  if (err !== null) {
    console.log('Something wrong happened!');
  } else {
    console.log(`Your name is ${result.name}`);
  }
});
```

## Exercise: a CLI for our thermostat

1. In a file called `index.js`, create a new instance of the `Thermostat` class.
2. In the same file, create a loop in which you keep asking the user for a `command` to  increase or decrease the temperature (they could type either "down" or "up").
3. After updating the thermostat, print a message to the user indicating the new temperature.
4. Run the file and you should be able to update the thermostat temperature and see it change:

```
prompt: command: up
Temperature is now 21
prompt: command: down
Temperature is now 20
prompt: command: down
Temperature is now 19
prompt: command: down
Temperature is now 18
```