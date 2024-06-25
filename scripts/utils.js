export function handleOpenPopups(popup) {
  popup.classList.add("popup__open");
}

export function handleClosePopups(popup) {
  popup.classList.remove("popup__open");
}

export function handleEscapeKey(evt, popup) {
  if (evt.key === "Escape") {
    handleClosePopups(popup);
  }
}

export function handleClickOut(evt) {
  if (evt.target.className === "popup__overlay") {
    console.log("es esto?");
    handleClosePopups(evt.target);
  }
}
