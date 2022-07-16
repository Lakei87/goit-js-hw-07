import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery")
galleryRef.insertAdjacentHTML("afterbegin", createMarkup(galleryItems))
galleryRef.addEventListener("click", showTheOriginalPicture)


function createMarkup(array) {
    return array.map(element => {
        const { original, preview, description } = element
        
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
            </a>
        </div>`
    }).join("")
}

function showTheOriginalPicture(event) {
    event.preventDefault()
    const { target } = event
    if (!target.dataset.source) return
    
    const instance = basicLightbox.create(`<img src="${target.dataset.source}">`, {
        onShow: () => addEventListener("keydown", checkeTheEscapeButtonToExit),
        onClose: () => removeEventListener("keydown", checkeTheEscapeButtonToExit)
    })
    
    instance.show()
    
    function checkeTheEscapeButtonToExit(event) {
        if (event.code === "Escape") instance.close()
    }
    
}