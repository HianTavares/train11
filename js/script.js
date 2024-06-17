const pokemonName = document.querySelector('.pokemon-name');
const pokemonNumber = document.querySelector('.pokemon-number');
const pokemonImage = document.querySelector('.pokemon-image');

let currentPokemonId = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}


const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon)

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

    console.log(data)
}
renderPokemon(1)

const next = () => {
    currentPokemonId++;
    renderPokemon(currentPokemonId);
}

const previous = () => {
    currentPokemonId--;
    renderPokemon(currentPokemonId);
}

// Initial render
renderPokemon(currentPokemonId);