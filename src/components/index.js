import '../../src/pages/index.css';




const profilePopup = document.querySelector('.profile-popup');
const openPopupButton = document.querySelector('.profile__edit-button');
const template = document.querySelector('#element-template').content.querySelector('.element');

const elements = document.querySelector('.elements');
const add = document.querySelector('.profile__add-button');
const cardForm = document.querySelector('.popup_add-card');
const closeAddForm = document.querySelector('.popup__close-form');
add.addEventListener('click', function() {
    openPopup(cardForm);
})

const closeButtons = document.querySelectorAll('.popup__close-button');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup() {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    document.removeEventListener('keydown', escListener);
    popupDelete.id = '';
  };

const formProfile = document.querySelector('.form');
const nameInput = document.querySelector('.name-input');
const jobInput = document.querySelector('.job-input');
const nameField = document.querySelector('.profile__title');
const jobField = document.querySelector('.profile__subtitle');

function handleFormSubmit(evt) {
   evt.preventDefault(); 
   nameField.textContent = nameInput.value;
   jobField.textContent = jobInput.value;
   profileEdit()
   closePopup(profilePopup)
}

formProfile.addEventListener('submit', handleFormSubmit);


const imagePopup = document.querySelector('.popup_image');
const cardPopupImage = imagePopup.querySelector('.popup__card-image');
const popupCaption = imagePopup.querySelector('.popup__caption');

const createCard = (data) => {
    const card = template.cloneNode(true);
    card.querySelector('.element__title').textContent = data.name;
    card.querySelector('.element__delete-card').addEventListener('click', handleDeleteCard);
    card.querySelector('.element__hurt-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__hurt-button_active')
      });   

    const image = card.querySelector('.element__image');
    image.src = data.link;
    image.alt = `Изображение ${data.name}`;
    image.addEventListener('click', () => {
      cardPopupImage.src = data.link;
      cardPopupImage.alt = `Изображение ${data.name}`;
      popupCaption.textContent = data.name; 

      openPopup(imagePopup);

    });
    console.log(card);

    return card;
}

const handleDeleteCard = (event) => {
    event.target.closest('.element').remove();
}


const createCardButton = cardForm.querySelector('.form');
const newCardName = cardForm.querySelector('.input-card');
const newCardUrl = cardForm.querySelector('.input-url');
createCardButton.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const name = newCardName.value;
    const link = newCardUrl.value;
    renderCard({name, link});
    closePopup(createCardButton);
    evt.target.reset();
});

const renderCard = (data) => {
    elements.prepend(createCard(data));
};

for (let i = initialCards.length - 1; i >= 0; i--) {
    renderCard(initialCards[i]);
}



openPopupButton.addEventListener('click', function() {
    openPopup(profilePopup);
});

closePopupButton.addEventListener('click', function() {
    closePopup();
});

const openImagePopupButton = document.querySelectorAll('.element__image');
const closeImagePopupButton = document.querySelectorAll('.popup__close-button');
const picturePopup = document.querySelector('.popup__card-image');
const popupImage = document.querySelector('.element__image');

const hurtButtonElement = document.querySelector('.element__hurt-button');