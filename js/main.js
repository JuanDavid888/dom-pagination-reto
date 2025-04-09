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

// Denominamos los cambios cuando empiece la página
document.addEventListener('DOMContentLoaded', () => {
    let buttons = allButtons()
    buttons.map(btn => pages.appendChild(btn))
})

// Sección de botones
let pages = document.getElementById('pagination')

const allButtons = () => { // Lugar para crear botones
    // Sección agregar
    let button1 = document.createElement('button')
    button1.textContent = 1
    button1.classList.add("button", "btn-opc1")

    let button2 = document.createElement('button')
    button2.textContent = 2
    button2.classList.add("button", "btn-opc2")

    // Sección editar
    button2.addEventListener('click', () => {
        button1.style.backgroundColor = "#ffffff"
        button2.style.backgroundColor = "#f58133"
    })
    button1.addEventListener('click', () => {
        // Resetear el color de fondo de ambos botones
        button1.style.backgroundColor = "#f58133";
        button2.style.backgroundColor = "#ffffff"; // Aquí cambia el color de fondo del botón 2
    });

    return [button1, button2]
}