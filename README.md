# Pokemon Battle Game

Welcome to the Pokemon Battle Simulator! In this simple text-based game, you can create trainers, catch Pokemon, and engage in exciting battles using their unique moves and types.

**Classes**
Pokemon
A base class representing a Pokemon with the following properties and methods:

Properties:

name: The name of the Pokemon.
hitPoints: The amount of health the Pokemon has.
attackDamage: The amount of damage the Pokemon can inflict.
move: The move the Pokemon uses in battle (defaults to "tackle").
Methods:

takeDamage(amount): Reduces the Pokemon's health by the given amount.
useMove(): Returns the Pokemon's attack damage and logs an attack message.
hasFainted(): Returns true if the Pokemon's health is zero or less, indicating it has fainted.
Fire, Water, Grass, Normal
Derived classes representing different types of Pokemon, each with their strengths and weaknesses:

Properties:

type: A string indicating the Pokemon's type.
Methods:

isEffectiveAgainst(pokemon): Returns true if the current Pokemon is effective against the given Pokemon.
isWeakTo(pokemon): Returns true if the current Pokemon is weak against the given Pokemon.
Charmander, Squirtle, Bulbasaur, Rattata
Derived classes extending from Fire, Water, Grass, and Normal classes respectively:

Charmander: A FirePokemon with the move "ember".
Squirtle: A WaterPokemon with the move "water gun".
Bulbasaur: A GrassPokemon with the move "vine whip".
Rattata: A NormalPokemon.
Pokeball
A class representing a Pokeball with the following methods:

Methods:

throw(pokemon): Throws the Pokeball to capture or release a Pokemon. Logs appropriate messages.
isEmpty(): Returns true if the Pokeball is empty.
contains(): Returns the name of the Pokemon stored in the Pokeball or "empty" if it's empty.
Trainer
A class representing a Trainer with a belt to store Pokeballs:

Properties:

belt: An array representing the Trainer's belt of Pokeballs.
Methods:

catch(pokemon): Tries to catch a Pokemon using an empty Pokeball. Adds the Pokemon to the belt.
getPokemon(pokemonName): Retrieves a specific Pokemon from the belt using its name.
Battle
A class for battling Pokemon:

Methods:

fight(attacker, defender): Simulates a battle between two trainers' Pokemon. Takes strengths and weaknesses into account.
How to Use
Create trainers and their Pokemon.
Catch Pokemon using Pokeballs.
Engage in battles by selecting the attacking and defending Pokemon.
Battle messages will indicate the actions and outcomes.
Continue battling until one of the Pokemon faints.
Have fun battling your Pokemon and becoming the ultimate Trainer in this text-based Pokemon Battle Simulator!
