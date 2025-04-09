// Sección de cartas principales
let url = 'https://dattebayo-api.onrender.com/characters'
let characters = []

const getData = async() => { // Traemos la Api dattebayo de los personajes
    let response = await fetch(url) 
    let result = await response.json()
    characters = result.characters;
    console.log("Personajes a utilizar del api:");
    console.log(result); // Mostramos los personajes a utilizar
}

// Colocamos una función para reemplazar la data de las 4 cartas principales
const showCharacters = () => {
    const container = document.getElementById('cards-container') // Obtenemos el contenedor padre de las cartas de personajes
    container.innerHTML = '' // Lo eliminamos
    characters = characters.slice(0,4) // Definimos 4 personajes para la primer 'página'
    characters.forEach(chr => { // Dentro de cada personaje, creamos un div y le ponemos la clase 'card'
        const card = document.createElement('div')
        card.classList.add('card')

        // Reemplazamos la info ingresando a la clase y colocando la nueva
        card.innerHTML= `
        <img class="card-image" src="${chr.images?.[0]}" alt="${chr.name}">
        <div class="card-content">
            <h2 class="card-title">${chr.name}</h2>
            <p class="card-head">Clan: ${chr.personal?.clan || 'Desconocido'}</p>
            <p class="card-description">Aldea: ${chr.personal.affiliation?.[0] || 'Desconocido'}</p>
        </div>
        `
        container.appendChild(card) // Al contenedor padre, le pasamos esta info para que la retorne y coloque
    })
}
// Ejecutamos la función para cargar los datos primero
getData().then(() => {
    // Luego de obtener los datos, mostramos los personajes
    showCharacters()
});