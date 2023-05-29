import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onClickGallery);

galleryItems.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `<a class="gallery__link" href="${element.original}"> 
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
    evt.preventDefault();

    if (evt.target.nodeName != "IMG") {
        return;
    }

    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
    });

    lightbox.on("show.simplelightbox", function () {

    });

    return false;
}
