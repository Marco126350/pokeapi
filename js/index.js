const pokemonContainer = document.querySelector('.pokemon-container');

function FetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
    });
  
}

function fetchPokemons(number) {
  for (let i = 1; i <= number; i++){
    FetchPokemon(i);
  }
}


function createPokemon(pokemon) {
  const card = document.createElement('article');
  card.classList.add('card');

  const imgBg = document.createElement('img');
  imgBg.setAttribute("src","Assets/img/bg-pattern-card.svg") ;
  imgBg.classList.add ("card-header");

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.other.dream_world.front_default;
  sprite.classList.add("card-body-img");

  cardBody.appendChild(sprite);

  const name = document.createElement('h1');
  name.classList.add("card-body-title");
  name.textContent = pokemon.name;

  const span = document.createElement("span");
  span.textContent = ` ${pokemon.stats[0].base_stat} HP`;

  const bodyText = document.createElement("p");
  bodyText.classList.add("card-body-text");
  bodyText.textContent = `${pokemon.base_experience} Exp`;



  const footer = document.createElement("div");
  footer.classList.add("card-footer");
  

  const ataquediv = document.createElement("div");
  ataquediv.classList.add("card-footer-social");

  const tituloAtaque = document.createElement("h3");
  tituloAtaque.textContent = `${pokemon.stats[1].base_stat}K`
  
  const ataque = document.createElement("p");
  ataque.textContent = "Ataque";



  card.appendChild(imgBg);
  cardBody.appendChild(name);
  cardBody.appendChild(bodyText);
  name.appendChild(span);
  card.appendChild(cardBody);

  footer.appendChild(ataquediv);
  ataquediv.appendChild(tituloAtaque);
  ataquediv.appendChild(ataque);
  card.appendChild(footer);

  pokemonContainer.appendChild(card);
}

fetchPokemons(20);