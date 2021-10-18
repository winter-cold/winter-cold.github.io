const searchPokemonForm = document.querySelector("form");


async function searchPokemon(e) {
  e.preventDefault();
  const pokeApiEndpoint = "https://pokeapi.co/api/v2/pokemon/";
  const searchedPokemon = document.querySelector("input[name = 'pokemon']").value;

  const response = await fetch(pokeApiEndpoint + searchedPokemon);
  const pokemonInfo = await response.json();
  renderPokemonCard(pokemonInfo);
}

searchPokemonForm.addEventListener("submit", searchPokemon);

function renderPokemonCard(pokemon) {
  const pokemonDetailsContainer = document.querySelector(".pokemon_container");
  pokemonDetailsContainer.innerHTML = `
 <center> <h2>Nome: ${pokemon.name}</h2>
  <img src ="${pokemon.sprites.front_default}" alt= "${pokemon.name}Front" width= 150px;/>
  <h3>Tipo: ${pokemon.types[0].type.name}</h3>
  <h3>Abilità: ${pokemon.abilities[0].ability.name}</h3>
  <h3>Peso: ${pokemon.weight}</h3></center>
  `
}
