import PopupWithForm from "../components/popupwithform.js";
import Card from "../components/cards.js";
import UserInfo from "../components/userinfo.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";
import {
  popupProfile,
  profileButton,
  popupCards,
  openCardForm,
  profileName,
  profileRole,
  inputName,
  inputRole,
  inputCardTitle,
  inputCardImage,
  cardArea,
  initialCards,
  config,
} from "../components/utils.js";
import PopupWithImage from "../components/popupwithimage.js";
import Section from "../components/section.js";

inputName.value = profileName.textContent;
inputRole.value = profileRole.textContent;

const userInfo = new UserInfo({
  nameSelector: "#profile-name",
  roleSelector: ".profile__info-role",
});

const popupPicture = new PopupWithImage("#popup-image");
popupPicture.setEventListeners();

const popupUser = new PopupWithForm("#popup-profile", (input) => {
  userInfo.setUserInfo({ name: input.name, role: input.job });
});
popupUser.setEventListeners();

const popupCard = new PopupWithForm("#popup-addcard", () => {
  const newCard = new Card(
    inputCardTitle.value,
    inputCardImage.value,
    (link, name) => popupPicture.open(link, name)
  ).generateCard();
  cardArea.prepend(newCard);
});
popupCard.setEventListeners();

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cards = new Card(item.name, item.link, () => {
        popupPicture.open(item.link, item.name);
      });
      const cardElement = cards.generateCard();

      cardList.addItem(cardElement);
    },
  },
  ".elements"
);

cardList.renderItems();

profileButton.addEventListener("click", () => {
  popupUser.open(profileName.textContent, profileRole.textContent);
});

openCardForm.addEventListener("click", () => {
  popupCard.open();
});

const profileFormValidation = new FormValidator(popupProfile, config);
profileFormValidation.enableValidation();

const cardFormValidation = new FormValidator(popupCards, config);
cardFormValidation.enableValidation();
