async function start() {
  let weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast");
  let weatherData = await weatherPromise.json();
  let temperature = weatherData.properties.periods[0].temperature;
  document.querySelector("#temperature-value").textContent = temperature;
  console.log(temperature);
}

start()


