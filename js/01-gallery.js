import { galleryItems } from "./gallery-items.js";
// Change code below this line

const currentLightbox = [0];
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onClickGallery);

galleryItems.forEach((element) => {
    const li = document.createElement("li");
    // href="${element.original}"
    li.innerHTML = `<a class="gallery__link">
                        <img
                            class="gallery__image"
                            src="${element.preview}"
                            data-source="${element.original}"
                            alt="${element.description}"
                        />
                    </a>`;
    li.className = "gallery__item";
    gallery.append(li);
});

function onClickGallery(evt) {
    
    if (evt.target.nodeName != "IMG") {
        return;
    }

    const lightbox = basicLightbox.create(`<img width="1400" height="900" src=${evt.target.dataset.source}>`);
    currentLightbox.splice(0, 1, lightbox);
    lightbox.show();
    return false;
}

document.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
        currentLightbox[0].close();
    }
});

