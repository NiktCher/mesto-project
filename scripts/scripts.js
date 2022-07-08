
//Профиль:
const editButton = document.querySelector(".profile__edit-button");
const closeEditButton = document.querySelector(".popup__close-button");
const editPopup = document.querySelector(".popup");
const addButton = document.querySelector(".profile__add-button");
const closeNewPlaceButton = document.querySelector(".newplace__close-button");
const newPlace = document.querySelector(".newplace");
const username = document.getElementById("username");
const description = document.getElementById("description");
const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__description");
const imgBig = document.querySelector(".image-big");
const closeBigImg = document.querySelector(".image-big__close-button");
const editForm = document.querySelector(".popup__form"); 
const newPlaceFormElement = document.querySelector(".newplace__form");
const placeContainer = document.querySelector(".places"); 

//Открытие и закрытие окон:
function openModalWindow(modalWindow) {
  modalWindow.classList.add("popup_opened");
}

function closeModalWindow(modalWindow) {
  modalWindow.classList.remove("popup_opened");
}

//Окно редактирования:
function openEditPopup() {
  username.value = profileName.textContent; 
  description.value = profileSubtitle.textContent;
  openModalWindow(editPopup);
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  const name = username.value;
  const job = description.value;
  profileName.textContent = name; 
  profileSubtitle.textContent = job;
  closeModalWindow(editPopup); 
}

//Карточки с фотографиями
//Карточки из массива:
initialCards.forEach((item) => {
  addCard(placeContainer, createCard(item.name, item.link));
});

//Добавление карточки через кнопку
function openNewPlace() {
  openModalWindow(newPlace);
}

function createCard(placeName, placeUrl) {
  const placeTemplate = document.querySelector("#place-template").content;
  const placeElement = placeTemplate.querySelector(".place").cloneNode(true); 
  placeElement.querySelector(".place__title").textContent = placeName; 
  placeElement.querySelector(".place__image").src = placeUrl; 
  placeElement.querySelector(".place__image").alt = placeName; 
  placeElement
    .querySelector(".place__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("place__like_active"); 
    });
  placeElement
    .querySelector(".place__image")
    .addEventListener("click", function () {
      document.querySelector(".image-big__image").src = placeUrl;
      document.querySelector(".image-big__image").alt = placeName;
      document.querySelector(".image-big__figcaption").textContent = placeName;
      openModalWindow(imgBig);
    });
  placeElement
    .querySelector(".place__delete")
    .addEventListener("click", function () {
      const placeItem = placeElement.closest(".place"); 
      placeItem.remove(); 
    });
  return placeElement;
}

function addCard(сontainer, element) {
  сontainer.prepend(element);
}

function newPlaceSubmitHandler(evt) {
  evt.preventDefault();
  const name = document.querySelector("#place-name");
  const url = document.querySelector("#image-link");
  addCard(placeContainer, createCard(name.value, url.value));
  closeModalWindow(newPlace);
}

//Открытие большой картинки:
function openImgBig() {
  openModalWindow(imgBig);
}


closeBigImg.addEventListener("click", function () {
  closeModalWindow(imgBig);
}); 
editButton.addEventListener("click", openEditPopup);
closeEditButton.addEventListener("click", function () {
  closeModalWindow(editPopup);
});
addButton.addEventListener("click", () => openModalWindow(newPlace));
closeNewPlaceButton.addEventListener("click", function () {
  closeModalWindow(newPlace);
});

// Прикрепляем обработчик к форме редактирования профиля:
editForm.addEventListener("submit", editFormSubmitHandler);

// Прикрепляем обработчик к форме нового места:
newPlaceFormElement.addEventListener("submit", newPlaceSubmitHandler);
