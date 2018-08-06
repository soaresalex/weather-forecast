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
	showLocations(weather);
};

// Show current weather for all locations
function showLocations(jsonObj) {
	for (var i = 0; i < 5; i++) {
		// Create div
		var myDiv = document.createElement("div");

		// Show the city name
		var myH1 = document.createElement('h1');
		myH1.textContent = jsonObj.list[i].name;
		myDiv.appendChild(myH1);

		// Show current weather condition
		var myImg = document.createElement("img");
		if (jsonObj.list[i].weather[0].icon === "01d") {
			myImg.setAttribute("src", "../img/clear-sky-day.png");
		} else if (jsonObj.list[i].weather[0].icon === "01n") {
			myImg.setAttribute("src", "../img/clear-sky-night.png");
		} else if (jsonObj.list[i].weather[0].icon === "02d") {
			myImg.setAttribute("src", "../img/partly-cloudy-day.png");
		} else if (jsonObj.list[i].weather[0].icon === "02n") {
			myImg.setAttribute("src", "../img/partly-cloudy-night.png");
		} else if (jsonObj.list[i].weather[0].icon === "03d" || jsonObj.list[i].weather[0].icon === "03n" || jsonObj.list[i].weather[0].icon === "04d" || jsonObj.list[i].weather[0].icon === "04n") {
			myImg.setAttribute("src", "../img/cloudy.png");
		} else if (jsonObj.list[i].weather[0].icon === "09d" || jsonObj.list[i].weather[0].icon === "09n") {
			myImg.setAttribute("src", "../img/shower-rain.png");
		} else if (jsonObj.list[i].weather[0].icon === "10d") {
			myImg.setAttribute("src", "../img/rain-day.png");
		} else if (jsonObj.list[i].weather[0].icon === "10n") {
			myImg.setAttribute("src", "../img/rain-night.png");
		} else if (jsonObj.list[i].weather[0].icon === "11d") {
			myImg.setAttribute("src", "../img/thunderstorm-day.png");
		} else if (jsonObj.list[i].weather[0].icon === "11n") {
			myImg.setAttribute("src", "../img/thunderstorm-night.png");
		} else if (jsonObj.list[i].weather[0].icon === "13d") {
			myImg.setAttribute("src", "../img/snow-day.png");
		} else if (jsonObj.list[i].weather[0].icon === "13n") {
			myImg.setAttribute("src", "../img/snow-night.png");
		} else if (jsonObj.list[i].weather[0].icon === "50d") {
			myImg.setAttribute("src", "../img/mist-day.png");
		} else if (jsonObj.list[i].weather[0].icon === "50n") {
			myImg.setAttribute("src", "../img/mist-night.png");
		}
		myDiv.appendChild(myImg);

		// Show the current temperature
		var myH2 = document.createElement('h2');
		myH2.textContent = Math.round(jsonObj.list[i].main.temp) + "\u00B0F";
		myDiv.appendChild(myH2);

		document.getElementById("locations").appendChild(myDiv);
	}
}

// Link each div location
$(document).ready(function(){
	// Opens Barcelona page
	$("#locations div:first-child").click(function(){
		window.open("../html/barcelona.html");
	});
	// Opens Rome page
	$("#locations div:nth-child(2)").click(function(){
		window.open("../html/rome.html");
	});
	// Opens New York page
	$("#locations div:nth-child(3)").click(function(){
		window.open("../html/new-york.html");
	});
	// Opens Paris page
	$("#locations div:nth-child(4)").click(function(){
		window.open("../html/paris.html");
	});
	// Opens Prague page
	$("#locations div:nth-child(5)").click(function(){
		window.open("../html/prague.html");
	});
});
