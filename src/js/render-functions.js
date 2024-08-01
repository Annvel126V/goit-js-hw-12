// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

export function showError(error) {
    iziToast.error({
        position: "topRight",
        message: `${error}`,
    });
}


export function createImages(data) {
    const list = document.querySelector(".gallery-list");
    const lightbox = new SimpleLightbox('.gallery-list a', { 
      captions: true,
      captionType: 'attr',
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250
     });
    
  const images = data.hits.map((hit) =>
    `<div class="image-frame">
  <a href="${hit.largeImageURL}">
  <img class="image" src="${hit.webformatURL}" alt="${hit.tags}" /></a>
  <div class ="text-gallery">
  <div class="text-block">
  <h5>likes</h5>
  <p>${hit.likes}</p>
  </div>
  <div class="text-block">
  <h5>views</h5>
  <p>${hit.views}</p>
  </div>
  <div class="text-block">
  <h5>comments</h5>
  <p>${hit.comments}</p>
  </div>
  <div class="text-block">
  <h5>downloads</h5>
  <p>${hit.downloads}</p>
  </div>
  </div>
  </div>`)
    .join("");
    list.insertAdjacentHTML("beforeend", images);
    lightbox.refresh();
}

export const cleanGallery = () => {
  document.querySelector('.gallery-list').innerHTML = '';
};

