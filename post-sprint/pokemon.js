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
    constructor (pokemon) {
    this.pokemon = {}
    }

    throw(pokeThrow) {
    if (pokeThrow !== undefined && Object.keys(this.pokemon).length === 0 &&
    this.pokemon.constructor === Object) {
    this.pokemon = pokeThrow
    console.log(`you caught ${this.pokemon.name}`);
    } else if (pokeThrow === undefined && Object.keys(this.pokemon).length > 0) {
        console.log(`GO ${this.pokemon.name}!!`)
    } else if (pokeThrow === undefined && Object.keys(this.pokemon).length === 0 &&
    this.pokemon.constructor === Object) {
        console.log(`This ball is empty`)
    }
    return 
}
    isEmpty() {
        if (Object.keys(this.pokemon).length === 0 && this.pokemon.constructor === Object) {
            return true
    }
    return false

}
contains() {
    if (Object.keys(this.pokemon).length === 0 && this.pokemon.constructor === Object) {
       return  'empty...'
       
    }
    return this.pokemon.name
}
}

class Trainer {
 constructor(belt) {
    const pokeball1 = new Pokeball
    const pokeball2 = new Pokeball
    const pokeball3 = new Pokeball
    const pokeball4 = new Pokeball
    const pokeball5 = new Pokeball
    const pokeball6 = new Pokeball
    
 this.belt = {pokeball1: pokeball1, pokeball2: pokeball2, pokeball3: pokeball3, pokeball4: pokeball4, pokeball5: pokeball5, pokeball6: pokeball6}
 }
 catch(pokemon) {
    console.log(this.belt, 'belt')
    for (const pokeballs in this.belt) {
      console.log(this.belt[pokeballs].pokemon, 'empty')
      console.log(this.belt[pokeballs].isEmpty())
       if (this.belt[pokeballs].isEmpty()) {
        this.belt[pokeballs].throw(pokemon)
        return
       // this.belt[pokeballs] = this.belt[pokeballs].throw(pokemon)
       // console.log(this.belt[pokeballs])
        //use pokeball methods aka contains or is empty
    }
 }
 return 'All pokeballs full'
}
getPokemon(pokemonName) {
  for (const pokeballs in this.belt) {
    console.log(pokeballs)
    console.log(this.belt[pokeballs].pokemon.name)
    if (this.belt[pokeballs].pokemon.name === pokemonName) {
      return this.belt[pokeballs].throw()
    }
  }
}
}

class Battle {
  constructor(trainer1, trainer2, pokemon1, pokemon2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2
  }
  fight(pokemon) {
  if(pokemon === this.pokemon1) {
  }
    else if (pokemon === this.pokemon2) {
  }
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
  Battle
};
