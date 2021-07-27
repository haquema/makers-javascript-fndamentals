# Coding challenge: A web server for our thermostat

## Objectives


This will be a stretch goal. 

## Express

```
npm install
```

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, express!')
});

app.listen(port);
```

http://localhost:3000

## Thermostat web server

In a file `web.js`:

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

app.listen(port);
```

```
curl -XPOST http://localhost:3000/up
```

```
curl -XPOST http://localhost:3000/down
```