//IIFE added
let pokemonRepository = (function () {
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

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add
  };
})();

//getAll statement
  console.log( pokemonRepository.getAll() );
//added a name outside of the IIFE
  pokemonRepository.add({ name: 'Ralts' });
//assicuatuib if the pokemonRepository
let pokemonAll = pokemonRepository.getAll();

//forEach() loop added
pokemonAll.forEach(function(pokemon){
document.write(pokemon.name + ' (height: ' + pokemon.height +  ' weight: ' + pokemon.weight + ')' );
statement(pokemon.height, pokemon.weight);
document.write('<br><br>');
});

function statement(height, weight){
  if (height <= 2) {
    document.write(' This Pokemon is kind of small...');
  }else if (height > 2 && height < 3){
    document.write(' This is an average Pokemon,');
  }else if (height > 3) {
    document.write(' This Pokemon is LARGE and in charge,');
  }else {
    document.write(' Not sure about this one,');
  }
  if (weight <= 15){
    document.write(' but is also slight.');
  }else if (weight > 15 && weight < 35){
    document.write(' but is fit!');
  }else if (weight > 35){
    document.write(' but may want to watch its weight!');
  }else {
    document.write(' we will check on it.');
  }
}
