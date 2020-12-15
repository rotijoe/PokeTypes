//  1)
//  Build the basic pokemon typing logic.

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

//  2)
//  Create an array of the pokemon types from the Typing object.

const typesArr = Object.keys(typing.attackYes);

//Build the duel typing object from the Typing Object.

//Architect the object
const duels = {
  attack: {
    attackYes: {},
    attackNo: {},
  },
  defend: {
    defendYes: {},
    defendNo: {},
  },
};

//Populate Duels objecy
for (let strat in duels) {
  // let strategy = duels[strat];

  for (let action in duels[strat]) {
    // let action = strategy[act];
    duels[strat][action] = {};

    for (let i = 0; i < typesArr.length; i++) {
      duels[strat][action][typesArr[i]] = {
        single: typing[action][typesArr[i]],
      };

      for (let j = 0; j < typesArr.length; j++) {
        if (typesArr[j] !== typesArr[i]) {
          duels[strat][action][typesArr[i]][typesArr[j]] = [
            typing[action][typesArr[i]],
            typing[action][typesArr[j]],
          ]
            .flat()
            .sort();
        }
      }
    }
  }
}

//  3)
//  CLEANING DUEL TYPING OBJECT

//cleaning the Attack object by comparing the lists in the Yes and No objects for each type.

for (let t of typesArr) {
  //loop through the each combination
  for (let duel in duels.attack.attackYes[t]) {
    let attYes = duels.attack.attackYes[t][duel];
    let attNo = duels.attack.attackNo[t][duel];

    //find the doubles
    let attDbls = attYes.filter((x) => attNo.indexOf(x) !== -1);

    //remove the doubles from both the Yes and No lists
    duels.attack.attackYes[t][duel] = attYes.filter(
      (x) => !attDbls.includes(x)
    );
    duels.attack.attackNo[t][duel] = attNo.filter((x) => !attDbls.includes(x));
  }
}

//cleaning the Defend object by comparing the lists in the Yes and No objects for each type.

for (let t of typesArr) {
  for (let duel in duels.defend.defendYes[t]) {
    //loop through the each combination
    let defYes = duels.defend.defendYes[t][duel];
    let defNo = duels.defend.defendNo[t][duel];

    //find the doubles
    let defDbls = defYes.filter((x) => defNo.indexOf(x) !== -1);

    //remove the doubles from both the Yes and No lists
    duels.defend.defendYes[t][duel] = defYes.filter(
      (x) => !defDbls.includes(x)
    );
    duels.defend.defendNo[t][duel] = defNo.filter((x) => !defDbls.includes(x));
  }
}

//view logic object in console.
console.log(duels);

//  SELECTORS

const btnContainer = document.querySelector(".opponent-btns");

//  PRINT BUTTON FUNCTION

function printButtons(i) {
  let btn = document.createElement("div");
  btn.dataset.type = typesArr[i];
  btn.className = "btn btn__opp-type";
  btn.innerHTML = `<img src="img/${typesArr[i]}.png">`;
  btnContainer.appendChild(btn);
}

function printConsecutive(func, start, stop, delay) {
  let i = start;
  let counter = setInterval(function () {
    func(i);
    i++;
    if (i === stop) {
      clearInterval(counter);
    }
  }, delay);
}

printConsecutive(printButtons, 0, typesArr.length, 175);
