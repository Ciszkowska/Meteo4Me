function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descritptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#windSpeed");
  let timeElement = document.querySelector("#time");

  timeElement.innerHTML = 2244422 
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = response.data.temperature.current;
  descritptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = ${response.data.temperature.humidity} %;
  windSpeedElement.innerHTML = ${response.data.wind.speed} km/h;  
}

function searchCity(city) {
  let apiKey = "0545bce3d01f4c32b90ab31o4td65f55";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
