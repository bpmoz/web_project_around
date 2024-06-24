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
const cardFormCloseButton = document.querySelector("#popup-close");
const imageCloseButton = document.querySelector(".popup__close-icon-image");
const template = document.querySelector(".template__card");
const cardArea = document.querySelector(".elements");
const popupImage = document.querySelector("#popup-image");

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

function cardGenerator(name, link) {
  const card = template.cloneNode(true).content.querySelector(".element");
  const cardImage = card.querySelector(".element__image");
  const cardTitle = card.querySelector(".element__title");
  const btnDelete = card.querySelector(".element__button");
  const btnLike = card.querySelector(".element__title-button");
  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;

  function handleRemoveCard() {
    card.remove();
  }

  function handleLikeCard() {
    btnLike.classList.toggle("element__title-button-active");
  }

  function handleOpenImage() {
    popupImage.classList.add("popup__open");
    const popupPhoto = popupImage.querySelector(".popup__image-full");
    const popuptitle = popupImage.querySelector(".popup__image-title");
    popupPhoto.src = link;
    popuptitle.textContent = name;
    popupPhoto.alt = name;
  }

  btnDelete.addEventListener("click", handleRemoveCard);
  btnLike.addEventListener("click", handleLikeCard);
  cardImage.addEventListener("click", handleOpenImage);

  return card;
}

initialCards.forEach(function (element) {
  const newCard = cardGenerator(element.name, element.link);
  cardArea.append(newCard);
});

function handleOpenPopups(popup) {
  popup.classList.add("popup__open");
}

function handleClosePopups(popup) {
  popup.classList.remove("popup__open");
}

function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    handleClosePopups;
  }
}

function handleClickOut(evt) {
  if (evt.target.className === "popup__overlay") {
    handleCloseProfile();
    handleCloseAddCards();
    handlecloseImage();
  }
}

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

popupCards.addEventListener("click", handleClickOut);

popup.addEventListener("click", handleClickOut);

popupImage.addEventListener("click", handleClickOut);

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  handleClosePopups(popupProfile);
});

formCards.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardToAdd = cardGenerator(inputCardTitle.value, inputCardImage.value);
  cardArea.prepend(cardToAdd);
  handleCloseAddCards();
});
