import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { gallery, form, loader, moreBtn, endOfSearch } from './constants';
import { fetchImages, prepareQuery, PER_PAGE } from './pixabay-api';
import { renderImages } from './render-functions';
import { showWarning } from './toast';

let currentQuery = '';
let currentPage = 1;

export function handleSearchSubmit(event) {
  event.preventDefault();
  const query = form.elements.query.value.trim();
  if (query === '') {
    return showWarning('Please enter a valid query!');
  }
  currentQuery = prepareQuery(query);
  currentPage = 1;
  gallery.innerHTML = '';
  moreBtn.classList.add('is-hidden');
  loader.classList.remove('is-hidden');
  endOfSearch.classList.add('is-hidden');

  fetchImages(currentQuery)
    .then(data => {
      updateGallery(data);
      form.reset();
      moreBtn.classList.remove('is-hidden');
    })
    .catch(error => handleError());
  form.reset();
}

export function handleMoreBtnClick(event) {
  if (currentQuery === '') {
    return;
  }
  event.preventDefault();
  loader.classList.remove('is-hidden');
  currentPage += 1;
  fetchImages(currentQuery, currentPage)
    .then(data => {
      updateGallery(data);
      hideMoreBtn(data.totalHits);
    })
    .catch(error => handleError());
}

function hideMoreBtn(totlatHits) {
  if (currentPage * PER_PAGE >= totlatHits) {
    moreBtn.classList.add('is-hidden');
    endOfSearch.classList.remove('is-hidden');
  }
}

function handleError() {
  loader.classList.add('is-hidden');
  showWarning('Sorry, something went wrong. Please try again!');
}

function updateGallery(data) {
  renderImages(data.hits);
  loader.classList.add('is-hidden');
  galleryLightbox.refresh();
  configureScroll();
}
function configureScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  if (!galleryItem) return;
  const cardHeight = galleryItem.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
galleryLightbox.on('show.simplelightbox', function () {});

galleryLightbox.on('close.simplelightbox', function () {});
