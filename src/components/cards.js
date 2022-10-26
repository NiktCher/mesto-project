"use strict";
import { openImgBig } from "./index.js";
import { deleteCard, setLike, deleteLike } from "./api.js";

export function createCard(card, userId) {
  const placeTemplate = document.querySelector("#place-template").content;
  const placeElement = placeTemplate.querySelector(".place").cloneNode(true);
  const placeTitle = placeElement.querySelector(".place__title");
  const likeButton = placeElement.querySelector(".place__like");
  const likeCounter = placeElement.querySelector(".place__like-count");
  const placeImg = placeElement.querySelector(".place__image");
  const placeDeleteButton = placeElement.querySelector(".place__delete");
  const image = document.querySelector(".image-big__image");
  const figcaption = document.querySelector(".image-big__figcaption");
  const likeActive = "place__like_active";
  const isUserOwner = card.owner._id === userId;
  placeTitle.textContent = card.name;
  placeImg.src = card.link;
  placeImg.alt = card.name;
  likeCounter.textContent = card.likes.length;
  if (userId) {
    const likedByUser = card.likes.some((userInfo) => {
      return userInfo._id === userId;
    });
    if (likedByUser) {
      likeButton.classList.add(likeActive);
    }
  }
  likeButton.addEventListener("click", function (evt) {
    if (likeButton.classList.contains(likeActive)) {
      deleteLike(card._id)
        .then((res) => {
          likeCounter.textContent = res.likes.length;
          likeButton.classList.remove(likeActive);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLike(card._id)
        .then((res) => {
          likeCounter.textContent = res.likes.length;
          likeButton.classList.add(likeActive);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  placeImg.addEventListener("click", function () {
    image.src = card.link;
    image.alt = card.name;
    figcaption.textContent = card.name;
    openImgBig();
  });
  if (isUserOwner) {
    placeDeleteButton.addEventListener("click", function () {
      deleteCard(card._id)
        .then(() => {
          const placeItem = placeElement.closest(".place");
          placeItem.remove();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  } else {
    placeDeleteButton.remove();
  }
  return placeElement;
}
