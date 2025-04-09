const getData = async() => {
    let url = new URL('https://dattebayo-api.onrender.com/characters')
    let response = await fetch(url)
    let result = await response.json()
    console.log("Personajes a utilizar del api:");
    console.log(result);
}

const changeCard1 = () => {
    let img1 = document.getElementById('image1')
    let img = img1.src = 'https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png'
    img1.addEventListener('click',() => {
        if (img1.src === img) {
            img1.src = 'https://static.wikia.nocookie.net/naruto/images/7/7d/Naruto_Part_II.png';
        } else {
            img1.src = img;
        }
    })

    let title1 = document.getElementById('title1')
    title1.textContent = 'Naruto Uzumaki'

    let clan1 = document.getElementById('clan1')
    clan1.textContent = 'Clan: Uzumaki'

    let village1 = document.getElementById('village1')
    village1.textContent = 'Proviene de la Aldea oculta de la hoja (Konohagakure)'
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
    img3.src = 'https://static.wikia.nocookie.net/naruto/images/f/fd/Madara.png'

    let title3 = document.getElementById('title3')
    title3.textContent = 'Madara Uchiha'

    let clan3 = document.getElementById('clan3')
    clan3.textContent = 'Clan: Uchiha'

    let village3 = document.getElementById('village3')
    village3.textContent = 'Proviene de la Aldea oculta de la hoja (Konohagakure)'
}

document.addEventListener('DOMContentLoaded', () => {
    getData()
    changeCard1()
    changeCard2()
    changeCard3()
})
