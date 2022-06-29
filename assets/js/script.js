const cardContainer = document.querySelector(".card-container");

const getCharacter = async (id) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}/`);
    const data = await response.json();
    new Character(data);
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


class Character {
  constructor({ name, image, species }) {
    this._name = name;
    this._image = image;
    this._species = species;
    this.show();
  }

  show(){
    const card = document.createElement("div");
    card.classList.add("card");
  
    const cardImgContainer = document.createElement("div");
    cardImgContainer.classList.add("img-container");
  
    const cardImg = document.createElement("img");
    cardImg.src = this._image;
  
    cardImgContainer.appendChild(cardImg);
  
    const cardName = document.createElement("p");
    cardName.classList.add("name");
    cardName.textContent = "Name: "+this._name;
  
    const cardSpecies = document.createElement("p");
    cardSpecies.classList.add("species");
    cardSpecies.textContent = "Species: "+this._species;
  
    card.appendChild(cardImgContainer);
    card.appendChild(cardName);
    card.appendChild(cardSpecies);
  
    cardContainer.appendChild(card);
  }
}
