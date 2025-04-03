async function start() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast");
  const weatherData = await weatherPromise.json();
  const temperature = weatherData.properties.periods[0].temperature;
  document.querySelector("#temperature-value").textContent = temperature;

}
start()

async function getPetData() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json");
  const petData = await petsPromise.json();
  petData.forEach(pet => {

    // Create Pet Card Container
    const petCard = document.createElement("div");
    petCard.classList.add("pet");

    // Create Pet Info Container
    const petInfo = document.createElement("div");
    petInfo.classList.add("pet__info");

    petCard.appendChild(petInfo);

    // Create Pet Name Container
    const petNameContainer = document.createElement("div");
    petNameContainer.classList.add("pet__name-container");

    petInfo.appendChild(petNameContainer);

    // Get Pet Name
    const petName = document.createElement("h3");
    petName.classList.add("pet__name");
    petName.textContent = pet.name;

    // Create Pet Contact Envelope
    const petContactIcon = document.createElement("img");
    petContactIcon.setAttribute("src", "./images/icons/envelope-plus 1.svg");

    petNameContainer.appendChild(petName);
    petNameContainer.appendChild(petContactIcon);

    // Get Pet Description
    const petDescription = document.createElement("p");
    petDescription.classList.add("pet__description");
    petDescription.textContent = pet.description;

    // Get Pet Age
    const petAge = document.createElement("p");
    petAge.classList.add("pet__age");
    petAge.textContent = pet.birthYear;

    petInfo.appendChild(petDescription);
    petInfo.appendChild(petAge);

    // Create Pet Image
    const petImage = document.createElement("img");
    petImage.classList.add("pet__image");
    petImage.setAttribute("src", pet.photo ?? "./images/icons/envelope-plus 1.svg");


    petCard.appendChild(petImage);

    document.querySelector(".pets__cards").appendChild(petCard);
  });
}

getPetData()
