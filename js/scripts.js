let pokemonRepository = (function () {
  let pokemonList = []
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

  function getAll() {
    return pokemonList;
    }

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
        //console.log(pokemon);
      });
    })
    .catch(function (e) {
    console.error(e);
    });
  }

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
      for (var i=0; i < details.abilities.length; i++){
      pokemon.abilities.push(details.abilities[i].ability.name);
      }
    })
      .catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon){
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
        console.log(pokemon.name);
    });
  }

  function showModal(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      let modalHeader = $('.modal-header');
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



  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
    showDetails: showDetails,
    showModal: showModal
    };
})();

  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    });
  });
