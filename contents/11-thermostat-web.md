# Coding challenge: A web server for our thermostat

## Objectives

 * Use express to serve a simple web app.
 * Use express routes to run a JavaScript program.

This will be a stretch goal. So far the only way to interact with our thermostat is to enter commands in a CLI. That's not very exciting, and you would definitely not expect your users to do this! However, if we were to transform our thermostat program into a Web API, we could then build a web application that people could use with their browser!

In order to do this, we'll need to have a look at a very popular package in the Node community, called express. It is a very lightweight library to build web applications, similar to Ruby's Sinatra that you might already know. 

## Exercise: a simple web server

```
$ npm install express
```

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, express!')
});

console.log(`Server listening on ${port}`);
app.listen(port);
```

1. Run this code from a file called `server.js`. Head to http://localhost:3000 - what do you see?
2. What is logged on the terminal when the server starts? When does the function that responds with 'Hello, express!' is executed?
3. Is this web server a *synchronous* or *asynchronous* program? Explain why.

## Exercise: adding routes

Note: in order to test out the following exercise, you can use [the `curl` utility program](https://idratherbewriting.com/learnapidoc/docapis_install_curl.html#make-a-test-api-call) from your terminal, rather than the browser. The option `-X` allow us to use a HTTP method other than `GET`. For example, to test a `POST` HTTP request at the url http://localhost:3000/something:

```
$ curl -XPOST http://localhost:3000/something
```

1. Have a look at the [basic routing guide](https://expressjs.com/en/starter/basic-routing.html) for express. In the previous file, implement a new *route* with the HTTP method `POST` and path `/counter` that will *increment* a counter variable.
2. Implement a second `GET` route to *read* the value of this counter.
3. Implement a third `DELETE` route to *reset* the value of this counter.


## Exercise: thermostat over the web

1. In the thermostat project directory, create a new file `web.js` for the code running the express web server.
2. Implement a route `GET /temperature` to print the thermostat temperature.
3. Implement a route `POST /up` to increase the temperature.
4. Implement a route `POST /down` to decrease the temperature.
5. Implement a route `DELETE /temperature` to reset the thermostat.
6. Try to interact with the thermostat over HTTP using curl.

<details>
<summary>Reveal suggested solution</summary>

```javascript
const express = require('express');
const app = express();
const Thermostat = require('./thermostat');
const port = 3000;

let thermostat = new Thermostat();

app.get('/', (req, res) => {
  res.send(`Current temperature is ${thermostat.getTemperature()}`);
});

app.post('/up', (req, res) => {
  thermostat.up();
  res.send(`Current temperature is ${thermostat.getTemperature()}`);
});

app.post('/down', (req, res) => {
  thermostat.down();
  res.send(`Current temperature is ${thermostat.getTemperature()}`);
});

app.delete('/temperature', (req, res) => {
  thermostat.reset();
  res.send(`Current temperature is ${thermostat.getTemperature()}`);
});

app.listen(port);
```

</details>