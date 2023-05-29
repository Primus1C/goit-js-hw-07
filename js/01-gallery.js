import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onClickGallery);

galleryItems.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
                        <a class="gallery__link" href="${element.original}">
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
   // console.log(evt.target.nodeName);
    console.log(evt.target);

}

//console.log(galleryItems);
