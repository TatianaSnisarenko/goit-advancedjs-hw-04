import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import './css/styles.css';
import { handleSearchSubmit, handleMoreBtnClick } from './js/handlers';
import { form, moreBtn } from './js/constants';

form.addEventListener('submit', handleSearchSubmit);
moreBtn.addEventListener('click', handleMoreBtnClick);

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
galleryLightbox.on('show.simplelightbox', function () {});

galleryLightbox.on('close.simplelightbox', function () {});
