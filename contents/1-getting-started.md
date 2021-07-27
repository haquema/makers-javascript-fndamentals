# Getting started with JavaScript

## Objectives

 * Install node.
 * Run JS code into the node REPL.

## How do I run JavaScript code?

You will need to install a program called Node.js (also just called "node"). Node is a JavaScript *runtime* - which means it reads JavaScript code, and execute it as a program. This is very similar to, for example, `ruby` or `irb`, which can read and execute Ruby code, either in files or entered directly into the REPL.

First let's install `nvm` - the Node Version Manager. If you've used Ruby with `rvm` before, it's a similar tool: `nvm` allows us to install and manage specific Node versions. 

```
brew install nvm
nvm use 12.14.1
```

If the above did work, you should see something like this in your terminal (exact versions might be different for you!): `Now using node v12.14.1 (npm v6.13.4)` - if something went wrong, have a look at the [troubleshooting section](https://github.com/nvm-sh/nvm#troubleshooting-on-macos) or reach out to someone for help.

Your should now be able to type `node` inside your terminal, to launch the node REPL: 
```
$ node
Welcome to Node.js v14.17.3.
Type ".help" for more information.
> 
```

You should now be able to type some JavaScript code inside it, and see the result of what you've typed, much like when using `irb`. 

Try with something simple like `2 + 2` and press `enter` to get the result. Congratulations, you just wrote your first line of JavaScript! Perhaps a slightly boring one for now, but no worries, more will come soon.

## Exercise - your first JavaScript program

Here are two more lines of JS - resist the urge of pasting them into `node` right away and try to analyse the code first.

```javascript
let name = 'JavaScript';
console.log('Hello, ' name);
```

1. From those two lines of code, what are you finding similar to another programming language you already know? What is different?
2. Try to describe to your pair (or to yourself) what this program is doing. What does `console.log` do?
3. As you might have noticed already if you've tried running the code above, there is a syntax error. Can you spot where? Make the necessary fix so the code above prints the string "Hello, JavaScript" on the terminal.

## A brief note; on semicolons

You might have noticed every line of JavaScript ends with a semicolon (`;`). This is actually not specific to JS - other languages have similar syntax - but coming from Ruby, this might be rather unsettling. It might take some time for you to get used to type `;` at the end of every line, but don't worry too much: JS is usually quite permissive if you miss a semicolon, so that shouldn't create too many bugs. However, in case you're running into a weird bug, you might want to check there isn't a semicolon missing at the end of a line!

