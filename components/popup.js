export default class Popup {
  constructor(popupSelector, openClassNameSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup__open");
  }

  close() {
    this._popupElement.classList.remove("popup__open");
    document.removeEventListener("keydown", (evt) => handleEscapeKey(evt));
  }

  handleEscapeKey(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
}
