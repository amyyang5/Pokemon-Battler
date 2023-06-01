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
};
