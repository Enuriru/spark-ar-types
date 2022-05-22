declare class WeatherModule {
/**
*  
 * getWeather(): Promise<{currentConditionCode?: string, preferredTempUnit?: string, sunriseHour?: number, sunriseMinute?: number, sunsetHour?: number, sunsetMinute?: number, tempCelsius?: number, tempFahrenheit?: number}>
 *  
 * 
 * Returns a `Promise` which will be fulfilled with weather information or an error.
 * Resulting promise contains an object with the following optional keys:
 * - `sunriseHour` - Sunrise hour of the current day.
 * - `sunriseMinute` - Sunrise minute of the current day.
 * - `sunsetHour` - Sunset hour of the current day.
 * - `sunsetMinute` - Sunset minute of the current day.
 * - `preferredTempUnit` - preferred temperature unit based on locale (`CELSIUS` or `FAHRENHEIT`)
 * - `tempCelsius` - current temperature in Celsius
 * - `tempFahrenheit` - current temperature in Fahrenheit
 * - `currentConditionCode` - string describing current weather conditions
 */
static getWeather(): Promise<{currentConditionCode?: string, preferredTempUnit?: string, sunriseHour?: number, sunriseMinute?: number, sunsetHour?: number, sunsetMinute?: number, tempCelsius?: number, tempFahrenheit?: number}>;

}
export = WeatherModule;
