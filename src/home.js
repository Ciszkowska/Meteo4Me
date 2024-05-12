function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descritptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#windSpeed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");  
  
  
  icon.innerHTML =`<img src="${response.data.condition.icon_url} class="weather-icon"/>`;

  timeElement.innerHTML = formatDate();
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = response.data.temperature.current;
  descritptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = ${response.data.temperature.humidity} %;
  windSpeedElement.innerHTML = ${response.data.wind.speed} km/h;  
}

function formatDate(date){

  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
  
  let day = days[date.getDay()];
  if (minutes <10){
    minutes = `0 ${minutes}`
  }
  if (hours <10){
    minutes = `0${hours}`
  }
  return `${day} ${hours}: ${minutes}`;
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
