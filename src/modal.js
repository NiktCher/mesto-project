import {jobInput, profTitle, profSubtitle, cardContainer, cardTemplate, nameInput, formElement, formInput, formError, addBtn, editBtn, popups, popupProfile, popupAddCard, profileForm, cardForm, popupImage, picturePopup, caption, profile, profileName, profileProf, formProfileEdit} from './utils.js'


function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
    
   };
   
   function closePopup(popup) {
     popup.classList.remove('popup_opened');
     document.removeEventListener('keydown', closePopupEsc);
    
   };

   function getFullSizeCard(element) {
    picturePopup.src = element.src;
    picturePopup.alt = element.alt;
    caption.textContent = element.alt;
  
    openPopup(popupImage);
  };


  function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
      closePopup(popupProfile);
      closePopup(popupAddCard);
      closePopup(popupImage);
    }
  }

  function addSubmitHandler (evt) {
    evt.preventDefault();
  
    profTitle.textContent = nameInput.value;
    profSubtitle.textContent = jobInput.value; 
  
    closePopup(popupProfile);
  
  };

   export {openPopup, closePopup, getFullSizeCard, closePopupEsc, addSubmitHandler};