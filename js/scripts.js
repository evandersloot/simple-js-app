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

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      'name' in pokemon &&
      'height' in pokemon &&
      'weight' in pokemon &&
      'type' in pokemon &&
      'healthPoints' in pokemon
    ) {
    pokemonList.push(pokemon);
    } else {
      console.log('That is not a correct entry');
    }
  }

  function getAll() {
    return pokemonList;
    }
// added elements and appended them
  function addListItem(pokemon){
    let pokemonSelect = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonSelect.appendChild(listpokemon);
// added event handler
    button.addEventListener('click', function(event){
      showDetails(pokemon);
    });
  }
// added showDetails and log each click
  function showDetails(pokemon){
      console.log(pokemon.name);
  }


  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
    };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Ralts', height: 1.04, weight: 14.6, type: 'fairy', healthPoints: 60 });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
