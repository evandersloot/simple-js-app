// add blank array
// var pokemonList = [];

// add objects to array
let pokemonList = [
  {
    name: 'Charmander',
    height: 2.00,
    weight: 18.7,
    type: 'fire',
    healthPoints: 70,
  },
  {
    name: 'BeeDrill',
    height: 3.03,
    weight: 65,
    type: 'bug',
    healthPoints: 120,
  },
  {
    name: 'Shuppet',
    height: 2.00,
    weight: 5.2,
    type: 'ghost',
    healthPoints: 60,
  },
  {
    name: 'Galvantula',
    height: 2.07,
    weight: 31.5,
    type: ['electric', 'bug'],
    healthPoints: 90,
  },
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')');
    console.log(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' );
  }
