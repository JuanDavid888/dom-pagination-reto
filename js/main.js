let url = 'https://dattebayo-api.onrender.com/characters';
let characters = [];
let currentPage = 1; // Página actual
const pageSize = 4; // Número de personajes por página
const totalPages = 5; // Límite de páginas

// Función para obtener los datos de la API
const getData = async () => {
    let response = await fetch(url);
    let result = await response.json();
    characters = result.characters; // Definimos que la data del api se almacene en la variable
};

// Función para mostrar los personajes según la página actual
const showCharacters = () => {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Limpiamos el contenedor de las cartas

    // Cálculo de los índices según la página actual
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageCharacters = characters.slice(startIndex, endIndex);

    // Mostramos los personajes de la página actual
    pageCharacters.forEach(chr => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img class="card-image" src="${chr.images?.[0]}" alt="${chr.name}">
            <div class="card-content">
                <h2 class="card-title">${chr.name}</h2>
                <p class="card-head">Clan: ${chr.personal?.clan || 'Desconocido'}</p>
                <p class="card-description">Aldea: ${chr.personal.affiliation?.[0] || 'Desconocido'}</p>
            </div>
        `;
        container.appendChild(card);
    });
};

// Función para actualizar los botones de paginación
const updatePagination = () => {
    const pages = document.getElementById('pagination');
    pages.innerHTML = ''; // Limpiamos los botones de paginación antes de volver a crearlos

    // Crear los botones
    let button1 = document.createElement('button');
    button1.textContent = currentPage;
    button1.classList.add("button", "btn-opc1");

    let button2 = document.createElement('button');
    button2.textContent = 'Next';
    button2.classList.add("button", "btn-opc2");

    let button3 = document.createElement('button');
    button3.textContent = 'Back';
    button3.classList.add("button", "btn-opc3");

    // Acción para el botón 'Next' (incrementa la página)
    button2.addEventListener('click', () => {
        if (currentPage < totalPages) { // Verificamos si la página actual es menor que el límite
            currentPage++;
            updatePagination();
            showCharacters();
        }
    });

    // Acción para el botón 'Back' (decrementa la página)
    button3.addEventListener('click', () => {
        if (currentPage > 1) { // Verificamos si la página actual es mayor que 1
            currentPage--;
            updatePagination();
            showCharacters();
        }
    });

    // Agregar los botones de paginación al contenedor
    pages.appendChild(button3);
    pages.appendChild(button1);
    pages.appendChild(button2);
};

// Ejecutamos las funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    getData().then(() => {
        updatePagination(); // Actualizamos la paginación al cargar los datos
        showCharacters(); // Mostramos los personajes de la página actual
    });
});