const consultarPokemon = (id, number) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(url).then(response =>{
        return response.json();
    })
    .then(data => {
        //console.log(data);
        pintarPokemon(data,number);
    })
    .catch(error => {
        console.log('Error:', error);
    })
};

const btnSeleccionar = () => {
    let primerPokemon = Math.round(Math.random() * 150);
    let segundoPokemon = Math.round(Math.random() * 150);
    consultarPokemon(primerPokemon,1)
    consultarPokemon(segundoPokemon,2);
};

btnSeleccionar();

const lista = document.getElementById("listarpokemon");

const pintarPokemon = (data, id) => {
    let item = lista.querySelector(`#pok-${id}`);
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
    item.getElementsByTagName("p")[0].innerHTML = data.name;
};

