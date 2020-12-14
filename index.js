console.log("Hi WOrld!");
const typing = {
  attackYes: {
    bug: ["fire", "flying", "rock"],
    dark: ["bug", "fairy", "fighting"],
    dragon: ["dragon", "fairy", "ice"],
    electric: ["ground"],
    fairy: ["poison", "steel"],
    fighting: ["fairy", "flying", "psychic"],
    fire: ["ground", "rock", "water"],
    flying: ["electric", "ice", "rock"],
    ghost: ["dark", "ghost"],
    grass: ["bug", "fire", "flying", "ice", "poison"],
    ground: ["grass", "ice", "water"],
    ice: ["fighting", "fire", "rock", "steel"],
    normal: ["fighting"],
    poison: ["ground", "psychic"],
    psychic: ["bug", "dark", "ghost"],
    rock: ["fighting", "grass", "ground", "steel", "water"],
    steel: ["fighting", "ground", "fire"],
    water: ["electric", "grass"],
  },
  defendYes: {
    bug: ["fairy", "fighting", "fire", "flying", "ghost", "poison", "steel"],
    dark: ["dark", "fairy", "fighting"],
    dragon: ["fairy", "steel"],
    electric: ["dragon", "electric", "grass", "ground"],
    fairy: ["fire", "poison", "steel"],
    fighting: ["bug", "ghost", "fairy", "flying", "psychic", "poison"],
    fire: ["dragon", "fire", "rock", "water"],
    flying: ["electric", "rock", "steel"],
    ghost: ["dark", "normal"],
    grass: ["bug", "dragon", "fire", "flying", "grass", "poison", "steel"],
    ground: ["bug", "flying", "grass"],
    ice: ["fire", "ice", "steel", "water"],
    normal: ["ghost", "rock", "steel"],
    poison: ["ghost", "ground", "poison", "rock", "steel"],
    psychic: ["dark", "psychic", "steel"],
    rock: ["fighting", "ground", "steel"],
    steel: ["electric", "fire", "steel", "water"],
    water: ["dragon", "grass", "water"],
  },
  attackNo: {
    bug: ["fighting", "grass", "ground"],
    dark: ["dark", "ghost", "psychic", "psychic"],
    dragon: ["electric", "fire", "grass", "water"],
    electric: ["electric", "flying", "steel"],
    fairy: ["bug", "dragon", "dragon", "dark", "fighting"],
    fighting: ["bug", "dark", "rock"],
    fire: ["bug", "grass", "fire", "ice", "steel"],
    flying: ["bug", "fighting", "grass", "ground", "ground"],
    ghost: ["bug", "fighting", "fighting", "normal", "normal", "poison"],
    grass: ["electric", "grass", "ground", "water"],
    ground: ["electric", "electric", "poison", "rock"],
    ice: ["ice"],
    normal: ["ghost", "ghost"],
    poison: ["grass", "fairy", "fighting", "poison"],
    psychic: ["fighting", "psychic"],
    rock: ["fire", "flying", "normal", "poison"],
    steel: [
      "bug",
      "dragon",
      "fairy",
      "flying",
      "grass",
      "ice",
      "normal",
      "poison",
      "poison",
      "psychic",
      "rock",
      "steel",
    ],
    water: ["fire", "ice", "steel", "water"],
  },
  defendNo: {
    bug: ["dark", "grass", "psychic"],
    dark: ["ghost", "psychic"],
    dragon: ["dragon", "fighting", "ice"],
    electric: ["flying", "water"],
    fairy: ["dark", "dragon", "fighting"],
    fighting: ["dark", "ice", "normal", "rock", "steel"],
    fire: ["bug", "grass", "ice", "steel"],
    flying: ["bug", "fighting", "grass"],
    ghost: ["ghost", "psychic"],
    grass: ["ground", "rock", "water"],
    ground: ["electric", "grass", "poison", "rock", "steel"],
    ice: ["dragon", "flying", "grass", "ground"],
    normal: [],
    poison: ["grass", "fairy"],
    psychic: ["fighting", "poison"],
    rock: ["bug", "fire", "flying", "ice"],
    steel: ["ice", "fairy", "rock"],
    water: ["fire", "ground", "rock"],
  },
};

// SELECTORS
const btnContainer = document.querySelector(".opponent-btns");

// LIST OF TYPES
const typesArr = Object.keys(typing.attackYes);
// for(let type in typing.attackYes) {
//   typesArr.push(type);
// }

// BtnPrint
//(onLoad?)
for (let i = 0; i < typesArr.length; i++) {
  let btn = document.createElement("div");
  btn.dataset.type = typesArr[i];
  btn.className = "btn btn__opp-type";
  btn.innerHTML = `<img src="img/${typesArr[i]}.png">`;
  btnContainer.appendChild(btn);
}
