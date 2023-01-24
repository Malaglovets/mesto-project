export const template = document.querySelector('#element-template').content.querySelector('.element');
export const elementsContainer = document.querySelector('.elements');
export const imagePopup = document.querySelector('.popup_picture');
export const imagePopupImage = imagePopup.querySelector('.popup__image');
export const imagePopupCaption = imagePopup.querySelector('.popup__caption');
export const popupElement = document.querySelector('.popup');
export const profilePopup = document.querySelector('.profile-popup');
export const placeForm = document.querySelector('.popup_add-card');
export const cardForm = placeForm.querySelector('.form_place');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close-button');
const profileAddButton = document.querySelector('.profile__add-button');
const closePlacePopup = document.querySelector('.popup_place__close-button');
const body = document.querySelector('.body');
const popupForm = document.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.name-input');
const jobInput = popupForm.querySelector('.job-input');
const nameField = document.querySelector('.profile__title');
const jobField = document.querySelector('.profile__subtitle');
const inputPlaceName = placeForm.querySelector('.input-place');
const inputPlaceUrl = placeForm.querySelector('.input-url');

export {buttonEditProfile, closePopupButton, profileAddButton, closePlacePopup, body, inputPlaceUrl, inputPlaceName, popupForm, nameInput, jobInput, nameField, jobField}

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 










