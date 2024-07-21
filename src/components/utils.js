export const popupProfile = document.querySelector("#popup-profile");
export const profileButton = document.querySelector(".profile__info-edit");
export const popupCards = document.querySelector("#popup-addcard");
export const openCardForm = document.querySelector(".profile__button");
export const profileName = document.querySelector("#profile-name");
export const profileRole = document.querySelector("#profile-role");
export const inputName = document.querySelector("#input-name");
export const inputRole = document.querySelector("#input-role");
export const inputCardTitle = document.querySelector("#input-title-card");
export const inputCardImage = document.querySelector("#input-link-card");
export const cardArea = document.querySelector(".elements");
export const closeBtnPopups = document.querySelector(".popup__close-icon");
export const initialCards = [
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

export const config = {
  inputSelector: ".popup__input",
  formSelector: ".popup__form",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: ".popup__btn_disabled",
  inputErrorClass: ".popup__input_type_error",
  inputErrorMessageClass: ".popup__error-visible",
};
