const card = document.querySelector(".card-container")
console.log('card :>> ', card);


const fetchPokemon = async name => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    let data = await response.json()
    console.log('data :>> ', data);
    card.innerHTML = `
    <div class="card">
                <div class="top">
                    <strong><p class="name">${data.name}</p></strong>
                    <p>${data.stats[0].base_stat} HP</p>
                </div>
                <div class="img-container">
                    <img src="${data.sprites.front_default}" alt="Poke_Image" height="100">
                </div>
                <div class="stats">
                    <p class="attack">${data.stats[1].base_stat} Att</p>
                    <p class="defence">${data.stats[2].base_stat} Def</p>
                </div>
                <div class="ability">
                    <span class="ability-name"><strong>Ability:</strong>${data.abilities[0].ability.name}</span>
                </div>
    </div>
    `
    
}

pokeForm.addEventListener("submit", e => {
    e.preventDefault()
    let pokemonName = document.getElementById("pokeName").value
    console.log(pokemonName);
    fetchPokemon(pokemonName);

})



