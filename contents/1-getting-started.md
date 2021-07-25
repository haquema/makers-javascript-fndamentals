# Getting started

## Objectives

 * Install node.
 * Run JS code into the node REPL.

## How do I run Javascript code?

You will need to install a program called Node.js (also just called "node"). Node is a Javascript *runtime* - which means it reads Javascript code, and execute it as a program. This is very similar to, for example, `ruby` or `irb`, which can read and execute Ruby code, either in files or entered directly into the REPL.

First let's install `nvm` - the Node Version Manager. If you've used Ruby with `rvm` before, it's a similar tool: `nvm` allows us to install and manage specific Node versions. 

```
brew install nvm
nvm use 12.14.1
```

If the above did work, you should see something like this in your terminal (exact versions might be different for you!): `Now using node v12.14.1 (npm v6.13.4)` - if something went wrong, have a look at the [troubleshooting section](https://github.com/nvm-sh/nvm#troubleshooting-on-macos) or reach out to your cohort or your coach.

Your should now be able to type `node` inside your terminal, to launch the node REPL: 
```
$ node
Welcome to Node.js v14.17.3.
Type ".help" for more information.
> 
```

You should now be able to type Javascript code inside it, and see the result of what you've typed. Try with something simple like `2 + 2` and press `enter` to get the result. Congratulations, you just wrote your first line of Javascript! Perhaps a slightly boring one for now, but no worries, more will come soon.

## Exercise - your first Javascript program

Here are two more lines of JS - resist the urge of pasting it into `node` and try to read it before.

```javascript
let name = 'Javascript';
console.log('Hello, ' + name);
```

1. From those two lines of code, what are you finding similar to another programming language you already know? What is different?
2. Try to describe to your pair (or to yourself) what this program is doing. What does `console.log` do?


