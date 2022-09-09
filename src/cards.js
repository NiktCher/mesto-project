import {jobInput, profTitle, profSubtitle, cardContainer, cardTemplate, nameInput, formElement, formInput, formError, addBtn, editBtn, popups, popupProfile, popupAddCard, profileForm, cardForm, popupImage, picturePopup, caption, profile, profileName, profileProf, formProfileEdit} from './utils.js'
import {openPopup, closePopup, getFullSizeCard} from './modal.js'







const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

 
  function addCard(name, link) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardImage = cardElement.querySelector('.element__image');
    cardImage.src = link;
    cardImage.alt = name;
    cardElement.querySelector('.element__inscription').textContent = name;
  
    // открытие попапа с фул картинкой 
    cardImage.addEventListener('click', function () {
      getFullSizeCard(cardImage);
    }); 
  
    // Лайк 
    cardElement.querySelector('.elements__like').addEventListener('click', evt => {
      evt.target.classList.toggle('element__like_position_activ');
    });
  
    // Удаление карточки 
    cardElement.querySelector('.element__delete-btn').addEventListener('click', function () {
      deleteCard(cardElement);
    });
  
    return cardElement;
  };


  function deleteCard (cardElement) {
    cardElement.remove();
  };


  function addUsersCard(evt) {
    evt.preventDefault();
    const imageLink = cardForm.link.value;
    const imageName = cardForm.name.value;
    const newCard =  addCard(imageName, imageLink );
    cardContainer.prepend(newCard);
    closePopup(popupAddCard);
  
    cardForm.name.value = '';
    cardForm.link.value = '';
  
  };




export {initialCards, deleteCard, addCard, addUsersCard};