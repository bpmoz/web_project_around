import {
  handleOpenPopups,
  handleClosePopups,
  handleEscapeKey,
} from "./utils.js";
import Card from "./cards.js";
import FormValidator from "./FormValidator.js";

const popup = document.querySelector(".popup");
const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__info-edit");
const popupCards = document.querySelector("#popup-addcard");
const openCardForm = document.querySelector(".profile__button");
const profileName = document.querySelector("#profile-name");
const profileRole = document.querySelector("#profile-role");
const inputName = document.querySelector("#input-name");
const inputRole = document.querySelector("#input-role");
const cardTitle = document.querySelector(".element__title");
const inputCardTitle = document.querySelector("#input-title-card");
const inputCardImage = document.querySelector("#input-link-card");
const formProfile = document.querySelector("#profile-form");
const formCards = document.querySelector("#form-addcard");
const profileCloseButton = document.querySelector(".popup__close-icon");
const cardFormCloseButton = popupCards.querySelector("#popup-close");
const imageCloseButton = document.querySelector(".popup__close-icon-image");
const cardArea = document.querySelector(".elements");
export const popupImage = document.querySelector("#popup-image");
const elementImage = document.querySelector(".element__image");
export const popupPhoto = popupImage.querySelector(".popup__image-full");
export const popuptitle = popupImage.querySelector(".popup__image-title");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  handleClosePopups(popupProfile);
}

function handlePopupCardsSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card(
    inputCardTitle.value,
    inputCardImage.value
  ).generateCard();
  handleClosePopups(popupCards);
  cardArea.prepend(newCard);
}

initialCards.forEach((element) => {
  const newCard = new Card(element.name, element.link).generateCard();
  cardArea.append(newCard);
});

inputName.value = profileName.textContent;
inputRole.value = profileRole.textContent;

profileButton.addEventListener("click", () => {
  handleOpenPopups(popupProfile);
});

profileCloseButton.addEventListener("click", () => {
  handleClosePopups(popupProfile);
});

openCardForm.addEventListener("click", () => {
  handleOpenPopups(popupCards);
});

cardFormCloseButton.addEventListener("click", () => {
  handleClosePopups(popupCards);
});

imageCloseButton.addEventListener("click", () => {
  handleClosePopups(popupImage);
});

document.addEventListener("keydown", (evt) => {
  handleEscapeKey(evt, popupProfile);
  handleEscapeKey(evt, popupCards);
  handleEscapeKey(evt, popupImage);
});

formProfile.addEventListener("submit", handleProfileFormSubmit);
formCards.addEventListener("submit", handlePopupCardsSubmit);

const config = {
  inputSelector: ".popup__input",
  formSelector: ".popup__form",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: ".popup__btn_disabled",
  inputErrorClass: ".popup__input_type_error",
  inputErrorMessageClass: ".popup__error-visible",
};

const profileFormValidation = new FormValidator(popupProfile, config);
profileFormValidation.enableValidation();

const cardFormValidation = new FormValidator(popupCards, config);
cardFormValidation.enableValidation();
