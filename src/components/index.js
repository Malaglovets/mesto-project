import '../../src/pages/index.css';

import { enableValidation } from './validate.js';
import { openPopup, closePopup} from './modal.js';
import { renderCard } from './card.js';
import { popups, buttonEditProfile, profileAddButton, placeForm, body, cardForm, inputPlaceUrl, inputPlaceName, popupForm, nameInput, jobInput, nameField, jobField, profilePopup} from './constants.js'



popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup)
        }
    })
})

profileAddButton.addEventListener('click', function () {
  openPopup(placeForm);
})

cardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = inputPlaceName.value;
    const link = inputPlaceUrl.value;
    renderCard({ name, link });
    closePopup(placeForm);
    event.target.reset();
});

buttonEditProfile.addEventListener('click', function () {
    openPopup(profilePopup);
    nameInput.value = nameField.textContent;
    jobInput.value = jobField.textContent;
});

enableValidation({
   formSelector: '.popup__form',
   inputSelector: '.popup__form_input',
   submitButtonSelector: '.popup__form_submit-button',
   inactiveButtonClass: 'popup__form_submit-button_disabled',
   inputErrorClass: 'popup__form_input_error',
   errorClass: 'popup__form_error'
});




