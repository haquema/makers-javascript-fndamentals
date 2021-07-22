# JS week 1

Learning goals:
* Test-drive a simple Javascript program
* Use the DOM API to build a web user interface for this program
* Follow an effective process to learn a new language

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
