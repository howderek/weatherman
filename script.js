/*global Weatherman*/

//create the function to display the weather
function weatherDisplay(weather) {
    document.getElementById('conditions').innerHTML = weather.conditions + ', ' + weather.temperature + '&deg;F';
}

//create a Weatherman object
var weatherman = new Weatherman('25808a72e342c971edbcbf0b535fc76b', 'Columbia, MO', 'imperial', weatherDisplay);
