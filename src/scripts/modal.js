"use strict";
//Модальные окна
export function openModalWindow(modalWindow) {
  //открытие
  modalWindow.classList.add("popup_opened");
  document.addEventListener("click", closeOnOverlay);
  document.addEventListener("keydown", closeOnEscape);
}

export function closeModalWindow() {
  //закрытие
  const openedPopup = document.querySelector(".popup_opened");
  if (openedPopup) {
    openedPopup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeOnEscape);
    document.removeEventListener("click", closeOnOverlay);
  }
}

//Закрытие по ESC
function closeOnEscape(evt) {
  if (evt.key === "Escape") {
    closeModalWindow();
  }
}

//закрытие по клику вне окна попапа
function closeOnOverlay(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closeModalWindow();
  }
}
