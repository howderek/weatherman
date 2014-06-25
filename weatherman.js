//weatherman.js (c) 2014 Derek Howard
//released under the terms of the MIT license.
/*jshint browser:true*/

(function () {
    'use strict';
    //constructor, creates a new Weatherman object
    //new Weatherman('BLAH1234545123', 'Columbia, MO', 'imperial')
    window.Weatherman = function (APIKey, location, system, callback) {
        if (APIKey === undefined) {
            return 'APIKey is required';
        }
        this.APIKey = APIKey;
        //TODO: geolocation if no location given
        this.location = (location) ? encodeURI(location) : 'columbia,mo';
        this.system = (system === 'imperial') ? system : 'metric';
        //object that holds the weather
        this.weather = {wind: {}};
        //call it now, since it will almost certainly have to be called
        this.retrieveWeather();
        this.ready = (callback) ? callback : function () {};
    };
    
    //gets the weather from OpenWeatherMap
    window.Weatherman.prototype.retrieveWeather = function () {
        //look ma, no jQuery!
        var _this = this,
            request = new XMLHttpRequest();
        request.open('GET', ('http://api.openweathermap.org/data/2.5/weather?q=' + this.location + '&units=' + this.system + '&APPID=' + this.APIKey), true);
        request.onload = function (data) {
            //parse it
            var weather = JSON.parse(request.responseText);
            //oraganize it into a nicer object
            _this.weather.conditions = weather.weather[0].main;
            _this.weather.description = weather.weather[0].description;
            _this.weather.temperature = Math.round(weather.main.temp);
            _this.weather.humidity = weather.main.humidity;
            _this.weather.wind.speed = weather.wind.speed;
            _this.weather.wind.direction = weather.wind.deg;
            _this.weather.cloudCoverage = weather.clouds.all;
            _this.weather.sunrise = new Date(weather.sys.sunrise*1000);
            _this.weather.sunset = new Date(weather.sys.sunset*1000);
            //call the callback
            _this.ready(_this.weather);
        };
        request.send();
    };
})();