import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Масив із зображеннями
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/ranch-4202814__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/ranch-4202814_1280.jpg',
    description: 'Hokkaido Flower Field',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Ship',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
];

const galleryContainer = document.querySelector('.gallery');

// 1. Створення розмітки галереї
const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join('');

galleryContainer.innerHTML = galleryMarkup;

// 2. Ініціалізація SimpleLightbox
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});