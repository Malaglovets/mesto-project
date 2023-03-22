import '../../src/pages/index.css';

import { enableValidation } from './validate.js';
import { openPopup, closePopup } from './modal.js';
import { createCard, renderCard, serverDeleteCard, handleSubmitCard} from './card.js';
import { jobField, nameField, popups, profileAvatar, nameInput, jobInput, confirmCardDelete, profileAddButton, profileAddButtonAvatar, popupAvatar, placeForm, buttonEditProfile, profilePopup, popupFormPlace } from './constants.js'
import { getInitialCards, getUser, addUser, addCard, addLike, removeLike, addAvatar, deleteCard } from './api.js';

buttonEditProfile.addEventListener("click", function () {
  openPopup(profilePopup);
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
});

profileAddButton.addEventListener("click", function () {
  openPopup(placeForm);
});

profileAddButtonAvatar.addEventListener("click", function () {
  openPopup(popupAvatar);
});

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form_input",
  submitButtonSelector: ".popup__form_submit-button",
  inactiveButtonClass: "popup__form_submit-button_disabled",
  inputErrorClass: "popup__form_input_error",
  errorClass: "popup__form_error",
});

popupFormPlace.addEventListener("submit", handleSubmitCard);

confirmCardDelete.addEventListener("click", () => {
  serverDeleteCard();
});

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
    console.log(`Ошибка: ${err}`);
  });
