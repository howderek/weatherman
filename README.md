weatherman
==========
small dependency-free javascript library for getting the weather from [OpenWeatherMap](http://openweathermap.org/)

###Usage
First, create a Weatherman object:

    var weatherman = new Weatherman('YOUR_API_KEY_HERE', 'someplace', 'imperial/metric', callback)
    
After that, you can just work with the weather in a callback function:

    function callback(weather) {
        weather.conditions;      //one word description of current weather (clear, clouds, snow, rain)
        weather.description;     //brief description of what's going on
        weather.temperature;     //current temperature (units chosen in constructor)
        weather.humidity;        //current humidity
        weather.wind.speed;      //wind speed in mps
        weather.wind.direction;  //wind direction in dergees
        weather.cloudCoverage;   //percentage of sky covered in cluds
        weather.sunrise;         //Date() object with time of sunrise
        weather.sunset;          //Date() object with time of sunset
    }
