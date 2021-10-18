const searchPokemonForm = document.querySelector("form");


async function searchPokemon(e) {
  e.preventDefault();
  const pokeApiEndpoint = "https://pokeapi.co/api/v2/pokemon/";
  const searchedPokemon = document.querySelector("input[name = 'pokemon']").value;

  const response = await fetch(pokeApiEndpoint + searchedPokemon);
  const pokemonInfo = await response.json();
  renderPokemonStats(pokemonInfo);
}

searchPokemonForm.addEventListener("submit", searchPokemon);

/*function renderPokemonCard(pokemon) {
  const pokemonDetailsContainer = document.querySelector(".pokemon_container");
  pokemonDetailsContainer.innerHTML = `
 <center> <h2>Nome: ${pokemon.name}</h2>
  <img src ="${pokemon.sprites.front_default}" alt= "${pokemon.name}Front" width= 150px;/>
  <h3>Tipo: ${pokemon.types[0].type.name}</h3>
  <h3>Abilità: ${pokemon.abilities[0].ability.name}</h3>
  <h3>Peso: ${pokemon.weight}</h3></center>
  `
}*/

function renderPokemonStats(pokemonData){
  const {abilities, height, name, sprites, types, weight} = pokemonData;
const searchResult = document.querySelector(".pokemon_container");
searchResult.innerHTML = `
<img src="${sprites.front_default}" alt="${name}" />
<h2>${name}</h2>
<ul>
<li>Height: ${height}</li>
<li>Weight: ${weight}</li>
<li>Abilities: ${getPokemonPropertiesList(abilities, "ability")}</li>
<li>Types: ${getPokemonPropertiesList(types, "type", ", ")}</li>
</ul>
`

}

function getPokemonPropertiesList(properties, propertyName, customSeparator = ", ") {
  return properties.map(property => {
    return property[propertyName].name;
  }).join(customSeparator)
}
