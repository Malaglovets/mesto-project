const popupElement = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close-button');

const template = document.querySelector('#element-template').content.querySelector('.element');

const elements = document.querySelector('.elements');
const add = document.querySelector('.profile__add-button');
const cardForm = document.querySelector('.popup_add-card');
const closeAddForm = document.querySelector('.popup__close-form');
add.addEventListener('click', function() {
    cardForm.classList.add('popup_opened');
})

closeAddForm.addEventListener('click', function() {
    cardForm.classList.remove('popup_opened');
})

const form = document.querySelector('.form');
const nameInput = form.querySelector('.name-input');
const jobInput = form.querySelector('.job-input');
const nameField = document.querySelector('.profile__title').textContent;
const jobField = document.querySelector('.profile__subtitle').textContent;
nameInput.value = nameField;
jobInput.value = jobField;

function handleFormSubmit(evt) {
    evt.preventDefault(); 
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');

nameField.textContent = nameInput.value;
jobField.textContent = jobInput.getAttribute('value');
}

form.addEventListener('submit', handleFormSubmit);

form.addEventListener('submit', function(event) {
    event.preventDefault();
});

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

    function openPopup(image) {
        image.classList.add("popup_opened");
    };
    image.addEventListener('click', function () {
    openPopup(imagePopup);  
    }); 
    });

    console.log(card);
    
    return card;
}

const handleDeleteCard = (event) => {
    event.target.closest('.element').remove();
}


const createCardButton = cardForm.querySelector('.form__submit-button');
const newCardName = cardForm.querySelector('.input-card');
const newCardUrl = cardForm.querySelector('.input-url');
createCardButton.addEventListener('click', (event) => {
    event.preventDefault();
    const name = newCardName.value;
    const link = newCardUrl.value;
    renderCard({name, link});
});

const renderCard = (data) => {
    elements.prepend(createCard(data));
};

for (let i = initialCards.length - 1; i >= 0; i--) {
    renderCard(initialCards[i]);
}

function openPopup() {
    popupElement.classList.add("popup_opened");
}

function closePopup() {
    document.querySelector(".popup_opened").classList.remove("popup_opened");
}

openPopupButton.addEventListener('click', function() {
    openPopup();
});

closePopupButton.addEventListener('click', function() {
    closePopup();
});

const openImagePopupButton = document.querySelectorAll('.element__image');
const closeImagePopupButton = document.querySelectorAll('.popup__close-button');
const picturePopup = document.querySelector('.popup__card-image');
const popupImage = document.querySelector('.element__image');

Array.from(openImagePopupButton).map(function (openImagePopupButton) {
    openImagePopupButton.addEventListener('click', function() {
        document.querySelector('.popup_image').classList.add('popup_opened');
    });
});

Array.from(closeImagePopupButton).map(function(closeImagePopupButton) {
    closeImagePopupButton.addEventListener('click', function() {
        document.querySelector('.popup_image').classList.remove('popup_opened');
    });
});

let hurtButtonElement = document.querySelector('.element__hurt-button');

Array.from(hurtButtonElement).map(function (hurtButtonElement) {
    hurtButtonElement.addEventListener('click', function() {
        hurtButtonElement.classList.toggle('element__hurt-button_active')
    });
});

