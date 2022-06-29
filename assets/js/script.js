const cardContainer = document.querySelector(".card-container");



const getCharacter = async (id) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}/`);
    const data = await response.json();
    const personaje = new Character(data);
    CreateCard(personaje);
  } catch (e) {
    console.log(e);
  }
};



const getCharacters = async (number) => {
  for (let i = 1; i <= number; i++) {
    await getCharacter(i);
  }
};



getCharacters(20);



const CreateCard = (personaje) => {

  const card = document.createElement("div");
  card.classList.add("card");

  const cardImgContainer = document.createElement("div");
  cardImgContainer.classList.add("img-container");

  const cardImg = document.createElement("img");
  cardImg.src = personaje.image;

  cardImgContainer.appendChild(cardImg);

  const cardName = document.createElement("p");
  cardName.classList.add("name");
  cardName.textContent = "Name: "+personaje.name;

  const cardId = document.createElement("p");
  cardId.classList.add("id");
  cardId.textContent = "Id: "+personaje.id;

  const cardStatus = document.createElement("p");
  cardStatus.classList.add("status");
  cardStatus.textContent = "Status: "+personaje.status;

  const cardGender = document.createElement("p");
  cardGender.classList.add("gender");
  cardGender.textContent = "Gender: "+personaje.gender;

  const cardSpecies = document.createElement("p");
  cardSpecies.classList.add("species");
  cardSpecies.textContent = "Species: "+personaje.species;

  card.appendChild(cardImgContainer);
  card.appendChild(cardName);
  card.appendChild(cardId);
  card.appendChild(cardStatus);
  card.appendChild(cardGender);
  card.appendChild(cardSpecies);

  cardContainer.appendChild(card);
};




class Character {
  constructor({ id, name, status, image, species, gender }) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.image = image;
    this.species = species;
    this.gender = gender;
  }
}
