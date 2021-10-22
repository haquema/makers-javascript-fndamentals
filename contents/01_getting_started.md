# Getting started with JavaScript

## Objectives

 * Install node.
 * Run JS code into the node REPL.

## How do I run JavaScript code?

You will need to install a program called Node.js (also just called "node"). Node is a JavaScript *runtime* - which means it reads JavaScript code, and execute it as a program. This is very similar to, for example, `ruby` or `irb`, which can read and execute Ruby code, either in files or entered directly into the REPL.

First let's install `nvm` - the Node Version Manager. If you've used Ruby with `rvm` before, it's a similar tool: `nvm` allows us to install and manage specific Node versions. You can check the latest Node release on the [releases page](https://nodejs.org/en/about/releases/). Running `nvm install node` and `nvm use node` will automatically install and use the latest stable version.

```
brew install nvm

nvm install node
nvm use node
```

If the above did work, you should see something like this in your terminal (exact versions might be different for you!): `Now using node v16.6.0 (npm v7.19.1)` - if something went wrong, have a look at the [troubleshooting section](https://github.com/nvm-sh/nvm#troubleshooting-on-macos) or reach out to someone for help.

Your should now be able to type `node` inside your terminal, to launch the node REPL: 
```
$ node
Welcome to Node.js v16.6.0.
Type ".help" for more information.
> 
```

You should now be able to type some JavaScript code inside it, and see the result of what you've typed, much like when using `irb`. 

Try with something simple like `2 + 2` and press `enter` to get the result. Congratulations, you just wrote your first line of JavaScript! Perhaps a slightly boring one for now, but no worries, more will come soon.

## About code snippets

In this module, some examples will present code to be executed in the `node` REPL (similar to `irb`), this code will be written with lines starting with prompt indicators (`>`) indicating what should be typed, and other lines what should be printed.

Other code examples without prompt indicators at all should be written to JavaScript files. Snippets starting with `$` will indicate commands to type in the terminal (outside the `node` program).

## Exercise - your first JavaScript program

Here are two more lines of JS - resist the urge of pasting them into `node` right away and try to analyse the code first.

```javascript
> const name = 'JavaScript';
> console.log('Hello, ' name);
```

1. As you might have noticed already if you've tried running the code above, there is a syntax error. Can you spot where? Make the necessary fix so the code above prints the string "Hello, JavaScript" on the terminal.
2. In the `node` REPL, change the value of `name` to your name, then use `console.log` again so it says hi — to you, rather than to JavaScript.


[Next Challenge](02_running_js_files.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/01_getting_started.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/01_getting_started.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/01_getting_started.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/01_getting_started.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/01_getting_started.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
