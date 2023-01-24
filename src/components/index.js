import '../../src/pages/index.css';

import { enableValidation } from './validate.js';
import { openPopup, closePopup } from './utils.js';
import { renderCard } from './card.js';
import { openPopupButtonElement, closePopupButton, openPlacePopup, placeForm, closePlacePopup, body, cardForm,newPlaceUrl, newPlaceName, form, nameInput, jobInput, nameField, jobField, profilePopup, imagePopup } from './constants.js'


openPlacePopup.addEventListener('click', function () {
    openPopup(placeForm);
})

closePlacePopup.addEventListener('click', function () {
    closePopup(placeForm);
    cardForm.reset(placeForm);
})

cardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = newPlaceName.value;
    const link = newPlaceUrl.value;
    renderCard({ name, link });
    closePopup(placeForm);
    event.target.reset();
});

openPopupButtonElement.addEventListener('click', function () {
    openPopup(profilePopup);
    nameInput.value = nameField.textContent;
    jobInput.value = jobField.textContent;
});

closePopupButton.addEventListener('click', function () {
    closePopup(profilePopup);
});

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameField.textContent = nameInput.value;
    jobField.textContent = jobInput.value;
    closePopup(profilePopup);
}

form.addEventListener('submit', handleFormSubmit);

function esc(evt) {
    if (evt.keyCode === 27) {
        closePopup(placeForm);
        closePopup(profilePopup);
        closePopup(imagePopup);
        cardForm.reset();
    }
}

body.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(placeForm);
        closePopup(profilePopup);
        closePopup(imagePopup);
        cardForm.reset();
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

export {esc}


