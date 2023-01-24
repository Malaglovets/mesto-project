import { popupElement, body, placeForm, profilePopup, imagePopup, popupForm, nameField, jobField, nameInput, jobInput} from "./constants.js";
import { renderCard } from "./card.js";


export function openPopup(popupElement) {
    popupElement.classList.add("popup_opened");
    body.addEventListener('keydown', esc);
}

export function closePopup(popupElement) {
    popupElement.classList.remove("popup_opened");
    body.removeEventListener('keydown', esc);
}


export function handleFormSubmit(evt) {
    evt.preventDefault();
    nameField.textContent = nameInput.value;
    jobField.textContent = jobInput.value;
    closePopup(profilePopup);
  }
  
  popupForm.addEventListener('submit', handleFormSubmit);


export function esc(evt) {
    if (evt.key === 'Escape') {
        closePopup(placeForm);
        closePopup(profilePopup);
        closePopup(imagePopup);
    }
  }
  


