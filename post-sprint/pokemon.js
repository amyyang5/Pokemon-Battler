const inquirer = require("inquirer");

const firstQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of trainer 1?",
    default: "Ash",
  },
  {
    type: "list",
    name: "pokemon",
    message: "Which pokemon do you choose?",
    choices: ["Charmander", "Squirtle", "Bulbasaur", "Rattata"],
  },
  // etc...
];

const secondQuestions = [
  //... see examples to how to format questions
  {
    type: "input",
    name: "name",
    message: "What is the name of trainer 2?",
    default: "Dash",
  },
  {
    type: "list",
    name: "pokemon",
    message: "Which pokemon do you choose?",
    choices: ["Charmander", "Squirtle", "Bulbasaur", "Rattata"],
  },
  // etc...
];

const thirdQuestions = [
  {
    type: "list",
    name: "wantsToFight",
    message: "Do you want to battle?",
    choices: ["Yes", "No"],
  },
  {
    type: "list",
    name: "pickMove",
    message: "Which move would you like to use?",
    choices: ["Tackle", "Ember"],
  },
];

function playGame() {
  inquirer
    .prompt(firstQuestions)
    .then(function (firstAnswers) {
      // do stuff with the answers to the firstQuestions, e.g. create trainers and catch pokemon
      firstAnswers.name = new Trainer();
      if (firstAnswers.pokemon === "Charmander") {
        firstAnswers.pokemon = new Charmander("", 40, 20);
      } else if (firstAnswers.pokemon === "Squirtle") {
        firstAnswers.pokemon = new Squirtle("", 50, 15);
      } else if (firstAnswers.pokemon === "Bulbasaur") {
        firstAnswers.pokemon = new Bulbasaur("", 80, 10);
      } else if (firstAnswers.pokemon === "Rattata") {
        firstAnswers.pokemon = new Rattata("", 30, 30);
      }
      console.log(firstAnswers);
      firstAnswers.name.catch(firstAnswers.pokemon);
      console.log(firstAnswers.name);
      return inquirer.prompt(secondQuestions);
    })
    .then(function (secondAnswers) {
      // do stuff with the answers to the secondQuestions, e.g. choose moves to use / fight / run away / select pokemon to fight with
      secondAnswers.name = new Trainer();
      if (secondAnswers.pokemon === "Charmander") {
        secondAnswers.pokemon = new Charmander("", 40, 20);
      } else if (secondAnswers.pokemon === "Squirtle") {
        secondAnswers.pokemon = new Squirtle("", 50, 15);
      } else if (secondAnswers.pokemon === "Bulbasaur") {
        secondAnswers.pokemon = new Bulbasaur("", 80, 10);
      } else if (secondAnswers.pokemon === "Rattata") {
        secondAnswers.pokemon = new Rattata("", 30, 30);
      }
      console.log(secondAnswers);
      secondAnswers.name.catch(secondAnswers.pokemon);
      console.log(secondAnswers.name);
      return inquirer.prompt(thirdQuestions);
    })
    .then(function (thirdAnswers) {
      // do stuff with the answers to the secondQuestions, e.g. choose moves to use / fight / run away / select pokemon to fight with
      if (thirdAnswers.wantsToFight === "No") {
        return console.log("Bye");
      }
    });
}

playGame();

class Pokemon {
  constructor(name, hitPoints, attackDamage, move = "Tackle") {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
  }
  takeDamage(num) {
    this.hitPoints -= num;
  }
  useMove() {
    console.log(`${this.name} used ${this.move}`);
    return this.attackDamage;
  }
  hasFainted() {
    if (this.hitPoints > 0) {
      return false;
    }
    return true;
  }
  isEffectiveAgainst(pokemon) {
    if (this.type === "Fire" && pokemon.type === "Grass") {
      return true;
    } else if (this.type === "Water" && pokemon.type === "Fire") {
      return true;
    } else if (this.type === "Grass" && pokemon.type === "Water") {
      return true;
    }
    return false;
  }
  isWeakTo(pokemon) {
    if (this.type === "Fire" && pokemon.type === "Water") {
      return true;
    } else if (this.type === "Water" && pokemon.type === "Grass") {
      return true;
    } else if (this.type === "Grass" && pokemon.type === "Fire") {
      return true;
    }
    return false;
  }
}

class FireType extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "Fire";
  }
}

class WaterType extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "Water";
  }
}

