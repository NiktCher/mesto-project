import {
  jobInput,
  profTitle,
  profSubtitle,
  cardContainer,
  cardTemplate,
  nameInput,
  formElement,
  formInput,
  formError,
  addBtn,
  editBtn,
  popups,
  popupProfile,
  popupAddCard,
  profileForm,
  cardForm,
  popupImage,
  picturePopup,
  caption,
  profile,
  profileName,
  profileProf,
  formProfileEdit,
} from "./utils.js";

const enableValidation = (enableValidation) => {
  //Добавление класса с ошибкой
  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    inputElement.classList.add(enableValidation.inputErrorClass);
    errorElement.classList.add(enableValidation.errorClass);
  };

  // Удаление класса с ошибкой
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(enableValidation.inputErrorClass);
    errorElement.classList.remove(enableValidation.errorClass);

    errorElement.textContent = "";
  };

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add(enableValidation.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute("disabled", true);
      buttonElement.classList.remove(enableValidation.inactiveButtonClass);
    }
  };

  const isValid = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }

    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  const setEventListeners = (formElement) => {
    const inputList = Array.from(
      formElement.querySelectorAll(enableValidation.inputSelector)
    );

    const buttonElement = formElement.querySelector(
      enableValidation.submitButtonSelector
    );

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        isValid(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };

  const formList = Array.from(
    document.querySelectorAll(enableValidation.formSelector)
  );

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

export { enableValidation };
