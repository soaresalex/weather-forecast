/* CITY IDS
Barcelona, ES = 3128760
Rome, IT = 6539761
New York, US = 5128581
Paris, FR = 2988507
Prague, CZ = 3067696
*/

// Assign an API call to a variable for the current weather of each location
var multiLocation = 'http://api.openweathermap.org/data/2.5/group?id=3128760,6539761,5128581,2988507,3067696&units=imperial&appid=8eb4981f371fe227254a0551eaf95e9c';


var request = new XMLHttpRequest();
request.open('GET', multiLocation);
request.responseType = 'json';
request.send();

request.onload = function () {
	var weather = request.response;
	showWeatherDetails(weather);
};

// Show current weather for all locations
function showWeatherDetails(jsonObj) {
	// Show the city name
	var myH1 = document.createElement('h1');
	myH1.textContent = jsonObj.list[0].name + ", " + jsonObj.list[0].sys.country;
	document.getElementById("city-name").appendChild(myH1);

	// Show current weather condition
	var myImg = document.createElement("img");
	if (jsonObj.list[0].weather[0].icon === "01d") {
		myImg.setAttribute("src", "../img/clear-sky-day.png");
	} else if (jsonObj.list[0].weather[0].icon === "01n") {
		myImg.setAttribute("src", "../img/clear-sky-night.png");
	} else if (jsonObj.list[0].weather[0].icon === "02d") {
		myImg.setAttribute("src", "../img/partly-cloudy-day.png");
	} else if (jsonObj.list[0].weather[0].icon === "02n") {
		myImg.setAttribute("src", "../img/partly-cloudy-night.png");
	} else if (jsonObj.list[0].weather[0].icon === "03d" || jsonObj.list[0].weather[0].icon === "03n" || jsonObj.list[0].weather[0].icon === "04d" || jsonObj.list[0].weather[0].icon === "04n") {
		myImg.setAttribute("src", "../img/cloudy.png");
	} else if (jsonObj.list[0].weather[0].icon === "09d" || jsonObj.list[0].weather[0].icon === "09n") {
		myImg.setAttribute("src", "../img/shower-rain.png");
	} else if (jsonObj.list[0].weather[0].icon === "10d") {
		myImg.setAttribute("src", "../img/rain-day.png");
	} else if (jsonObj.list[0].weather[0].icon === "10n") {
		myImg.setAttribute("src", "../img/rain-night.png");
	} else if (jsonObj.list[0].weather[0].icon === "11d") {
		myImg.setAttribute("src", "../img/thunderstorm-day.png");
	} else if (jsonObj.list[0].weather[0].icon === "11n") {
		myImg.setAttribute("src", "../img/thunderstorm-night.png");
	} else if (jsonObj.list[0].weather[0].icon === "13d") {
		myImg.setAttribute("src", "../img/snow-day.png");
	} else if (jsonObj.list[0].weather[0].icon === "13n") {
		myImg.setAttribute("src", "../img/snow-night.png");
	} else if (jsonObj.list[0].weather[0].icon === "50d") {
		myImg.setAttribute("src", "../img/mist-day.png");
	} else if (jsonObj.list[0].weather[0].icon === "50n") {
		myImg.setAttribute("src", "../img/mist-night.png");
	}

	document.getElementById("condition").appendChild(myImg);

	// Show the current temperature
	var myH2 = document.createElement('h2');
	myH2.textContent = Math.round(jsonObj.list[0].main.temp) + "\u00B0F";
	document.getElementById("temperature").appendChild(myH2);

	// Show the weather condition in text
	var description = document.createElement('p');
	description.textContent = jsonObj.list[0].weather[0].description;
	document.getElementById("temperature").appendChild(description);

	// Show the temperature high and low for the day
	var tempMinMax = document.createElement('p');
	tempMinMax.textContent = "H " + Math.round(jsonObj.list[0].main.temp_min) + "\u00B0F | L " + Math.round(jsonObj.list[0].main.temp_max) + "\u00B0F";
	document.getElementById("temperature").appendChild(tempMinMax);

	// Show wind speed
	var wind = document.createElement('p');
	wind.innerHTML = "<strong>Wind Speed</strong>" + jsonObj.list[0].wind.speed;
	document.getElementById("more-details").appendChild(wind);

	// Show humidity
	var humidity = document.createElement('p');
	humidity.innerHTML = "<strong>Humidity</strong>" + jsonObj.list[0].main.humidity + "%";
	document.getElementById("more-details").appendChild(humidity);

	// Show pressure
	var pressure = document.createElement('p');
	pressure.innerHTML = "<strong>Pressure</strong>" + jsonObj.list[0].main.pressure + " hpa";
	document.getElementById("more-details").appendChild(pressure);

	// Show geo coordinates
	var coordinates = document.createElement('p');
	coordinates.innerHTML = "<strong>Geo coords</strong>" + "<u>[" + jsonObj.list[0].coord.lat + ", " + jsonObj.list[0].coord.lon + "]</u>";
	document.getElementById("more-details").appendChild(coordinates);
	coordinates.setAttribute("id", "coord");

	// Open Google Maps with geo coordinates of location
	$(document).ready(function () {
		$("#coord").click(function () {
			window.open("https://www.google.com/maps/search/?api=1&query=" + jsonObj.list[0].coord.lat + "," + jsonObj.list[0].coord.lon);
		});
	});

	// Show sunrise
	var sunrise = document.createElement('p');
	var d = new Date();
	d.setTime(jsonObj.list[0].sys.sunrise);
	var h = d.getHours();
	var m = d.getMinutes();
	sunrise.innerHTML = "<strong>Sunrise</strong><br>" + h + ":" + m;
	document.getElementById("temperature").appendChild(sunrise);

	// Show sunset
	var sunset = document.createElement('p');
	var x = new Date();
	d.setTime(jsonObj.list[0].sys.sunset);
	var hh = x.getHours();
	var mm = x.getMinutes();
	sunset.innerHTML = "<strong>Sunrise</strong><br>" + hh + ":" + mm;
	document.getElementById("temperature").appendChild(sunset);


}
