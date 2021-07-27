# Coding challenge: Thermostat CLI

We can now run tests to make sure all the methods of our `Thermostat` are correctly implemented. However we'd like to be able to interact with it as well - perhaps from the command line.

We'll use a new npm package called `readline-sync` for this:

```
npm install readline-sync
```

You can read the documentation for a [basic usage](https://github.com/anseki/readline-sync#basic-methods) of this library.

## Exercise

1. In a new file called `namePrompt.js`, write the code that prompts the user for their name and print the message `"Your name is [name]"`.

<details>
<summary>Reveal solution</summary>

```javascript
const readline = require('readline-sync');

let name = readline.question('Enter your name');

console.log(`Your name is {name}`);
```

</details>

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

<details>
<summary>Reveal solution</summary>

```javascript
const Thermostat = require('./thermostat');
const readline = require('readline-sync');

let thermostat = new Thermostat();

while (true) {
  console.log('Temperature is ' + thermostat.getTemperature());

  let command = readline.question('Enter "up" or "down" > ');

  if (command === 'up') {
    thermostat.up();
  } else if (command === 'down') {
    thermostat.down();
  }
}

```

</details>

## Exercise

1. Update the code so the program user can also enable and disable the thermostat's power saving mode.
2. If the temperature is decreased to the minimum possible value, display a warning message to the user.