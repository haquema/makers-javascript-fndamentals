# Coding challenge: Fetching current temperature

## Objectives

 * Use a library to request data from an external source.
 * Use a callback function to handle response from an external source.
 * Transform a response from an API into a useful value.

Let's go back to our thermostat. It would be great if we could get it to display the current temperature for a given city. How could we get this kind of data?

Well, thankfully for us, there is an API for that! You'll find that there are APIs for all sorts of things, including the weather.

## Setup

We'll use the [OpenWeather API](https://openweathermap.org/api). You'll need to create an account before being able to use the API (a free account should be enough).

Once your account is created, head to the [API keys section](https://home.openweathermap.org/api_keys) page on the website, where you'll find your API key. Copy that key somewhere safe on your laptop, but be mindful of *not* including it in a file pushed on your coding challenge Github repository. Ideally, this key shouldn't leave your computer (or your pair's computer)!

You can try having a look at what data this API can return by going to the following URL (your api key should replace the placeholder, including brackets):
```
https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid={YOUR API KEY HERE}
```

1. Building on what you've learned previously calling the Github API, use the `got` library to call the OpenWeather API using the URL above.

## Exercise: Calling OpenWeather API

We can try the following code to test the API and get weather for a given location

```javascript
const got = require('got');
const apiKey = 'a3d9eb01d4de82b9b8d0849ef604dbed'; // paste your API key here
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body);
  console.log(weatherData);
});

console.log('Requesting weather data');
```

1. What is the final string value of `apiUrl`?
2. When do you think the function passed to `then` will be executed? Before or after 'Requesting weather data' is printed?
3. Is this program *synchronous* or *asynchronous*?

Let's have a look at the above code example together:
 * First, we're building the URL to call with `got`. This URL contains our API key (so the server on the other end can "know" it's our account requesting the API - and who to charge for it), and the city we want to get weather data for.
 * The *callback* function passed to `then` will be executed once the response is received. We then use `JSON.parse(response.body)` to transform the JSON string received into a JavaScript *object*, that we assign to `weatherData`.
 * We can use `console.log` to print the object on the terminal and inspect it.

If you run the code above, you should see a similar output in your terminal:

```javascript
{
  coord: { lon: -0.1257, lat: 51.5085 },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }
  ],
  base: 'stations',
  main: {
    temp: 292.15,
    feels_like: 292.01,
    temp_min: 290.25,
    temp_max: 293.53,
    pressure: 1010,
    humidity: 73
  },
  visibility: 10000,
  wind: { speed: 4.63, deg: 250 },
  clouds: { all: 100 },
  dt: 1627375477,
  sys: {
    type: 2,
    id: 2019646,
    country: 'GB',
    sunrise: 1627359414,
    sunset: 1627415813
  },
  timezone: 3600,
  id: 2643743,
  name: 'London',
  cod: 200
}
```

Don't close your `node` window for now!

We can start to see some interesting things in here. The `main` object is probably the most important, if we wanted to start somewhere.

1. Assuming you still have the same `node` terminal session opened (and still have access to the `weatherData` variable containing the data), write the code to print out the value in `main.temp` and `weather[0].main` (the values you have will probably be different, unless you have the same cloudy weather!)

## Exercise: back to our thermostat

Test-drive and implement the following - remember that you'll need to mock the `WeatherApi` class, perhaps using something like [Jest mocks](https://jestjs.io/docs/es6-class-mocks#the-4-ways-to-create-an-es6-class-mock). You might want to dependency-inject the instance of `WeatherApi` in the `Thermostat`.
 
1. Create a new class `WeatherApi` that implements one method `fetchWeatherData`, taking a city name as argument and fetching the weather from the OpenWeather API.
2. In the `Thermostat` class, implement a method `setCity` that calls the method previous implemented in `WeatherApi`. 

## Exercise: getting the data back to the thermostat

```javascript
// weatherApi.js
const got = require('got');
const apiKey = 'a3d9eb01d4de82b9b8d0849ef604dbed'; // paste your API key here

class WeatherApi {
  fetchWeatherData(city) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    got(apiUrl).then((response) => {
      let weatherData = JSON.parse(response.body);
      return weatherData;
    });
  }
}

module.exports = WeatherApi;
```

```javascript
// thermostat.js

setCity(city) {
  let weatherData = this.weatherApi.fetchWeatherData(city);

  // TODO: get temperature from weatherData
}
```

1. The code of the `WeatherApi` class shown above uses `return` to return the weather data to the `Thermostat` instance. However, this doesn't seem to work. Can you see why?
2. Can you find a different way to *pass back* the data to the `setCity` method? Hint: could you use a *callback* function to do this?

<details>
<summary>Reveal suggested solution</summary>

```javascript
// weatherApi.js
const got = require('got');

const apiKey = 'a3d9eb01d4de82b9b8d0849ef604dbed'; // paste your API key here

class WeatherApi {
  fetchWeatherData(city, callback) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    got(apiUrl).then((response) => {
      let weatherData = JSON.parse(response.body);
      callback(weatherData);
    });
  }
}

module.exports = WeatherApi;
```

```javascript
// thermostat.js

```

</details>