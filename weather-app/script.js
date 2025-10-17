const apiKey = "575b75d39fa72f984734d8fe9d9dfdf6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const tempElement = document.querySelector(".tempElement");
const cityLabel = document.querySelector(".cityLabel");
const searchIcon = document.querySelector(".fa-search");
const input = document.querySelector(".city");

searchIcon.addEventListener("click", () => {
  fetchWeather(input.value);
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") fetchWeather(input.value);
});

fetchWeather("allahabad");

async function fetchWeather(city) {
  if (!city) city = "allahabad";
  const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
  const data = await response.json();

  if (data.cod !== 200) {
    cityLabel.innerText = "City not found 😕";
    tempElement.innerText = "--";
    return;
  }

  tempElement.innerText = `${Math.round(data.main.temp)}°C`;
  cityLabel.innerText = data.name;
}
