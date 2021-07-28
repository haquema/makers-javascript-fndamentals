# JS week 1 (JS fundamentals)

## Learning objectives

* Test-drive a simple Javascript program using Node.
* Follow an effective process to learn a new language.

## Sequence

This is the current sequence of steps the learners will go through during the module. The first steps are meant to get them familiar with Javascript environment and concepts. The last steps are part of a bigger coding challenge.

1. [Your first JS program](./contents/1-getting-started.md) - in which they learn how to install node and use the REPL to write some JS.
2. [Discovering JS](./contents/2-discovering-js.md) - in which they map previous knowledge to JS through a series of exercises (variables, functions, etc).
3. [Running JS files](./contents/3-running-js-files.md) - in which they learn how to run JS files from the CLI.
4. [Arrays and functions](./contents/4-arrays.md) - in which they learn how to use arrays and how to use functions like `forEach` or `filter` to manipulate them (giving functions to functions).
5. [Testing with Jest](./contents/5-testing-with-jest.md) - in which they learn how to use `npm` to install Jest and how to TDD a JS function.
6. [Classes](./contents/6-classes.md) - in which they learn how to write JS classes and how to test-drive one.
7. [Thermostat](./contents/7-thermostat.md) - in which they test-drive, from a specification, a JS class representing a Thermostat.
8. [Thermostat CLI](./contents/7b-thermostat-ui.md) - in which they read user input from the CLI to manipulate the thermostat.
8. [Async](./contents/8-async.md) - in which they learn to develop a mental model of asynchronous behaviour in JS and callbacks, with the example of `setTimeout`.
9. [Calling remote APIs](./contents/9-calling-apis.md) - in which they learn how to call remote APIs and handle the response, building on previous async examples.
10. [Thermostat - Weather](./contents/10-weather-api.md) - in which they use OpenWeather API to fetch the weather data for a city and set the thermostat temperature.
11. [Thermostat (stretch) - Web server](./contents/11-thermostat-web.md) - in which they use Express to expose endpoints to interact with the thermostat through HTTP rather than a CLI.

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
 * Testing with Jest

The second Javascript module (week 2) will cover:
 * Running JS from the browser
 * Using a build tool (probably esbuild) and npm scripts
 * Manipulate the DOM to interact with the page
 * Call APIs from a webpage (using fetch)
 * Build a single-page app communicating with a backend
 * Full-stack Javascript

This first Javascript module *does not* cover:
 * The complex behaviour of `this`
 * Closures
 * Strict mode
 * Prototypal inheritance
 * Build tools
 * Promises in details
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
