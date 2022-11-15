

/**
[{"kind":"availableIn","availableIn":"DocumentType.Any"}]
*/


/**
The `WeatherModule` class provides information about the current weather.
*/
declare interface Weather extends Module {

/**
```
getWeather(): Promise<{currentConditionCode?: string, preferredTempUnit?: string, sunriseHour?: number, sunriseMinute?: number, sunsetHour?: number, sunsetMinute?: number, tempCelsius?: number, tempFahrenheit?: number}>
```

Returns a `Promise` which will be fulfilled with weather information or an error.
Resulting promise contains an object with the following optional keys:
- `sunriseHour` - Sunrise hour of the current day.
- `sunriseMinute` - Sunrise minute of the current day.
- `sunsetHour` - Sunset hour of the current day.
- `sunsetMinute` - Sunset minute of the current day.
- `preferredTempUnit` - preferred temperature unit based on locale (`CELSIUS` or `FAHRENHEIT`)
- `tempCelsius` - current temperature in Celsius
- `tempFahrenheit` - current temperature in Fahrenheit
- `currentConditionCode` - string describing current weather conditions
*/
getWeather(): Promise<{currentConditionCode?: string, preferredTempUnit?: string, sunriseHour?: number, sunriseMinute?: number, sunsetHour?: number, sunsetMinute?: number, tempCelsius?: number, tempFahrenheit?: number}>

}



/**

//==============================================================================
// The following example demonstrates how to get local weather information.
//
// NOTE: Mock information is provided until the effect is published as neither
// the simulator or player app have access to location information
//==============================================================================

// Load in the required modules
const Diagnostics = require('Diagnostics');
const Weather = require('Weather');

// Send a request to get weather information
Weather.getWeather().then(function(weatherJson) {
  // Store the sunrise and sunset times
  const sunrise = weatherJson.sunriseHour + ':' + weatherJson.sunriseMinute;
  const sunset = weatherJson.sunsetHour + ':' + weatherJson.sunsetMinute;

  // Log the sunrise and sunset times
  Diagnostics.log('Sunrise => ' + sunrise);
  Diagnostics.log('Sunset => ' + sunset);

  // Detect the preffered temperature unit and log the correct value
  if (weatherJson.preferredTempUnit === 'CELSIUS') {
    Diagnostics.log('Temperature => ' + weatherJson.tempCelsius + 'C');
  } else {
    Diagnostics.log('Temperature => ' + weatherJson.tempFahrenheit + 'F');
  }

  // Log the current weather conditions
  Diagnostics.log('Weather => ' + weatherJson.currentConditionCode);
});

*/