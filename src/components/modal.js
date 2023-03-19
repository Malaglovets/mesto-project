import {buttonEditProfile, popupAvatar, popupElement, body, placeForm, profilePopup, imagePopup, popupForm, nameField, jobField, nameInput, jobInput, popups, profileAddButtonAvatar, profileAvatar, popupFormAvatar, popupProfileSaveButton, avatarInput, avaFormInput, avatarLink, popupSaveButtonProfile } from "./constants.js";
import { renderCard } from "./card.js";
import { addUser, addAvatar } from "./api.js";
import { idUser } from "./index.js";



export function openPopup(popupElement) {
    popupElement.classList.add("popup_opened");
    body.addEventListener('keydown', esc);
}

export function closePopup(popupElement) {
    popupElement.classList.remove("popup_opened");
    body.removeEventListener('keydown', esc);
}

export function handleFormSubmit(evt) {
        nameField.textContent = nameInput.value;
        jobField.textContent = jobInput.value;
        closePopup(profilePopup);
  }

  popupForm.addEventListener('submit', function (evt) {
    evt.preventDefault;
    renderLoading(true, popupSaveButtonProfile);
    addUser(nameInput.value, jobInput.value)
    .then(res =>  {
      nameField.id = res._id;
      nameField.textContent = res.name;
      jobInput.textContent = res.about;
      evt.preventDefault();
      closePopup(profilePopup);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      renderLoading(false, popupSaveButtonProfile)
    })
});

export function esc(evt) {
    if (evt.key === 'Escape') {
       const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);

    }
  }

  export const handleFormSubmitAvatar = (evt) => {
    profileAvatar.src = avatarLink.value;
    // evt.target.reset();
    closePopup(popupAvatar);   
    
}

popupFormAvatar.addEventListener('submit', function (evt) {
    evt.preventDefault();
    renderLoading(true, popupProfileSaveButton);
    addAvatar()
        .then((res) => {
            handleFormSubmitAvatar(res);
            closePopup(popupAvatar)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally((res) => {
            renderLoading(false, popupProfileSaveButton);
        })
        
});

  export function renderLoading(isLoading, button, buttonText='Сохранить', loadingText='Сохранение...') {
    if (isLoading) {
      button.textContent = loadingText
    } else {
      button.textContent = buttonText
    }
  }