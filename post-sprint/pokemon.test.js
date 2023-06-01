const Pokemon = require("./pokemon")

describe('pokemon', () => {
   test('should return a string of function', () => {
 expect(typeof Pokemon).toBe('function')
});
test('returns a pokemon object with a default move of tackle', () => {
    const newPokemon = new Pokemon('Pikachu', 100, 20)
    console.log(newPokemon)
    expect(newPokemon.move).toBe('tackle')
});
test('should take a number and reduce its health by the number given', () => {
    const newPokemon = new Pokemon('Pikachu', 100, 20)
   newPokemon.takeDamage(50)
   console.log(newPokemon)
   expect(newPokemon.hitPoints).toBe(50)
});
test('should return the Pokemons attackDamage and console log pokemons move', () => {
    const newPokemon = new Pokemon('Pikachu', 100, 20, 'headbutt')
   const actual = newPokemon.useMove() 
    console.log(newPokemon)
    expect(actual).toBe(20)
});
test('hasFainted will return a boolean based on whether the Pokemon has fainted', () => {
    const newPokemon = new Pokemon('Pikachu', 100, 20, 'headbutt')
    let actual = newPokemon.hasFainted()
    expect(actual).toBe(false)
    newPokemon.takeDamage(150)
    const newActual = newPokemon.hasFainted()
    console.log(actual)
    expect(newActual).toBe(true)
});

});