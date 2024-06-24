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
import FormValidator from "../components/FormValidator.js";

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

function handleClickOut(evt) {
  if (evt.target.className === "popup__overlay") {
    handleCloseProfile();
    handleCloseAddCards();
    handlecloseImage();
  }

  function handlecloseImage() {
    popupImage.classList.remove("popup__image-open");
  }
}
