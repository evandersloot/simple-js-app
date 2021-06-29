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

// if-else loop. was able to figure out the nesting of two different variables

for (let i = 0; i < pokemonList.length; i++) {
      document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height +  ' weight: ' + pokemonList[i].weight + ')' );
    if (pokemonList[i].height <= 2) {
      document.write(' This Pokemon is kind of small...');
    }else if (pokemonList[i].height > 2 && pokemonList[i].height < 3){
      document.write(' This is an average Pokemon,');
    }else {
      document.write('This Pokemon is LARGE and in charge,');
    }
    if (pokemonList[i].weight <= 15) {
      document.write(' but is also slight.');
    }else if (pokemonList[i].weight > 15 && pokemonList[i].weight < 35) {
      document.write(' but is fit!');
    }else {
      document.write(' but may want to watch its weight!');
    }
      document.write('<br><br>');
  }
