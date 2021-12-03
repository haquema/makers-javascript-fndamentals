# Testing in JavaScript

## Objectives

 * Initialise a new project directory with `npm init`.
 * Install a package using `npm`.

Like in other languages, we can (and have to!) test our programs to make sure they're working. In this module we'll use the library Jest to write and run tests — like we used RSpec when working with Ruby.

## Installing Jest

In most programming languages, we can use libraries, which are made of code already written for us to solve a specific problem.  In JavaScript, libraries are called `packages` and are listed in a file called `package.json`, located in the project directory root. To create an empty `package.json` file, run the following command inside a new project directory:
```
$ npm init -y
```

(The `-y` option skills all the questions we don't need to answer about the info contained in `package.json`)

You should now have something that looks like this:
```json
{
  "name": "js-week",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {},
  "author": "",
  "license": "ISC",
  "bugs": {},
  "homepage": ""
}
```

We're going to install our first package: `jest`. We'll use it to run unit tests for our JS code.

To install it, run `npm install -g jest`. The `-g` option installs Jest "globally", so we can later run tests in a given project using the command `jest` — this will make our life easier.

**We *also* need to run `npm install jest` *inside the project directory*.** The package will be saved in the `node_modules` folder.

This folder can get very big, so if you are planning on committing this project, you should add `node_modules` to your `.gitignore` file before you do. It also allows us to use the jest command when we are in this folder.

That might be the time for a quick tea or coffee break. If everything worked, you should see an output similar to this one inside your terminal:

```
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN jest-1@1.0.0 No description
npm WARN jest-1@1.0.0 No repository field.

+ jest@27.0.6
added 328 packages from 269 contributors and audited 328 packages in 33.686s

24 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```


<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08b_testing_with_jest.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08b_testing_with_jest.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08b_testing_with_jest.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08b_testing_with_jest.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08b_testing_with_jest.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
