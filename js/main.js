// Sección de cartas principales
const getData = async() => {
    let url = new URL('https://dattebayo-api.onrender.com/characters') // Traemos la Api dattebayo de los personajes
    let response = await fetch(url) 
    let result = await response.json()
    console.log("Personajes a utilizar del api:");
    console.log(result); // Mostramos los personajes a utilizar
}

// Se declaran funciones para cambiar el contenido de las cartas de los personajes
const changeCard1 = () => { 
    let img1 = document.getElementById('image1') // Obtenemos el valor de la imagen por id
    let img = img1.src = 'https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png' // Cambiamos el src (dirección de la imagen predeterminada)
    img1.addEventListener('click',() => { // Al hacer click, cambiamos la iamgen por su segunda opción dependiendo cual esté seleccionada
        if (img1.src === img) {
            img1.src = 'https://static.wikia.nocookie.net/naruto/images/7/7d/Naruto_Part_II.png';
        } else {
            img1.src = img;
        }
    })

    let title1 = document.getElementById('title1') // Accedemos al titulo
    title1.textContent = 'Naruto Uzumaki' // Cambiamos su valor 

    let clan1 = document.getElementById('clan1') // Accedemos al titulo auxiliar
    clan1.textContent = 'Clan: Uzumaki' // Cambiamos su valor 

    let village1 = document.getElementById('village1') // Accedemos al texto adicional
    village1.textContent = 'Proviene de la Aldea oculta de la hoja (Konohagakure)' // Cambiamos su valor 
}

const changeCard2 = () => {
    let img2 = document.getElementById('image2')
    let img = img2.src = 'https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png'
    img2.addEventListener('click',() => {
        if (img2.src === img) {
            img2.src = 'https://static.wikia.nocookie.net/naruto/images/1/13/Sasuke_Part_2.png';
        } else {
            img2.src = img;
        }
    })

    let title2 = document.getElementById('title2')
    title2.textContent = 'Sasuke Uchiha'

    let clan2 = document.getElementById('clan2')
    clan2.textContent = 'Clan: Uchiha'

    let village2 = document.getElementById('village2')
    village2.textContent = 'Proviene de la Aldea oculta de la hoja (Konohagakure)'
}

const changeCard3 = () => {
    let img3 = document.getElementById('image3')
    let img = img3.src = 'https://static.wikia.nocookie.net/naruto/images/f/fd/Madara.png'
    img3.addEventListener('click',() => {
        if (img3.src === img) {
            img3.src = 'https://i.blogs.es/faf905/actor-de-doblaje-madara-uchiha-naruto-netflix/500_333.jpeg';
        } else {
            img3.src = img;
        }
    })
    
    let title3 = document.getElementById('title3')
    title3.textContent = 'Madara Uchiha'

    let clan3 = document.getElementById('clan3')
    clan3.textContent = 'Clan: Uchiha'

    let village3 = document.getElementById('village3')
    village3.textContent = 'Proviene de la Aldea oculta de la hoja (Konohagakure)'
}

const changeCard4 = () => {
    let img4 = document.getElementById('image4')
    let img = img4.src = 'https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png'
    img4.addEventListener('click',() => {
        if (img4.src === img) {
            img4.src = 'https://static.wikia.nocookie.net/naruto/images/2/25/Kakashi_Part_III.png';
        } else {
            img4.src = img;
        }
    })

    let title4 = document.getElementById('title4')
    title4.textContent = 'Kakashi Hatake'

    let clan4 = document.getElementById('clan4')
    clan4.textContent = 'Clan: Uchiha'

    let village4 = document.getElementById('village4')
    village4.textContent = 'Proviene de la Aldea oculta de la hoja (Konohagakure)'
}

// Denominamos los cambios cuando empiece la página
document.addEventListener('DOMContentLoaded', () => {
    getData()
    changeCard1()
    changeCard2()
    changeCard3()
    changeCard4()
    let buttons = addButton()
    buttons.map(btn => pages.appendChild(btn))
})

// Sección de botones
let pages = document.getElementById('pagination')

const addButton = () => { // Lugar para crear botones
    let button1 = document.createElement('button')
    button1.textContent = 1
    button1.classList.add("button", "btn-opc1")

    let button2 = document.createElement('button')
    button2.textContent = 2
    button2.classList.add("button", "btn-opc2")
    return [button1, button2]
}
