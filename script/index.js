const generatImageOnHTML = (e) => {
    document.querySelector('.container-item').innerHTML = `
        <img src="${e.message}" id="image-dog">
    `
}

const fetchImageDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(res => generatImageOnHTML(res))
        .catch(res => console.warn(res))
}

document.querySelector('button')
    .addEventListener('click', () => {
        fetchImageDog()
    })

fetchImageDog()
