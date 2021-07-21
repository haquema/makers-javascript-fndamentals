# Pairing challenge: Building a Thermostat

## Objectives

 * Test-drive a simple JS application.

## A simple thermostat

1. Create a new project and initialize the `package.json` file using `npm init`.
2. Install the Jest library.
3. Now write a first test file named `thermostat.test.js` and write a simple unit test for the `Thermostat` class. A new instance of this class should be initialized with a temperature of 20 degrees.

If you're having trouble with this exercise, go back a few sections and review what you've previously learned in it. Think about how to write a test for a class in JS. Then, think about how to write this class in its own file (probably named `thermostat.js`), and what method should be implemented.

Also don't forget to use `module.exports` and `require` to export your class!

It's important that you really try to implement a solution to this exercise, however incomplete it is. Only once you feel you've completed it, please reveal the hidden solution below and verify the differences with yours.

<details><summary>Reveal possible solution</summary>
<p>

```javascript
class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  getTemperature() {
    return this.temperature;
  }
}

module.exports = Thermostat;
```

And the test file:

```javascript
const Thermostat = require('./thermostat');

describe('Thermostat', () => {

});
```

</p>
</details>