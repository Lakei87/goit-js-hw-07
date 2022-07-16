import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery")
galleryRef.insertAdjacentHTML("afterbegin", createMarkup(galleryItems))

function createMarkup(array) {
    return array.map(element => {
        const { original, preview, description } = element
        
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" /></a>`
    }).join("")
}

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
})