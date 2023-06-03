import { galleryItems } from "./gallery-items.js";
// Change code below this line

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
    lightbox.show();
    addListenerEsc();

    function onEsc(e) {
        if (e.code == "Escape") {
            document.removeEventListener("keydown", onEsc);
            lightbox.close();
        }
    }

    function addListenerEsc() {
        document.addEventListener("keydown", onEsc);
    }
}
