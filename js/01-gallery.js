import { galleryItems } from './gallery-items.js';
// Change code below this line

const gal = document.querySelector(".gallery");
galleryItems.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `<li class="gallery__item">
                        <img
                            class="gallery__image"
                            src="${element.preview}"
                            alt="${element.description}"
                        />
                    </li>`;
    gal.appendChild(li);

});


console.log(galleryItems);
