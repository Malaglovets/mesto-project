import { config, jobInput, nameInput, nameField, jobField, inputPlaceUrl, inputPlaceName, avaFormInput, avatarInput, avatarLink, deleteCardId, cardForm, id, popupDeleteCard } from "./constants.js";


  const getResponse = (res) => {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};
// console.log(getInitialCards);
export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,    
    })
    .then(getResponse)
};

export const getUser = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
    }).then(getResponse)

};

export const addUser = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about
        })
    })
    .then(getResponse)
}

 export const addCard = (data) => {
   return fetch(`${config.baseUrl}/cards`, {
     method: 'POST',
     headers: config.headers,
     body: JSON.stringify({
        name: data.name,
        link: data.link
    })
   })
   .then(getResponse)
 }

export const addLike = (id) => {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'PUT',
        headers: config.headers,

    })
    .then(getResponse)
}

export const removeLike = (id) => {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'DELETE',
        headers: config.headers,

    })
    .then(getResponse)
}

 export const addAvatar = (avatar) => {
   return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
        avatar: avatarLink.value
    })
   })
   .then(getResponse)
 }

 export const deleteCard = (id) => {
    console.log(`${config.baseUrl}/cards/${id}}`, {
        method: 'DELETE',
        headers: config.headers,
    });
    return fetch(`${config.baseUrl}/cards/${id}}`, {
        method: 'DELETE',
        headers: config.headers,
    })
    .then((res) => {
        if(!res.ok){
            return Promise.reject(`Ошибка ${res.status}`);
        }
    })
 };