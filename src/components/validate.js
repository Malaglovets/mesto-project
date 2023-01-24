export const enableValidation = ({ formSelector, ...rest }) => {
    Array.from(document.querySelectorAll(formSelector)).forEach(formElement => {
        setEventListeners(formElement, rest)
    })
}

const setEventListeners = (formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    formElement.addEventListener('reset', () => {
        setTimeout(() => {
            disableButton(buttonElement, inactiveButtonClass);
        }, 0);
    })

    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, rest);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        })
    })
}

const checkInputValidity = (formElement, inputElement, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}_error`)
    if (!inputElement.validity.valid) {
        // Если поле не проходит валидацию, покажем ошибку
        showInputError(formElement, inputElement, errorElement, inputErrorClass, errorClass, inputElement.validationMessage);
    } else {
        // Если проходит, скроем
        hideInputError(formElement, inputElement, errorElement, inputErrorClass, errorClass);
    }
};

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorElement, inputErrorClass, errorClass, errorMessage) => {
    inputElement.classList.add(inputErrorClass)
    errorElement.classList.add(errorClass)
    errorElement.textContent = errorMessage
}

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, errorElement, inputErrorClass, errorClass) => {

    inputElement.classList.remove(inputErrorClass)
    errorElement.classList.remove(errorClass)
    errorElement.textContent = ''
}

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasValidInput(inputList)) {
        disableButton(buttonElement, inactiveButtonClass)
    } else {
        enableButton(buttonElement, inactiveButtonClass)
    }
}

// Функция, которая проверяет валидность поля
const hasValidInput = (inputList) => {
    return inputList.some(inputElement => {
        return !inputElement.validity.valid
    })
}

const enableButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.remove(inactiveButtonClass)
    buttonElement.disabled = false
}


const disableButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.add(inactiveButtonClass)
    buttonElement.disabled = true
}
