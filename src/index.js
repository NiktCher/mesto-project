import '../pages/index.css';

import {jobInput, profTitle, profSubtitle, cardContainer, cardTemplate, nameInput, formElement, formInput, formError, addBtn, editBtn, popups, popupProfile, popupAddCard, profileForm, cardForm, popupImage, picturePopup, caption, profile, profileName, profileProf, formProfileEdit} from './utils.js'


import {initialCards} from './card.js'


import {enableValidation} from './validate.js' 

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input-redframe',
  errorClass: 'popup__input-error_visible'
}); 

popupProfile.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popupProfile);
    };
});

popupAddCard.addEventListener('mousedown', (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(popupAddCard);
  };
});

popupImage.addEventListener('mousedown', (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(popupImage);
  };
});



popups.forEach (popup => {
  popup.addEventListener('click', evt => {
   evt.target.classList.contains('popup__close-button') ? closePopup(popup) : false;
  }); 
});


addBtn.addEventListener('click', function () {
  openPopup(popupAddCard);
}); 

editBtn.addEventListener('click', function () {
  formProfileEdit.firstname.value = profileName.textContent;
  formProfileEdit.profession.value = profileProf.textContent;
  openPopup(popupProfile);
}); 

import {openPopup, closePopup, getFullSizeCard, closePopupEsc} from './modal.js' 

import {addSubmitHandler} from './modal.js' 

formElement.addEventListener('submit', addSubmitHandler); 

import {deleteCard, addCard, addUsersCard} from './card.js'

initialCards.forEach(function(element) {
 const newCard = addCard(element.name, element.link);
 cardContainer.prepend(newCard);
});


cardForm.addEventListener('submit', addUsersCard);
