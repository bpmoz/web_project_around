const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__info-edit");
const profileName = document.querySelector("#profile-name");
const profileRole = document.querySelector("#profile-role");
const inputName = document.querySelector("#input-name");
const inputRole = document.querySelector("#input-role");
const formProfile = document.querySelector("#profile-form");
const profileCloseButton = document.querySelector(".popup__close-icon");

function handleOpenProfile(evt) {
  popupProfile.classList.add("popup__open");
}

function handleCloseProfile() {
  popupProfile.classList.remove("popup__open");
}

profileCloseButton.addEventListener("click", handleCloseProfile);

profileButton.addEventListener("click", handleOpenProfile);

formProfile.addEventListener("submit", function (evt) {
  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  evt.preventDefault();
  handleCloseProfile();
});
