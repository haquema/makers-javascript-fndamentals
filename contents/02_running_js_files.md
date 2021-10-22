# Running JavaScript files

So far, we've been only writing JavaScript inside our `node` REPL. This is good for trying out some ideas, or double checking that a snippet of code is working as intended. But going further, we want to be able to write and save our code to files, so we can organise our projects in a way that makes sense and use Git to commit and version our code. 

## Objectives

 * Write your JS code to a file.
 * Run a JS file from the command line using node.

## Running a file from the terminal

Well, good news! Much like for other languages, we can run JS contained in files from the command line, again using `node`. Let's try with an example:

```javascript
const sayHello = (name) => {
  return `Hello ${name}`;
}

console.log(sayHello('Sarah'));
```

Save this code in a file called `hello.js`, and you can now run it from the command line using `node`:

```
$ node hello.js
```

Simple as that!

## A brief note; on semicolons

You might have noticed that almost every line of JavaScript ends with a semicolon (`;`). This is actually not specific to JS - other languages have similar syntax - but coming from Ruby, this might be rather unsettling. It might take some time for you to get used to type `;` at the end of every line, but don't worry too much: JS is usually quite permissive if you miss a semicolon, so that shouldn't create too many bugs. However, in case you're running into a weird bug, you might want to check there isn't a semicolon missing at the end of a line!

If you want to save yourself the hassle of checking for missing semicolons, a tool like [Prettier](https://prettier.io/docs/en/install.html) can help to automatically add them where they're needed (and also make sure your code is properly formatted). To run it so it automatically formats JS files, you can run the following in any project directory:

```
npx prettier --write .
```

(you'll be prompted to install prettier if this is the first time you're running the command).

If you don't want to overwrite files, but only check if they're properly formatted, you can use the `--check` option instead of `--write`. The [VSCode extension is also available](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to make your life easier, if you're using that editor.

[Next Challenge](03_discovering_js.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/02_running_js_files.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/02_running_js_files.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/02_running_js_files.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/02_running_js_files.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/02_running_js_files.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
