export default class Popup {
  constructor(popupSelector, openClassNameSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this._handleEscapeKey = this._handleEscapeKey.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup__open");
    document.addEventListener("keydown", this._handleEscapeKey);
  }

  close() {
    this._popupElement.classList.remove("popup__open");
    document.removeEventListener("keydown", this._handleEscapeKey);
  }

  _handleEscapeKey(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
}