class GrassType extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "Grass";
  }
}

class NormalType extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "Normal";
  }
}

class Charmander extends FireType {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.name = "Charmander";
    this.move = "Ember";
  }
}

class Squirtle extends WaterType {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.name = "Squirtle";
    this.move = "Water Gun";
  }
}

class Bulbasaur extends GrassType {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.name = "Bulbasaur";
    this.move = "Vine Whip";
  }
}

class Rattata extends NormalType {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.name = "Rattata";
  }
}

class Pokeball {
  constructor(pokemon) {
    this.pokemon = {};
  }

  throw(pokeThrow) {
    if (
      pokeThrow !== undefined &&
      Object.keys(this.pokemon).length === 0 &&
      this.pokemon.constructor === Object
    ) {
      this.pokemon = pokeThrow;
      console.log(`you caught ${this.pokemon.name}`);
    } else if (
      pokeThrow === undefined &&
      Object.keys(this.pokemon).length > 0
    ) {
      console.log(`GO ${this.pokemon.name}!!`);
    } else if (
      pokeThrow === undefined &&
      Object.keys(this.pokemon).length === 0 &&
      this.pokemon.constructor === Object
    ) {
      console.log(`This ball is empty`);
    }
    return;
  }
  isEmpty() {
    if (
      Object.keys(this.pokemon).length === 0 &&
      this.pokemon.constructor === Object
    ) {
      return true;
    }
    return false;
  }
  contains() {
    if (
      Object.keys(this.pokemon).length === 0 &&
      this.pokemon.constructor === Object
    ) {
      return "empty...";
    }
    return this.pokemon.name;
  }
}

class Trainer {
  constructor(belt) {
    const pokeball1 = new Pokeball();
    const pokeball2 = new Pokeball();
    const pokeball3 = new Pokeball();
    const pokeball4 = new Pokeball();
    const pokeball5 = new Pokeball();
    const pokeball6 = new Pokeball();

    this.belt = {
      pokeball1: pokeball1,
      pokeball2: pokeball2,
      pokeball3: pokeball3,
      pokeball4: pokeball4,
      pokeball5: pokeball5,
      pokeball6: pokeball6,
    };
  }
  catch(pokemon) {
    for (const pokeballs in this.belt) {
      if (this.belt[pokeballs].isEmpty()) {
        this.belt[pokeballs].throw(pokemon);
        return;
      }
    }
    return "All pokeballs full";
  }
  getPokemon(pokemonName) {
    for (const pokeballs in this.belt) {
      if (this.belt[pokeballs].pokemon.name === pokemonName) {
        return this.belt[pokeballs].throw();
      }
    }
  }
}

class Battle {
  constructor(trainer1, trainer2, pokemon1, pokemon2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }
  fight(pokemon) {
    let damageMultiplier = 1;
    let attackString = "";
    if (pokemon === this.pokemon1) {
      if (pokemon.isEffectiveAgainst(this.pokemon2)) {
        damageMultiplier = 1.25;
      } else if (pokemon.isWeakTo(this.pokemon2)) {
        damageMultiplier = 0.75;
      }
      this.pokemon2.takeDamage(damageMultiplier * pokemon.useMove());
    } else if (pokemon === this.pokemon2) {
      if (pokemon.isEffectiveAgainst(this.pokemon1)) {
        damageMultiplier = 1.25;
      } else if (pokemon.isWeakTo(this.pokemon1)) {
        damageMultiplier = 0.75;
      }
      this.pokemon1.takeDamage(damageMultiplier * pokemon.useMove());
    }

    if (damageMultiplier === 1) {
      attackString = `It's fairly effective`;
    } else if (damageMultiplier === 1.25) {
      attackString = `It's super effective`;
    } else if (damageMultiplier === 0.75) {
      attackString = `It's not very effective`;
    }
    console.log(attackString);

    if (this.pokemon1.hasFainted()) {
      console.log(
        `${this.pokemon1.name} has fainted, ${this.pokemon2.name} is the winner`
      );
    } else if (this.pokemon2.hasFainted()) {
      console.log(
        `${this.pokemon2.name} has fainted, ${this.pokemon1.name} is the winner`
      );
    }
    return;
  }
}

module.exports = {
  Pokemon,
  FireType,
  WaterType,
  GrassType,
  NormalType,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
  Pokeball,
  Trainer,
  Battle,
};
