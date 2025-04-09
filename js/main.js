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


document.addEventListener('DOMContentLoaded', () => {
    getData()
    changeCard1()
})
