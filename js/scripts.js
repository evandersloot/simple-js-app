/* eslint-env jquery */
/*eslint no-redeclare: "off"*/
//IIFE
let pokemonRepository = (function () {
  let pokemonList = []
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//adding Pokemon
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon
    ) {
    pokemonList.push(pokemon);
    } else {
      console.log('That is not a correct entry');
    }
  }

//retrieving from list
  function getAll() {
    return pokemonList;
    }

//create button for each item
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.list-group');
    let listPokemon = document.createElement('li');
    //adding group-list-item on li element
    listPokemon.classList.add('list-group-item');

    let button = document.createElement('button');
    button.innerText = pokemon.name.toUpperCase();
    //adding btn on button element
    button.classList.add('btn', 'btn-block');
    button.setAttribute('data-target', '#pokemonModal');
    button.setAttribute('data-toggle', 'modal');

    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

//retrieve list and details from API
  function loadList() {
    return fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    })
    .catch(function (e) {
    console.error(e);
    });
  }

//loading details from API
    function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (details) {
      pokemon.imageUrlFront = details.sprites.front_default;
      pokemon.imageUrlBack = details.sprites.back_default;
      pokemon.height = details.height;
      pokemon.weight = details.weight;
      pokemon.types = [];
      for (var i=0; i < details.types.length; i++){
      pokemon.types.push(details.types[i].type.name);
    }
      pokemon.abilities = [];
      for (var i=0; i < details.abilities.length; i++) {
      pokemon.abilities.push(details.abilities[i].ability.name);
      }
    })
      .catch(function (e) {
      console.error(e);
    });
  }

//showing details
  function showDetails(pokemon){
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
        console.log(pokemon.name);
    });
  }

//showing modal with details
  function showModal(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      let modalTitle = $('.modal-title');
      let modalBody = $('.modal-body');

      modalTitle.empty();
      modalBody.empty();

      let namePokemon = $('<h1>' + pokemon.name + '</h1>');
      let imagePokemonFront = $('<img class="modal-img" style="width:20%">');
      imagePokemonFront.attr('src', pokemon.imageUrlFront);
      let imagePokemonBack = $('<img class="modal-img" style="width:20%">');
      imagePokemonBack.attr('src', pokemon.imageUrlBack);
      let heightPokemon = $('<p>' + 'Height: ' + pokemon.height + '</p>');
      let weightPokemon = $('<p>' + 'Weight: ' + pokemon.weight + '</p>');
      let typesPokemon = $('<p>' + 'Type: ' + pokemon.types + '</p>');
      let abilitiesPokemon = $('<p>' + 'Abilities: ' + pokemon.abilities + '</p>');

      modalTitle.append(namePokemon);
      modalBody.append(imagePokemonFront);
      modalBody.append(imagePokemonBack);
      modalBody.append(heightPokemon);
      modalBody.append(weightPokemon);
      modalBody.append(typesPokemon);
      modalBody.append(abilitiesPokemon);

      $('#pokemonModal').modal('toggle');
    });
  }

//Search for Pokemon
  function search() {
    let searchPokemon = document.querySelector('#search-bar');

    searchPokemon.addEventListener('input', function() {

      let pokemonList = document.querySelectorAll('.list-group-item');
      let searchItem = searchPokemon.value.toLowerCase();

      pokemonList.forEach(function(pokemon) {
        if (pokemon.innerText.toLowerCase().indexOf(searchItem) > -1) {
          pokemon.style.display = '';
        } else {
          pokemon.style.display = 'none';
        }
      });
    });
  }

  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
    showDetails: showDetails,
    showModal: showModal,
    search: search
    };
})();

  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    });
  });
pokemonRepository.search();
