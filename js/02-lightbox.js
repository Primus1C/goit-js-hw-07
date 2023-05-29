import { galleryItems } from "./gallery-items.js";
// Change code below this line

//const currentLightbox = [0];
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
    if (evt.target.nodeName != "IMG") {
        return;
    }

    var lightbox = new SimpleLightbox(".gallery a", {
        //captionType: "text",
        captionsData: "alt",
        captionDelay: 250,
        /* options */
    });

    lightbox.on("show.simplelightbox", function () {
        // Do something…
        //console.log("showing...");
    });

    return false;
}
