async function get_temperature() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast");
  const weatherData = await weatherPromise.json();
  const temperature = weatherData.properties.periods[0].temperature;
  document.querySelector("#temperature-value").textContent = temperature;
}
get_temperature()

async function getPetData() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json");
  const petData = await petsPromise.json();
  const petContainer = document.querySelector(".pets__cards");
  const template = document.querySelector("#pets__card-template");
  const fragment = document.createDocumentFragment()

  petData.forEach(pet => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".pet__name").textContent = pet.name;
    clone.querySelector(".pet__description").textContent = pet.description || "No description";
    function calcAge(birthYear) {
      const age = new Date().getFullYear() - birthYear;
      if (age == 1) return `${age} year old`;
      if (age > 1) return `${age} years old`;
      return "Less than a year";
    }
    clone.querySelector(".pet__age").textContent = calcAge(pet.birthYear);
    clone.querySelector(".pet__image").src = pet.photo || "./images/pets/fallback.jpg";
    clone.querySelector(".pet__image").alt = `Photo of a ${pet.species} named ${pet.name}`;

    fragment.appendChild(clone);
  });

  petContainer.appendChild(fragment);
}

getPetData()
