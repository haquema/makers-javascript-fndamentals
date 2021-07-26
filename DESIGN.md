# JS week 1

## Learning objectives

Week 1:
* Test-drive a simple Javascript program using Node.
* Follow an effective process to learn a new language.

Week 2:
* Test-drive a simple Javascript program running in a web browser.
* Use the DOM API to build a web user interface for this program.

## Sequence

This is the current sequence of steps the learners will go through during the module. The first steps are meant to get them familiar with Javascript environment and concepts. The last steps are part of a bigger coding challenge.

1. [Your first JS program](./main/1-getting-started) - in which they learn how to install node and use the REPL to write some JS.
2. [Mapping previous knowledge](./main/2-mapping-previous-knowledge.md) - in which they map previous knowledge to JS through a series of exercises (variables, functions, etc).
3. [Arrays](./main/3-arrays.md) - in which they learn how to use arrays and how to use functions like `forEach` or `filter` to manipulate them (giving functions to functions).
4. [Running JS files]() - in which they learn how to run JS files from the CLI.
5. [Testing with Jest]() - in which they learn how to use `npm` to install Jest and how to TDD a JS function.
6. [Classes] - in which they learn how to write JS classes and how to test-drive one.
7. [Airport] - in which they rebuild Airport in JS.
8. [Async] - in which they learn to develop a mental model of asynchronous behaviour in JS, with the example of `setTimeout`.
9. [Challenge - Fridge] - in which they start to test-drive a `Fridge` class from a specification.
10. [Calling APIs] - in which they learn how to call remote APIs and handle the response (building on what they previously learned with async behaviour).
11. [Recipes] - in which they build on the previous APIs section to use the Spoonacular API to find recipes from the fridge's items.
12. 

## Scope

This first Javascript module covers:
 * Running Javascript with Node, using the REPL or from JS files.
 * Debugging with `console.log`
 * Variables
 * Functions (arrow syntax), functions as values, passing functions to other functions (higher-order functions)
 * Classes and methods
 * Arrays and basic iteration/filtering
 * Objects
 * Template literals
 * TDD with Jest

This first Javascript module *does not* cover:
 * The complex behaviour of `this`
 * Closures
 * Strict mode
 * Prototypal inheritance
 * Build tools
 * Promises
 * Details of the event loop
 
## Other notes

Current JS module notes/questions:
 - The count app project is maybe too complex and introduced way too soon?
 - Do we need to introduce *all* the different syntaxes to declare a function, from the very start? Or can we be ok with just arrow functions/function keyword for a while?
 - The "Mixing number and strings" example might be unnecessary if devs already have the intuition not to do it
 - The first snippet showcasing objects is probably overcomplex: https://github.com/makersacademy/course/blob/main/thermostat_es6/walkthroughs/javascript_basics.md#objects
 - Const/let part maybe not needed from the start (some for magic numbers part)
 - The goal *Can you understand the rules that govern the behaviour of the this keyword?* might not be that essential
 - Maybe let/var/const resource not needed from the very start
 - Three-tier web architecture probably complex and too soon (linked in the JS basics page)
 - Detailed breakdown of the `<script>` tag might not be needed to include some JS on a basic level
 - Do we even need to use JS strict mode if they never learn to do the "wrong" things prevented by it?
 
What is *really* important for the job market today? (maybe ask Ben)

- If JS used both for frontend and backend, make sure they understand the split between the two

Scope:
 * *Test-drive a simple JS program* (week 1)
    * Basic JS
      * Debugging with console.log()
      * Conditionals and loops
      * Functions as values
        * Difference between referring to a fn and calling it (difference from Ruby!)
        * Arrow functions syntax
        * Assign a function to a variable/name
        * Use for sorting or filtering function
      * Template literals?  `hello ${name}`
      * Async JS, callbacks
      * equality: === v/s ==
      * Arrays
        * creation
        * push
        * remove
        * find?
        * sort & filter
      * Objects
      * Classes and methods
        * Properties
        * Instantiate object and call method
    * Basic TDD (Jasmine/Jest)
      * Assertions
      * Mocking
        * Spies or equivalent
      * Expect to throw error
    * Error handling
    * Difference of scope between arrow functions and function() keyword?
      * () => { }   v/s   function() { }
    
 * *Use the DOM and browser APIs to build a web UI for this program* (week 2)
    * Load JS file from HTML page
    * Async web API
      * difference v.s classic top bottom procedural
        * not being able to return from a callback
      * setInterval? 
      * event listeners?
      * exposure to callbacks
    * DOM query selector (getElementById, querySelector...)
    * DOM content change
      * Update text/content/attributes
      * Append new elements
    * Event listener
    * Retrieve values from form inputs
    * Some early intuition of model/data -> view/DOM update
    * Using the dev tools to inspect and debug DOM tree
      * Step debugger & breakpoints
    * Calling remote APIs
      * fetch
      * promises? 

 * *Follow an effective process to learn a new language* (week 1 & 2)
    * Understand and explain the main differences between the language I'm learning (JS) versus another one I already know (Ruby)
    * Find how to use existing concepts (e.g classes, testing) in the language I'm learning
    * Navigate documentation and resources for the new language
      * Googling/searching with relevant keywords

    ---

    Less important for now:
    ---
    * `this` magic
    * Closures
    * Details of what the JS strict mode is doing 
    * Prototypal inheritance abstracted by the *class* syntax
    * Regexps
    * `typeof`
    * let/const/var - might need to be covered for legacy examples
    * Build tools e.g webpack, and modules
    * promises in details
    * JS weirdness (https://www.destroyallsoftware.com/talks/wat)
    * What about semicolons? -> put them everywhere
    * get/set methods
    * Inheritance
    * Details of the event loop
    * Define AJAX = asynchronous JS and XML?
