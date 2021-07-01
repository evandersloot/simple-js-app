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

//forEach() loop added
pokemonList.forEach(function(pokemon){
document.write(pokemon.name + ' (height: ' + pokemon.height +  ' weight: ' + pokemon.weight + ')' );
statement(pokemon.height, pokemon.weight);
document.write('<br><br>');
});

function statement(height, weight){
if (height <= 2) {
  document.write(' This Pokemon is kind of small...');
}else if (height > 2 && height < 3){
  document.write(' This is an average Pokemon,');
}else {
  document.write('This Pokemon is LARGE and in charge,');
}
if (weight <= 15) {
  document.write(' but is also slight.');
}else if (weight > 15 && weight < 35) {
  document.write(' but is fit!');
}else {
  document.write(' but may want to watch its weight!');
}
}
