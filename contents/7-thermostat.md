# Coding challenge: Building a Thermostat

## Objectives

 * Test-drive a simple JS application.

## Domain model

You'll build, test-driving your code, a simple program to manage a thermostat. Here is the specification for the initial MVP of the program:

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default but it can also be turned off
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.

Test-drive, one step at a time, each of those steps. If you're having trouble with this exercise, go back a few sections and review what you've previously learned in it. Think about how to write a test for a class in JS. Then, think about how to write this class in its own file (probably named `thermostat.js`), and what methods should be implemented.

If you're having trouble, here's a more detailed walkthrough you can follow:

<details><summary>Reveal walkthrough steps</summary>
<p>

1. To setup the project, create a directory and initialize the `package.json` file using `npm init`.
2. Install the Jest library using `npm install`.
3. Now write a first test file named `thermostat.test.js` and write a simple unit test for the `Thermostat` class. A new instance of this class should be initialized with a  property `temperature` set to 20. You may have a `getTemperature` method on this instance to retrieve this value. This is the method you should test.
4. Now write the class `Thermostat` in its file `thermostat.js`. Implement the constructor to initialize the `temperature` property to 20, and the `getTemperature` method.
5. Verify your code by running `jest`. Don't forget to use `module.exports` and `require` to use the class in the test file!
6. Test-drive and implement the two other methods `up` and `down`, following the same process.
7. Having a minimum temperature will likely require a condition to check whether we can decrease the temperature further in `down`. Don't forget to test-drive this step as well!
8. Implementing power saving mode will require more properties and more conditional checks when changing the temperature. Don't forget to test-drive this step as well!


</p>
</details>

It's important that you try to implement a solution to this exercise, however incomplete it is. Only once you feel you've completed it, please reveal the hidden solution below and verify the differences with yours.


<details><summary>Reveal possible solution</summary>
<p>


</p>
</details>

