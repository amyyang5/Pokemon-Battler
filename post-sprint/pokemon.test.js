const {
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
} = require("./pokemon");

describe("pokemon", () => {
  test("should return a string of function", () => {
    expect(typeof Pokemon).toBe("function");
  });
  test("returns a pokemon object with a default move of tackle", () => {
    const newPokemon = new Pokemon("Pikachu", 100, 20);
    expect(newPokemon.move).toBe("Tackle");
  });
  test("should take a number and reduce its health by the number given", () => {
    const newPokemon = new Pokemon("Pikachu", 100, 20);
    newPokemon.takeDamage(50);
    expect(newPokemon.hitPoints).toBe(50);
  });
  test("should return the Pokemons attackDamage and console log pokemons move", () => {
    const newPokemon = new Pokemon("Pikachu", 100, 20, "headbutt");
    const actual = newPokemon.useMove();
    expect(actual).toBe(20);
  });
  test("hasFainted will return a boolean based on whether the Pokemon has fainted", () => {
    //arrange
    const newPokemon = new Pokemon("Pikachu", 100, 20, "headbutt");
    //act
    let actual = newPokemon.hasFainted();
    //assert
    expect(actual).toBe(false);
    //act
    newPokemon.takeDamage(150);
    const newActual = newPokemon.hasFainted();
    //assert
    expect(newActual).toBe(true);
  });
  test("Checking new types", () => {
    //arrange + act
    const firePokemon = new FireType("Flame", 80, 25, "Fire");
    const waterPokemon = new WaterType("Water", 80, 25, "Water");
    const grassPokemon = new GrassType("Earth", 80, 25, "Grass");
    const normalPokemon = new NormalType("Normal", 80, 25, "Normal");
    //assert
    expect(firePokemon.type).toBe("Fire");
    expect(waterPokemon.type).toBe("Water");
    expect(grassPokemon.type).toBe("Grass");
    expect(normalPokemon.type).toBe("Normal");
  });
  test("Checking new types", () => {
    //arrange + act
    const firePokemon = new FireType("Flame", 80, 25, "Fire");
    const waterPokemon = new WaterType("Water", 80, 25, "Water");
    const grassPokemon = new GrassType("Earth", 80, 25, "Grass");
    const normalPokemon = new NormalType("Normal", 80, 25, "Normal");

    //assert - fire
    expect(firePokemon).toBeInstanceOf(Pokemon);

    expect(firePokemon.isEffectiveAgainst(grassPokemon)).toBe(true);
    expect(firePokemon.isEffectiveAgainst(normalPokemon)).toBe(false);

    expect(firePokemon.isWeakTo(waterPokemon)).toBe(true);
    expect(firePokemon.isWeakTo(normalPokemon)).toBe(false);

    //assert - water
    expect(waterPokemon).toBeInstanceOf(Pokemon);

    expect(waterPokemon.isEffectiveAgainst(firePokemon)).toBe(true);
    expect(waterPokemon.isEffectiveAgainst(normalPokemon)).toBe(false);

    expect(waterPokemon.isWeakTo(grassPokemon)).toBe(true);
    expect(waterPokemon.isWeakTo(normalPokemon)).toBe(false);

    //assert - grass
    expect(grassPokemon).toBeInstanceOf(Pokemon);

    expect(grassPokemon.isEffectiveAgainst(waterPokemon)).toBe(true);
    expect(grassPokemon.isEffectiveAgainst(normalPokemon)).toBe(false);

    expect(grassPokemon.isWeakTo(firePokemon)).toBe(true);
    expect(grassPokemon.isWeakTo(normalPokemon)).toBe(false);

    //assert - normal
    expect(normalPokemon).toBeInstanceOf(Pokemon);

    expect(normalPokemon.isEffectiveAgainst(grassPokemon)).toBe(false);
    expect(normalPokemon.isEffectiveAgainst(normalPokemon)).toBe(false);

    expect(normalPokemon.isWeakTo(waterPokemon)).toBe(false);
    expect(normalPokemon.isWeakTo(normalPokemon)).toBe(false);
  });
  test("Checking new types", () => {
    //arrange + act
    const charmander = new Charmander("", 30, 15);
    const squirtle = new Squirtle("", 45, 10);
    const bulbasaur = new Bulbasaur("", 45, 10);
    const rattata = new Rattata("", 45, 10);

    //assert - Charmander
    expect(charmander).toBeInstanceOf(FireType);
    expect(charmander).toBeInstanceOf(Pokemon);
    expect(charmander.type).toBe("Fire");
    expect(charmander.move).toBe("Ember");

    //assert - Squirtle
    expect(squirtle).toBeInstanceOf(WaterType);
    expect(squirtle).toBeInstanceOf(Pokemon);
    expect(squirtle.type).toBe("Water");
    expect(squirtle.move).toBe("Water Gun");

    //assert - Bubasaur
    expect(bulbasaur).toBeInstanceOf(GrassType);
    expect(bulbasaur).toBeInstanceOf(Pokemon);
    expect(bulbasaur.type).toBe("Grass");
    expect(bulbasaur.move).toBe("Vine Whip");

    //assert - Rattata
    expect(rattata).toBeInstanceOf(NormalType);
    expect(rattata).toBeInstanceOf(Pokemon);
    expect(rattata.type).toBe("Normal");
    expect(rattata.move).toBe("Tackle");
  });
  test('if the pokeball is empty it will capture the passed Pokemon', () => {
      // arrange 
     const consoleSpy = jest.spyOn(console, 'log');
     const newPokeball = new Pokeball
     const rattata = new Rattata("", 45, 10);
     newPokeball.throw(rattata)
     console.log(newPokeball)
     expect(newPokeball.pokemon).toBe(rattata)
     newPokeball.throw()
     expect(consoleSpy).toHaveBeenCalledWith(`GO ${newPokeball.pokemon.name}!!`)
     const consoleSpy2 = jest.spyOn(console, 'log');
     const newPokeball2 = new Pokeball
     newPokeball2.throw()
     console.log(consoleSpy)
     expect(consoleSpy2).toHaveBeenCalledWith(`This ball is empty`)
 });
 test('Should return a boolean representing whether or not a Pokemon is stored inside it', () => {
    const charmander = new Charmander("", 30, 15);
    
    //arrange 
     const newPokeball = new Pokeball
     //act
    let actual = newPokeball.isEmpty();
    //assert
    expect(actual).toBe(true);
    newPokeball.throw(charmander)
    //act
    const newActual = newPokeball.isEmpty();
    //assert
    expect(newActual).toBe(false);
 });
 test('Should return the name of the Pokemon that is stored or if the pokeball is empty is should return "empty ..."', () => {
    const newPokeball = new Pokeball
    const rattata = new Rattata("", 45, 10);
    // act
    const actual = newPokeball.contains()
    expect(actual).toBe('empty...') 
    newPokeball.throw(rattata)
    const newActual = newPokeball.contains()
    expect(newActual).toBe(newPokeball.pokemon.name)
 });
  test('should use one of its empty Pokeballs throw method to catch the Pokemon', () => {
    const newTrainer = new Trainer
    console.log(newTrainer.belt)
    const pokeball1 = new Pokeball
    const pokeball2 = new Pokeball
    const pokeball3 = new Pokeball
    const pokeball4 = new Pokeball
    const pokeball5 = new Pokeball
    const pokeball6 = new Pokeball
    
    const emptyPokeball = ({
      pokeball1: pokeball1,
      pokeball2: pokeball2,
      pokeball3: pokeball3,
      pokeball4: pokeball4,
      pokeball5: pokeball5,
      pokeball6: pokeball6
  })
    expect(newTrainer.belt).toEqual(emptyPokeball);
  const rattata = new Rattata("", 45, 10);
  newTrainer.catch(rattata)
  const emptyPokeball2 = ({
    pokeball1: rattata,
    pokeball2: pokeball2,
    pokeball3: pokeball3,
    pokeball4: pokeball4,
    pokeball5: pokeball5,
    pokeball6: pokeball6
  })
  console.log(emptyPokeball2)
  console.log(newTrainer.belt)
  expect(newTrainer.belt[pokeball1]).toEqual(emptyPokeball2[pokeball1])
});
test('returns All pokeballs full when belt is full', () => {
  const newTrainer = new Trainer
    const rattata = new Rattata("", 45, 10);
    newTrainer.catch(rattata)
    newTrainer.catch(rattata)
    newTrainer.catch(rattata)
    newTrainer.catch(rattata)
    newTrainer.catch(rattata)
    newTrainer.catch(rattata)
   
  expect(newTrainer.catch(rattata)).toBe('All pokeballs full')  
});
test('takes name and searches for the pokemon in the belt, uses the pokeballs throw and returns the wanted pokemon', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const newTrainer = new Trainer
  const rattata = new Rattata("", 45, 10);
  newTrainer.catch(rattata)
  newTrainer.getPokemon('Rattata')
  expect(consoleSpy).toHaveBeenCalledWith(`GO Rattata!!`)
});
 test('testing battle features', () => {
  const alex = new Trainer
  const ash = new Trainer
  const squirtle = new Squirtle
  const charmander = new Charmander
  alex.catch(squirtle)
  ash.catch(charmander)
  console.log(alex)
  console.log(ash)
  expect(alex.belt.).toBe()
 });
});

