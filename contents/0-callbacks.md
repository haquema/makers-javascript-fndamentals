# Thinking about the data flow

So far, we know two ways of *passing data* from a function to another:
 * A function can *pass* a value as an argument to the other function.
 * A function can *return* a value to the other function.


```javascript

let print = (message) => {
  console.log(message);
}

let printHello = () => {
  print('Hello!');
}
```

```javascript
let add = (a, b) => {
  return a + b;
}

let printFour = () => {
  console.log(add(2, 2));
}
```

## Exercise: callback intuition

```javascript
let add = (a, b) => {
  return a + b;
}

let printFour = () => {
  console.log(add(2, 2));
}
```

1. Rewrite the `add` function so it *does not* use the `return` keyword. How would you pass the result of `a + b` back to `printFour`? Remember that in JavaScript, we can pass functions to other functions like other values.

```javascript
let add = (a, b, sendResultBack) => {
  sendResultBack(a + b);
}

let printFour = () => {
  add(2, 2, (result) => {
    console.log(result);
  });
}
```