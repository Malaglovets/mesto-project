import {buttonEditProfile, popupAvatar, popupElement, body, placeForm, profilePopup, imagePopup, nameField, jobField, nameInput, jobInput, popups, profileAddButtonAvatar, profileAvatar, popupFormAvatar, popupProfileSaveButton, avatarInput, avaFormInput, avatarLink, popupSaveButtonProfile, profileForm } from "./constants.js";
import { renderCard } from "./card.js";
import { addUser, addAvatar } from "./api.js";
import { idUser } from "./index.js";
import { renderLoading } from "./utils.js";

export function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  body.addEventListener("keydown", handleEscape);
}

export function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  body.removeEventListener("keydown", handleEscape);
}

// export function handleProfileFormSubmit(evt) {
//         nameField.textContent = nameInput.value;
//         jobField.textContent = jobInput.value;
//         closePopup(profilePopup);
//   }

profileForm.addEventListener("submit", function (evt) {
  evt.preventDefault;
  renderLoading(true, popupSaveButtonProfile);
  addUser(nameInput.value, jobInput.value)
    .then((res) => {
      nameField.id = res._id;
      nameField.textContent = res.name;
      jobInput.textContent = res.about;
      evt.target.reset();
      closePopup(profilePopup);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, popupSaveButtonProfile);
    });
});

export function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

popupFormAvatar.addEventListener("submit", handleFormSubmitAvatar);

export function handleFormSubmitAvatar(evt) {
  evt.preventDefault();
  renderLoading(true, popupProfileSaveButton);
  addAvatar(avatarLink.value)
    .then((res) => {
      (profileAvatar.src = res.avatar), evt.target.reset();
      closePopup(popupAvatar);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, popupProfileSaveButton);
    });
}
