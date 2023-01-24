import '../../src/pages/index.css';

import { enableValidation } from './validate.js';
import { openPopup, closePopup} from './modal.js';
import { renderCard } from './card.js';
import { buttonEditProfile, closePopupButton, profileAddButton, placeForm, closePlacePopup, body, cardForm, inputPlaceUrl, inputPlaceName, popupForm, nameInput, jobInput, nameField, jobField, profilePopup, imagePopup, popupElement} from './constants.js'


const closePicturePopupButton = document.querySelector('.popup_picture__close-button'); 
closePicturePopupButton.addEventListener('click', function () {
  closePopup(imagePopup);
});

profileAddButton.addEventListener('click', function () {
  openPopup(placeForm);
})

closePlacePopup.addEventListener('click', function () {
  closePopup(placeForm);
})

cardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = inputPlaceName.value;
    const link = inputPlaceUrl.value;
    renderCard({ name, link });
    closePopup(placeForm);
    event.target.reset();
    cardForm.reset();
});

buttonEditProfile.addEventListener('click', function () {
    openPopup(profilePopup);
    nameInput.value = nameField.textContent;
    jobInput.value = jobField.textContent;
});

closePopupButton.addEventListener('click', function () {
    closePopup(profilePopup);
});

placeForm.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(placeForm); 
 }
})

profilePopup.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup_opened')) { 
    closePopup(profilePopup);
 }
})

imagePopup.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(imagePopup);
 }
})



enableValidation({
   formSelector: '.popup__form',
   inputSelector: '.popup__form_input',
   submitButtonSelector: '.popup__form_submit-button',
   inactiveButtonClass: 'popup__form_submit-button_disabled',
   inputErrorClass: 'popup__form_input_error',
   errorClass: 'popup__form_error'
});






