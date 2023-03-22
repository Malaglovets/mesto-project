export const template = document.querySelector('#element-template').content.querySelector('.element');
export const elementsContainer = document.querySelector('.elements');
export const imagePopup = document.querySelector('.popup_picture');
export const imagePopupImage = imagePopup.querySelector('.popup__image');
export const imagePopupCaption = imagePopup.querySelector('.popup__caption');
export const popupElement = document.querySelector('.popup');
export const popups = document.querySelectorAll('.popup')
export const profilePopup = document.querySelector('.profile-popup');
export const placeForm = document.querySelector('.popup_add-card');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close-button');
const profileAddButton = document.querySelector('.profile__add-button');
const closePlacePopup = document.querySelector('.popup_place__close-button');
const body = document.querySelector('.body');
const profileForm  = document.querySelector('.popup__form_profile');
const popupForm = document.querySelector('.popup__form');
export const popupFormPlace = document.querySelector('.popup__form_place');
const nameInput = popupForm.querySelector('.popup__input_name');
const jobInput = popupForm.querySelector('.popup__input_profession');
const nameField = document.querySelector('.profile__title');
const jobField = document.querySelector('.profile__subtitle');
const inputPlaceName = placeForm.querySelector('.popup__input_card_title');
const inputPlaceUrl = placeForm.querySelector('.popup__input_card_link');
export const popupAvatar = document.querySelector('.popup_avatar');
export const avaFormInput = document.querySelector('.popup-avatar-input');
export const profileAddButtonAvatar = document.querySelector('.pofile__avatar-edit');
export const profileAvatar = document.querySelector('.profile__avatar');
export const popupFormAvatar = document.querySelector('.popup__form_avatar');
export const popupProfileSaveButton = document.querySelector('.popup__form_submit-buttonn_avatar');
export const avatarInput = document.querySelector('.popup__form_input');
export const popupDeleteCard = document.querySelector('.popup__delete-card');
export const confirmCardDelete = document.querySelector('.popup__form_submit-button_delete-card');
export const popupSaveButtonProfile = document.querySelector('.popup__save-button_profile');
export const popupSaveButtonPlace = document.querySelector('.popup__form_submit-btn_place');
export const avatarLink = document.querySelector('.popup__input_avatar_link');
export {buttonEditProfile, closePopupButton, profileAddButton, closePlacePopup, body, inputPlaceUrl, inputPlaceName, profileForm, popupForm, nameInput, jobInput, nameField, jobField}

//Авторизация
export const config = {
  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-4',
  headers: {
    authorization: '86d1635b-058c-498b-9913-3fed90fa0948',
    'Content-Type': 'application/json'
  }
};


//  import { getInitialCards } from "./api.js";
// // export const initialCards = getInitialCards(); /*[
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//  }
// ];*/ 











