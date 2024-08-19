import Api from "../components/api.js";
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
  profileAvatarContainer,
  profileAvatarBtn,
  profileAvatarForm,
} from "../components/utils.js";
import PopupWithImage from "../components/popupwithimage.js";
import Section from "../components/section.js";
import PopupWithConfirmation from "../components/popupwithconfirmation.js";

inputName.value = profileName.textContent;
inputRole.value = profileRole.textContent;

const userInfo = new UserInfo({
  nameSelector: "#profile-name",
  roleSelector: ".profile__info-role",
  avatarSelector: ".profile__image",
});

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_11",
  headers: {
    authorization: "973de3af-50d3-4d36-a3b6-c4529a18880b",
    "Content-Type": "application/json",
  },
});
api.getUserInfo().then((result) => {
  userInfo.setUserInfo(result);

  api.getInitialCards().then((result) => {
    const cardList = new Section(
      {
        items: result,
        renderer: (item) => {
          const cards = new Card(
            item,

            () => {
              popupPicture.open(item.link, item.name);
            },
            userInfo._userId,
            () => {
              popupWithConfirmation.open(item._id);
            },
            (cardId) => api.addLike(cardId),
            (cardId) => api.removeLike(cardId)
          );
          const cardElement = cards.generateCard();

          cardList.addItem(cardElement);
        },
      },
      ".elements"
    );

    cardList.renderItems();
  });
});

const popupPicture = new PopupWithImage("#popup-image");
popupPicture.setEventListeners();

const popupUser = new PopupWithForm("#popup-profile", (input) => {
  api.editProfile(input).then((result) => {
    userInfo.setUserInfo(result);
    popupUser.close();
  });
});
popupUser.setEventListeners();

const popupAvatarProfile = new PopupWithForm(
  "#popup-avatar-profile",
  (inputs) => {
    api.editAvatarProfile(inputs).then((result) => {
      userInfo.setUserInfo(result);
      popupAvatarProfile.close();
    });
  }
);
popupAvatarProfile.setEventListeners();

const popupCard = new PopupWithForm("#popup-addcard", (input) => {
  api.addcards(input).then((result) => {
    const newCard = new Card(
      result,
      () => {
        popupPicture.open(result.link, result.name);
      },

      userInfo._userId,
      () => {
        popupWithConfirmation.open(result._id);
      },

      (cardId) => api.addLike(cardId),
      (cardId) => api.removeLike(cardId)
    );
    const newCardElement = newCard.generateCard();
    cardArea.prepend(newCardElement);
    popupCard.close();
  });
});
popupCard.setEventListeners();

const popupWithConfirmation = new PopupWithConfirmation(
  "#popup-delete-confirmation",
  (cardToDelete) => {
    api.deleteCard(cardToDelete).then(() => {
      popupWithConfirmation.close();
      const card = document.querySelector(`#id_${cardToDelete}`);
      card.remove();
    });
  }
);
popupWithConfirmation.setEventListeners();

profileButton.addEventListener("click", () => {
  popupUser.open(profileName.textContent, profileRole.textContent);
});

openCardForm.addEventListener("click", () => {
  popupCard.open();
});

profileAvatarBtn.addEventListener("click", () => {
  popupAvatarProfile.open();
});

const avatarProfileFormValidation = new FormValidator(
  profileAvatarContainer,
  config
);
avatarProfileFormValidation.enableValidation();

const profileFormValidation = new FormValidator(popupProfile, config);
profileFormValidation.enableValidation();

const cardFormValidation = new FormValidator(popupCards, config);
cardFormValidation.enableValidation();
