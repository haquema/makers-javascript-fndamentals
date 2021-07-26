# Coding challenge: A fridge of recipes

## Objectives

 * Use a library to request data from an external source.
 * Use a callback function to handle response from an external source.
 * Transform the received response into a useful JS value.

Let's go back to our fridge. We now got food inside it, which is good. What if we want to cook something, even if we're not very creative cooks? It would be good to have some *data source* for getting recipes, given some ingredients.

Well, thankfully for us, there is! You'll find that there are APIs for all sorts of things, including cooking recipes. We'll use the [Spoonacular API](https://spoonacular.com/food-api/). You'll need to create an account before being able to use the API (a free account should have enough "API calls" available for you to work on the challenge).

Once your account is created, head to your [Profile](https://spoonacular.com/food-api/console#Profile) page on the website, where you'll find your API key. Copy that key somewhere safe on your laptop, but be mindful of *not* including it in a file pushed on your coding challenge Github repository. Ideally, this key shouldn't leave your computer (or your pair's computer)!

We can try the following code to test the API and find recipes from some ingredients.

```javascript
const got = require('got');
// const apiKey = '6bd0a0e71d8d40feb33e70ca7b665398'
const apiKey = ''; // paste your API key here
const ingredients = 'cheese,salad';
const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}`;

let recipes = [];

got(apiUrl).then((response) => {
  recipes = JSON.parse(response.body);
  console.log(recipes);
});
```

1. What is the final string value of `apiUrl`?
2. When do you think the function passed to `then` will be executed? How is this kind of behaviour called in Javascript?

Let's have a look at the above code example together:
 * First, we're building the URL to call with `got`. This URL contains our API key (so the server on the other end can "know" it's our account requesting the API - and who to charge for it), and the ingredients we want to find recipes for.
 * The *callback* function passed to `then` will be executed once the response is received. We then use `JSON.parse(response.body)` to transform the JSON string received into a Javascript *object*, that we assign to `recipes`.
 * We can use `console.log` to print the object on the terminal and inspect it.

If you run the code above, you should see a similar output in your terminal (the output below was truncated for simplicity):

```javascript
[
  {
    id: 715513,
    title: 'Flatout Flatbread is #Flatoutgood',
    image: 'https://spoonacular.com/recipeImages/715513-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 3,
    missedIngredientCount: 4,
    missedIngredients: [ [Object], [Object], [Object], [Object] ],
    usedIngredients: [ [Object], [Object], [Object] ],
    unusedIngredients: [ [Object] ],
    likes: 13
  },
  {
    id: 653238,
    title: 'Noodle Free Eggplant and Spinach Lasagna',
    image: 'https://spoonacular.com/recipeImages/653238-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 2,
    missedIngredientCount: 4,
    missedIngredients: [ [Object], [Object], [Object], [Object] ],
    usedIngredients: [ [Object], [Object] ],
    unusedIngredients: [ [Object] ],
    likes: 1
  },
  {
    id: 638288,
    title: 'Chicken Roll-Ups With Feta Cheese and Arugula',
    image: 'https://spoonacular.com/recipeImages/638288-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [ [Object], [Object] ],
    usedIngredients: [ [Object] ],
    unusedIngredients: [ [Object] ],
    likes: 2
  }
]
```

Don't close your `node` window for now!

We can start to see some interesting data here. The `title` one is probably the most important, if we want to start somewhere.

1. Assuming you still have the same `node` terminal session opened (and still have access to the `recipes` variable containing the data), write the code to create an array `recipeNames` containing the list of the recipe's names (and only the names!). Hint: you might want to have a look at [Array's `map` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

## Back to our fridge

We now want to use the food available in our fridge to get recipes from the Spoonacular API.

1. Build a new class `RecipeFinder` that implements one method `findRecipes` which takes a list of ingredient names (such as `['cheese', 'tomato']`) and calls the Spoonacular API to return a list of recipe names.
2. In the `Fridge` class, implement a new method `findRecipesWithFoodItems` which uses the `RecipeFinder` class to find recipes from the food items currently present in the fridge.