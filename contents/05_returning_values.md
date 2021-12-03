# Returning values

## Objectives

 * Use `return` to return values.
 * Use conditional statements (`if` / `else`).

In a language such as Ruby, the last value in a function is automatically returned — we don't have to use `return`.
```ruby
def increment(num)
  num + 1
end
```

This is different in JavaScript - let's dive a bit into this.

## Exercise

<!-- OMITTED -->

1. In `node`, define a function `add` that takes two arguments and return their sum, so we can run the following:
```javascript
// If your function is correct, it should give the following results in the REPL:

> add(2, 4);
6

> add(0, 1);
1
```

2. Your pair wrote this function, but it doesn't seem to work as expected — can you see why?

```javascript
const add = (a, b) => {
  a + b;
}
```


3. In `node`, define a function `multiply` that takes two arguments and return their product, so we can run the following:
```javascript
> multiply(2, 4);
8

> multiply(0, 1);
0
```

4. Using the functions `add` and `multiply`, write the code that calculate and print the following: `2 * (4 + 4)`. You should get the correct result (16).

<details>
<summary>Reveal solution</summary>

```javascript
const add = (a, b) => {
  return a + b;
}

const multiply = (a, b) => {
  return a * b;
}

console.log(multiply(2, add(4, 4)));
```

</details>


## Exercise: shorthand syntax

The previous functions `add` and `multiply` are simple enough that [they can be rewritten using a shorthand syntax](https://www.javascripttutorial.net/es6/javascript-arrow-function/): modify the previous code so the two functions `add` and `multiply` do not use the `return` keyword (and do not need curly brackets `{` and `}` as well), but still work as expected.


[Next Challenge](06_conditionals.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/05_returning_values.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/05_returning_values.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/05_returning_values.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/05_returning_values.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/05_returning_values.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
