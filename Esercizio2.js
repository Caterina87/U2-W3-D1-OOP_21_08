console.log("Esercizio 2");

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  sameOwner(animal) {
    if (this.ownerName === animal.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const addAnimal = (submitEvent) => {
  submitEvent.preventDefault();

  const nome = document.getElementById("Nome").value;
  const nomePadrone = document.getElementById("NomePadrone").value;
  const specie = document.getElementById("specie").value;
  const razza = document.getElementById("razza").value;

  const inputAnimal = new Pet(nome, nomePadrone, specie, razza);
  console.log(inputAnimal);

  const ul = document.querySelector("ul");
  ul.innerHTML += `<li> ${inputAnimal.petName} ${inputAnimal.ownerName} ${inputAnimal.species} ${inputAnimal.breed}</li>`;
};
