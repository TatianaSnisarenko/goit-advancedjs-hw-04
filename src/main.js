import './css/styles.css';
import { handleSearchSubmit, handleMoreBtnClick } from './js/handlers';
import { form, moreBtn } from './js/constants';

form.addEventListener('submit', handleSearchSubmit);
moreBtn.addEventListener('click', handleMoreBtnClick);
