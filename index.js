// index.js

// Step 1: Fetch Data from the API
// - Create a function `fetchWeatherData(city)`
// - Use fetch() to retrieve data from the OpenWeather API
// - Handle the API response and parse the JSON
// - Log the data to the console for testing

// Step 2: Display Weather Data on the Page
// - Create a function `displayWeather(data)`
// - Dynamically update the DOM with weather details (e.g., temperature, humidity, weather description)
// - Ensure the function can handle the data format provided by the API

// Step 3: Handle User Input
// - Add an event listener to the button to capture user input
// - Retrieve the value from the input field
// - Call `fetchWeatherData(city)` with the user-provided city name

// Step 4: Implement Error Handling
// - Create a function `displayError(message)`
// - Handle invalid city names or network issues
// - Dynamically display error messages in a dedicated section of the page

// Step 5: Optimize Code for Maintainability
// - Refactor repetitive code into reusable functions
// - Use async/await for better readability and to handle asynchronous operations
// - Ensure all reusable functions are modular and clearly named

// BONUS: Loading Indicator
// - Optionally, add a loading spinner or text while the API request is in progress

// BONUS: Additional Features
// - Explore adding more features, such as displaying additional weather details (e.g., wind speed, sunrise/sunset)
// - Handle edge cases, such as empty input or API rate limits

// Event Listener for Fetch Button
// - Attach the main event listener to the button to start the process



const API_KEY = "aff208ce8473b3311d6ce9a615c81702"



function fetchWeatherData(city) {
    //convert the city name string into a coordinate set
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`)
        .then( function(response) {
            return response.json();
        })
        .then( function (geoConversion) {
            console.log(`City name: ${geoConversion[0].name}`);
            console.log(`Lattitude of ${geoConversion[0].name} is ${geoConversion[0].lat}`)
            console.log(`Longitude of ${geoConversion[0].name} is ${geoConversion[0].lon}`)
            
            const lat = geoConversion[0].lat;
            const lon = geoConversion[0].lon;

            console.log(lat, lon)
            //use the geo converted lat and lon data to plug into the weather API to get the actual weather
            return fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        })
        .then( function (response) {
            return response.json();
        })
        .then( function (weatherData) {
            var current = weatherData.current;
            console.log(`Tempurature in ${city}: ${current.temp}`);
            console.log(`Weather in ${city}: ${current.weather}`);
        })
        .catch( function (error) {
            console.log("Error fetching geo data:", error);
        })
    }

// function fetchWeatherData(cityName) {
//   // Step 1: Get coordinates
//   fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=' + API_KEY)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(geoData) {
//       if (!geoData.length) {
//         throw new Error('City not found');
//       }

//       var lat = geoData[0].lat;
//       var lon = geoData[0].lon;

//       // Step 2: Get weather data from One Call 3.0
//       var oneCallUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=' + lat +
//                        '&lon=' + lon +
//                        '&units=metric&exclude=minutely,alerts&appid=' + API_KEY;

//       return fetch(oneCallUrl);
//     })
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(weatherData) {
//       var current = weatherData.current;
//       console.log('Weather in ' + cityName + ':');
//       console.log('🌡️ Temp: ' + current.temp + '°C');
//       console.log('💧 Humidity: ' + current.humidity + '%');
//       console.log('🌬️ Wind: ' + current.wind_speed + ' m/s');
//       console.log('🌥️ Condition: ' + current.weather[0].description);
//     })
//     .catch(function(error) {
//       console.error('Error fetching weather:', error.message);
//     });
// }


function displayWeather(data) {
    const cityWeather = document.getElementById("weather-display");
}


fetchWeatherData("New York");