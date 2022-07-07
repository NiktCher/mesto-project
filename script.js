//Карточки
const initialCards = [
  {
    name: "Архыз",
    link: "images/elbrus.jpg",
  },
  {
    name: "Челябинская область",
    link: "",
  },
  {
    name: "Иваново",
    link: "",
  },
  {
    name: "Камчатка",
    link: "",
  },
  {
    name: "Холмогорский район",
    link: "",
  },
  {
    name: "Байкал",
    link: "",
  },
];

const popups = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_profile-edit");

const profileName = document.querySelector(".profile__name");
const occupationName = document.querySelector(".profile__description");

const editButton = document.querySelector(".profile__edit-button");
const placePopup = document.querySelector(".profile__add-button");
const addCardButton = document.querySelector(".popup__submit-button");

const cardAdd = document.querySelector(".popup_card-add");
const cardContainer = document.querySelector(".element__list");
const cardPopup = document.querySelector(".popup_card");
const cardImage = cardPopup.querySelector(".popup__image");
const cardDescription = cardPopup.querySelector(".figure__image");

const nameInput = popupProfile.querySelector('[name="username"]');
const occupationInput = popupProfile.querySelector('[name="description"]');

const photoName = cardAdd.querySelector('[name="name"]');
const photoLink = cardAdd.querySelector('[name="occupation');

function pasteCard() {
  const newCardElement = addCard(photoName.value, photoLink.value);
  cardContainer.prepend(newCardElement);
  closePopup(cardAdd);
  photoName.value = "";
  photoLink.value = "";
}

function openPopup(element) {
  element.classList.add("popup_opened");
}

function closePopup(element) {
  element.classList.remove("popup_opened");
}

function editProfile() {
  profileName.textContent = nameInput.value;
  occupationName.textContent = occupationInput.value;
  closePopup(popupProfile);
}

popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
  popup.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.target.closest(".popup_card-add")) {
      return pasteCard();
    }
    return event.target.closest(".popup_card-add") ? pasteCard(): editProfile();
  });
});

editButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  occupationInput.value = occupationName.textContent;
  openPopup(popupProfile);
});

placePopup.addEventListener("click", () => openPopup(cardAdd));

function cardPopupOpen(element) {
  cardImage.src = element.src;
  cardImage.alt = element.alt;
  cardDescription.textContent = element.alt;
  openPopup(cardPopup);
}

function addCard(imageTitle, imageLink) {
  const cardTemplate = document.querySelector("#element_add").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardTitle = cardElement.querySelector(".element__title");
  const cardImage = cardElement.querySelector(".element__image");

  cardElement.querySelector(".element__delete-button").addEventListener("click", (evt) => {
      evt.target.closest(".element").remove();
    });
  cardElement.querySelector(".element__like-button").addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__like-button_active");
    });

  cardTitle.textContent = imageTitle;
  cardImage.src = imageLink;
  cardImage.alt = imageTitle;
  cardImage.addEventListener("click", (evt) => cardPopupOpen(evt.target));

  return cardElement;
}

function pasteItems(data) {
  data.forEach(function (item) {
    const newCard = addCard(item.name, item.link);
    cardContainer.append(newCard);
  });
};

pasteItems(initialCards);
