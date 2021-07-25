# Coding challenge: Building a Fridge

## Objectives

 * Test-drive a simple JS application.

## A simple fridge

You'll build, test-driving your code, a simple class representing a fridge containing food items. Here is the specification for this first step:

* A Fridge is created an empty list of food items.
* Each Food item needs to have a name and a calories amount.
* You can add a Food item to the fridge.
* You can remove a Food item from the fridge.

Note: there are different ways to remove an element from an array in Javascript, you might have to do a bit of research on it.

Test-drive, one step at a time, each of those steps. If you're having trouble with this exercise, go back a few sections and review what you've previously learned in it. Think about how to write a test for a class in JS. Then, think about how to write this class in its own file (probably named `fridge.js`), and what methods should be implemented.

If you're having trouble, here's a more detailed walkthrough you can follow:

<details><summary>Reveal walkthrough steps</summary>
<p>

1. To setup the project, create a directory and initialize the `package.json` file using `npm init`.
2. Install the Jest library using `npm install`.
3. Now write a first test file named `fridge.test.js` and write a simple unit test for the `Fridge` class. A new instance of this class should be initialized with an array property `items` being empty. You may call a `getItems` method on this instance to retrieve this array.
4. Now write the class `Fridge` in its file `fridge.js`. Implement the constructor to initialize the `items` array property, and the `getItems` method.
5. Verify your code by running `jest`. Don't forget to use `module.exports` and `require` to use the class in the test file!
6. Test-drive and implement the two other methods `addItem` and `removeItem` following the same process.

</p>
</details>


It's important that you try to implement a solution to this exercise, however incomplete it is. Only once you feel you've completed it, please reveal the hidden solution below and verify the differences with yours.


<details><summary>Reveal possible solution</summary>
<p>

```javascript
// fridge.js

class Fridge {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemToRemove) {
    this.items = this.items.filter(item => {
      return item !== itemToRemove
    });
  }
}

module.exports = Fridge;
```

```javascript
// item.js

class FoodItem {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
  }
}

module.exports = FoodItem;
```

And the test file:

```javascript
// fridge.test.js

const Fridge = require('./fridge');
const FoodItem = require('./item');

describe('A fridge', () => {
  it('starts with empty list of items', () => {
    let fridge = new Fridge();
    expect(fridge.getItems()).toEqual([]);
  });

  it('can add an item', () => {
    let fridge = new Fridge();
    let item = new FoodItem('Cheese', 100);
    fridge.addItem(item);

    expect(fridge.getItems()).toEqual([item]);
  });

  it('can remove an item', () => {
    let fridge = new Fridge();
    let item = new FoodItem('Cheese', 100);
    fridge.addItem(item);

    expect(fridge.getItems()).toEqual([item]);

    fridge.removeItem(item);

    expect(fridge.getItems()).toEqual([]);
  });
});
```

</p>
</details>

## Minimum temperature

We can now add items to our fridge:

```javascript
let fridge = new Fridge();

// Note the calories amount are very... approximative - but who cares?
fridge.addItem(new FoodItem('Broccoli', 50));
fridge.addItem(new FoodItem('Yoghurt', 80));
fridge.addItem(new FoodItem('Cucumber', 30));
fridge.addItem(new FoodItem('Chocolate cake', 120));
```

The following requirement is:
 * There should be a way to list food items under 100 calories.

1. Add a test that verifies this requirement inside.
2. Modify the `Fridge` class to reflect this. Hint: remember how you've previously *filtered* items from an array.

<details><summary>Reveal walkthrough steps</summary>
<p>

</p>
</details>

## Making items expire

Requirements:
 * Add a property `expiresIn` on food items, which will be the number of seconds before a food item is not good to eat anymore.
 * Test-drive and implement a new method `clearExpiredItems` which will remove only expired items from the fridge.
 * Implement a function that runs every 10 seconds and clear expired items, using the function defined in the previous requirement. You might want to use [`setInterval`](https://javascript.info/settimeout-setinterval#setinterval) for this, which works in a similar way as our old friend `setTimeout`.

Note: it is slightly harder to test things that are asynchronous in Javascript, such as the behaviour of `setInterval`, or things that "happen after X seconds" or "happen every X seconds". Don't worry though, we'll get there. 

For the time being, a good way to test "by hand" if your new code is working is to create a file `index.js` in which you create a new instance of `Fridge`, and run this file