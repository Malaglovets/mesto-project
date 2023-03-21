import { template, elementsContainer, imagePopup, imagePopupImage, imagePopupCaption } from "./constants.js";
import { placeForm, inputPlaceName, inputPlaceUrl, buttonEditProfile, profilePopup, nameInput, jobInput, nameField, jobField, profileAddButtonAvatar, popupAvatar, popupElementAvatar,  popupProfileSaveButton, popupDeleteCard, confirmCardDelete, popupSaveButtonPlace, profileAddButton, popupFormPlace} from "./constants.js";
import { closePopup, openPopup } from "./modal.js";
import { getInitialCards, getUser, addUser, deleteCard, addCard, addLike, removeLike } from "./api.js";
import { renderLoading } from "./utils.js";


export const createCard = (data)  => {
    
    const card = template.cloneNode(true);
    card.id = data._id;

    card.querySelector('.element__title').textContent = data.name;
    const trashElement = card.querySelector('.element__delete-card')
    trashElement.addEventListener('click', handleDeleteCard);
    disableDeleteCardButton(data, trashElement);

    const image = card.querySelector('.element__image');
    image.src = data.link; 
    image.alt = `Изображение ${data.name}`;
    image.addEventListener('click', () => {
        imagePopupImage.src = data.link;
        imagePopupImage.alt = `Изображение ${data.name}`;
        imagePopupCaption.textContent = data.name;
        openPopup(imagePopup);
    });
    card.querySelector('.element__like-number').textContent = data.likes.length;
    const likeElement = card.querySelector('.element__like-button')
     likeElement.addEventListener('click', likeCard);
     data.likes.forEach((like) => checkLikeButton(like._id, likeElement));  

    return card;
    }

    const likeCard = (evt) => {
      const cardEl = evt.target.closest('.element');
      const cardCounter = cardEl.querySelector('.element__like-number');
      if (evt.target.classList.contains('element__like-button_active')) {
        removeLike(cardEl.id)
          .then((res) => {
            checkLikesNumber(res._id, res.likes.length, cardCounter, cardEl.id);
            evt.target.classList.remove('element__like-button_active');
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`)
          })
      } else {
        addLike(cardEl.id)
          .then((res) => {
            checkLikesNumber(res._id, res.likes.length, cardCounter, cardEl.id);
            evt.target.classList.add('element__like-button_active')
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`)
          })
      }
    };

    function checkLikeButton(like, likeButton) {
      if (like === nameField.id) {
        likeButton.classList.add('element__like-button_active')
      }
    }
    function checkLikesNumber(id, numbers, counter, cardId) {
      if (cardId === id) {
        counter.textContent = numbers
      }
    }

    export function disableDeleteCardButton(item, trashElement) {
      if (item.owner._id === nameField.id) {
        trashElement.disabled = false
        trashElement.classList.remove('element__delete-card_disabled')
      } else {
        trashElement.disabled = true
        trashElement.classList.add('element__delete-card_disabled')
      }
    }
   
    export function handleSubmitCard(evt) {
      evt.preventDefault();
      renderLoading(true, popupSaveButtonPlace, 'Создать', 'Создание...')
      addCard({
        name: `${inputPlaceName.value}`,
        link: `${inputPlaceUrl.value}`
      })
        .then((res) => {
          renderCard(res)
          evt.target.reset();
          closePopup(placeForm);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`)
        })
        .finally(() => {
          renderLoading(false, popupSaveButtonPlace, 'Создать', 'Создание...')
        })
    }

  export function serverDeleteCard (evt) {
    renderLoading(true, confirmCardDelete, 'Да', 'Удаление...')
    const deleteCardId = popupDeleteCard.id
    deleteCard(popupDeleteCard.id)
      .then((res) => {
        popupDeleteCard.id = ''
        document.getElementById(`${deleteCardId}`).remove()

        closePopup(popupDeleteCard)
        
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
      .finally(() => {
        renderLoading(false, confirmCardDelete, 'Да', 'Удаление...')
      })
      
  } 
  
  export const handleDeleteCard = (event) => {
     event.preventDefault();
     const elementCard = event.target.closest('.element');
    openPopup(popupDeleteCard);
    popupDeleteCard.id = elementCard.id;
}
  
const renderCard = (data) => {
   console.log(data);
    elementsContainer.prepend(createCard(data));
};

// for (let i = getInitialCards.length - 1; i >= 0; i--) {
//     renderCard(getInitialCards[i]);
// }

export {renderCard}


















 

 
