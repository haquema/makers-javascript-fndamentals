# Asynchronous JS and callbacks

## Objectives

 * Test-driving two functions interacting together with Jest.
 * Using Jest mocks to isolate code in unit tests.

## Instructions

```javascript
let randomName = () => {
  let names = ['Bill', 'Anna', 'Maria', 'Sophie', 'Karim', 'Luka'];
  let randomIndex = Math.floor(Math.random() * names.length);

  return items[randomIndex];
}

module.exports = randomName;
```

```javascript
const randomName = require('./randomName');

let greet = () => {
  let name = randomName();
  return `Hello there ${name}!`
}

module.exports = greet;
```

```javascript
const greet = require('../src/greet');

describe('greet', () => {
  it('should greet name', () => {
    expect(greet()).toBe(`Hello there Anna!`)
  });
});
```

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/mocking-with-jest/README.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/mocking-with-jest/README.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/mocking-with-jest/README.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/mocking-with-jest/README.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=workshops/mocking-with-jest/README.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
