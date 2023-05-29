import { galleryItems } from "./gallery-items.js";
// Change code below this line

const currentLightbox = [0];
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onClickGallery);

galleryItems.forEach((element) => {
    const li = document.createElement("li");
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

    const lightbox = basicLightbox.create(
        `<img width="1400" height="900" src=${evt.target.dataset.source}>`
    );
    currentLightbox.splice(0, 1, lightbox);
    lightbox.show();

    addListenerEsc();

    return false;
}

function onEsc(e) {
    if (e.code == "Escape") {
        document.removeEventListener("keydown", onEsc);
        currentLightbox[0].close();
    }
} 

function addListenerEsc() {
    document.addEventListener("keydown", onEsc);
}


