import '../../src/pages/index.css';

import { enableValidation } from './validate.js';
import { openPopup, closePopup, renderLoading } from './modal.js';
import { createCard, renderCard, serverDeleteCard } from './card.js';
import { jobField, nameField, popups, profileAvatar, nameInput, jobInput, confirmCardDelete } from './constants.js'
import { getInitialCards, getUser, addUser, addCard, addLike, removeLike, addAvatar, deleteCard } from './api.js';



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

enableValidation({
   formSelector: '.popup__form',
   inputSelector: '.popup__form_input',
   submitButtonSelector: '.popup__form_submit-button',
   inactiveButtonClass: 'popup__form_submit-button_disabled',
   inputErrorClass: 'popup__form_input_error',
   errorClass: 'popup__form_error'
});

 confirmCardDelete.addEventListener('click', () => {serverDeleteCard()});

 Promise.all([getUser(), getInitialCards()])
 .then(([userData, cards]) => {
   nameField.id = userData._id;
   nameField.textContent = userData.name;
   jobField.textContent = userData.about;
   profileAvatar.src = userData.avatar;
   nameInput.value = userData.name;
   jobInput.value = userData.about;
   cards.reverse().forEach(renderCard);
   console.log(cards.reverse());
    
 })
 .catch((err) => {
   console.log(`Ошибка: ${err}`)
 });

















