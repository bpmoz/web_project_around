import Card from "../components/cards.js";
import {
  initialCards,
  popup,
  profileButton,
  openCardForm,
  profileName,
  profileRole,
  inputName,
  inputRole,
  cardTitle,
  inputCardTitle,
  inputCardImage,
  formProfile,
  formCards,
  profileCloseButton,
  cardFormCloseButton,
  imageCloseButton,
  template,
  cardArea,
  popupImage,
} from "./utils.js";
import Popup from "../components/popup.js";
import PopupWithForm from "../components/popwithform.js";

// function cardGenerator(name, link) {
//   const card = template.cloneNode(true).content.querySelector(".element");
//   const cardImage = card.querySelector(".element__image");
//   const cardTitle = card.querySelector(".element__title");
//   const btnDelete = card.querySelector(".element__button");
//   const btnLike = card.querySelector(".element__title-button");
//   cardImage.src = link;
//   cardTitle.textContent = name;
//   cardImage.alt = name;

//   function handleRemoveCard() {
//     card.remove();
//   }

//   function handleLikeCard() {
//     btnLike.classList.toggle("element__title-button-active");
//   }

//   function handleOpenImage() {
//     popupImage.classList.add("popup__image-open");
//     const popupPhoto = popupImage.querySelector(".popup__image-full");
//     const popuptitle = popupImage.querySelector(".popup__image-title");
//     popupPhoto.src = link;
//     popuptitle.textContent = name;
//     popupPhoto.alt = name;
//   }

//   btnDelete.addEventListener("click", handleRemoveCard);
//   btnLike.addEventListener("click", handleLikeCard);
//   cardImage.addEventListener("click", handleOpenImage);

//   return card;
// }

initialCards.forEach(function (element) {
  const newCard = new Card(element.name, element.link);
  cardArea.append(newCard.generateCard());
});

const popupProfile = new PopupWithForm("#popup-profile", (settings) => {
  profileName.textContent = settings.name;
  profileRole.textContent = settings.job;
  console.log("modifica perfil");
});
const popupCards = new PopupWithForm("#popup-addcard", (settings) => {
  const newCard = new Card(settings.title, settings.link);
  cardArea.prepend(newCard.generateCard());
  console.log("modifica carta");
});

popupProfile.setEventListeners();
popupCards.setEventListeners();

function handleClickOut(evt) {
  if (evt.target.className === "popup__overlay") {
    handleCloseProfile();
    handleCloseAddCards();
    handlecloseImage();
  }
}

/*function handleOpenProfile() {
  popup.classList.add("popup__open");
  document.addEventListener("keydown", (evt) => {
    handleEscapeKey(evt);
  });
}

function handleCloseProfile() {
  popup.classList.remove("popup__open");
}

function handleOpenAddCards() {
  popupCards.classList.add("popup__open");
}

function handleCloseAddCards() {
  popupCards.classList.remove("popup__open");
}
  */
function handlecloseImage() {
  popupImage.classList.remove("popup__image-open");
}

inputName.value = profileName.textContent;
inputRole.value = profileRole.textContent;

profileButton.addEventListener("click", () => {
  popupProfile.open();
});

profileCloseButton.addEventListener("click", () => {
  popupProfile.close();
});

openCardForm.addEventListener("click", () => {
  popupCards.open();
});

cardFormCloseButton.addEventListener("click", () => {
  popupCards.close();
});

/*imageCloseButton.addEventListener("click", handlecloseImage);

popupCards.addEventListener("click", handleClickOut);

popup.addEventListener("click", handleClickOut);

popupImage.addEventListener("click", handleClickOut);

/*formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  popupProfile.close();
});*/
