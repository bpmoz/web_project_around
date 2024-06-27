export function handleOpenPopups(popup) {
  popup
    .querySelector(".popup__overlay")
    .addEventListener("click", handleClickOut);
  popup.classList.add("popup__open");
}

export function handleClosePopups(popup) {
  popup
    .querySelector(".popup__overlay")
    .removeEventListener("click", handleClickOut);
  popup.classList.remove("popup__open");
}

export function handleEscapeKey(evt, popup) {
  if (evt.key === "Escape") {
    handleClosePopups(popup);
  }
}

export function handleClickOut(evt) {
  const popup = evt.target.closest(".popup");
  handleClosePopups(popup);
}
