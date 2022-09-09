
export const addBtn = document.querySelector('.profile__add-button');
export const editBtn = document.querySelector('.profile__edit-button');

export const popups = document.querySelectorAll('.popup');
export const popupProfile = document.querySelector('#popupProfile');
export const popupAddCard = document.querySelector('#popupAddCard');

export const profileForm = popupProfile.querySelector('.popup__form');
export const cardForm = popupAddCard.querySelector('.popup__form')


export const popupImage = document.querySelector('.popup__image');
export const picturePopup = popupImage.querySelector('.popup__picture');
export const caption = popupImage.querySelector('.popup__caption');


export const profile = document.querySelector('.profile');
export const profileName = profile.querySelector('.profile__name');
export const profileProf = profile.querySelector('.profile__profession');
export const formProfileEdit = popupProfile.querySelector('.popup__form');

export const formElement = document.querySelector('.popup__form');
export const formInput = formElement.querySelector('.popup__input');

export const formError = formElement.querySelector(`.${formInput.id}-error`); 

export const nameInput = document.querySelector('#nameId');
export const jobInput = document.querySelector('#professionId'); 

export const profTitle = document.querySelector('.profile__name');
export const profSubtitle = document.querySelector('.profile__profession');

export const cardContainer = document.querySelector('.elements');

export const cardTemplate = document.querySelector('#cardTemplate').content;