//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=523e373f17a7c9fd9087b7beb7314c6c

//Create search bar using Weather API

$("#basic-addon2").on("click",function(){
    var cityName = $("#cityName").val()
    displayWeather(cityName)
})

function displayWeather(cityName) {
$.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=523e373f17a7c9fd9087b7beb7314c6c`,
    method:"get"
}).then(function(currentWeather){
    console.log(currentWeather)
})
}

//Return current and future weather conditions for the city searched

//In current weather div, show city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

//UV index will display as green(favorable), yellow(moderate), red(severe) 

//5-Day forecast will display the date, an icon representation of weather conditions, the temperature, and the humidity

//Display previously searched cities on the side menu

//Create click events for all cities in search history that will take you back to the forecast & current weather for that city