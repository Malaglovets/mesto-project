import { template, elementsContainer, imagePopup, imagePopupImage, imagePopupCaption } from "./constants.js";
import { initialCards } from "./constants";
import { closePopup, openPopup } from "./modal.js";


const createCard = (data) => {
    const card = template.cloneNode(true);
    card.querySelector('.element__title').textContent = data.name;
    card.querySelector('.element__delete-card').addEventListener('click', handleDeleteCard);
    card.querySelector('.element__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like-button_active');
    });
    const image = card.querySelector('.element__image');
    image.src = data.link;
    image.alt = `Изображение ${data.name}`;
    image.addEventListener('click', () => {
        imagePopupImage.src = data.link;
        imagePopupImage.alt = `Изображение ${data.name}`;
        imagePopupCaption.textContent = data.name;
        openPopup(imagePopup);
    
    });
    return card;
}

const handleDeleteCard = (event) => {
    event.target.closest('.element').remove();
}

const renderCard = (data) => {
    elementsContainer.prepend(createCard(data));
};

for (let i = initialCards.length - 1; i >= 0; i--) {
    renderCard(initialCards[i]);
}

export {renderCard}










 

 
