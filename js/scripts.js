let pokemonRepository = (function () {
  let pokemonList = []
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  //modal code
  let modalContainer = document.querySelector('#modal-container');
  let modal = modalContainer.querySelector('.modal');
  //add modal features
  let closeModal = document.createElement('button');
  closeModal.classList.add('close-modal');
  //add modal elements
  let namePokemon = document.createElement('h1');
  namePokemon.classList.add('namePokemon');

  let heightPokemon = document.createElement('p');
  heightPokemon.classList.add('heightPokemon');

  let weightPokemon = document.createElement('p');
  weightPokemon.classList.add('weightPokemon');

  let typePokemon = document.createElement('p');
  typePokemon.classList.add('typePokemon');

  let imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container');

  let imagePokemon = document.createElement('img');
  imagePokemon.classList.add('imagePokemon');

  //append children
  modal.appendChild(closeModal);
  modal.appendChild(namePokemon);
  modal.appendChild(heightPokemon);
  modal.appendChild(weightPokemon);
  modal.appendChild(typePokemon);
  modal.appendChild(imageContainer);
  imageContainer.appendChild(imagePokemon);

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
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
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerHTML = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    button.addEventListener('click', function(event){
      showDetails(pokemon);
    });
  }
// show and hide modal functions
  function showModal() {
    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }
  // closeModal.addEventListener('click', hideModal);
  closeModal.addEventListener('click', hideModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
 //Display modal content
  function showDetails(pokemon){
    loadDetails(pokemon).then(function () {
      namePokemon.innerHTML = pokemon.name.toUpperCase();
      weightPokemon.innerHTML = 'Weight: ' + pokemon.weight;
      heightPokemon.innerHTML = 'Height: ' + pokemon.height;
      typePokemon.innerHTML = 'Type: ' + pokemon.types.toUpperCase();
      imagePokemon.src = pokemon.imageUrl;
      closeModal.innerHTML = 'x';
        showModal();
        console.log(pokemon.name);
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
        console.log(pokemon);
      });
    })
    .catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types[0].type.name;
    })
    .catch(function (e) {
      console.error(e);
    });
  }

  return {
    getAll: getAll,
    add: add,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
    hideModal: hideModal,
    showModal: showModal,
    showDetails: showDetails
    };
})();

  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    });
  });
