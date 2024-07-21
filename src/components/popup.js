export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscapeKey = this._handleEscapeKey.bind(this);
    this._closeBtn = this._popupElement.querySelector(".popup__close-icon");
  }

  open() {
    this._popupElement.classList.add("popup__open");
    document.addEventListener("keydown", this._handleEscapeKey);
  }

  close() {
    this._popupElement.classList.remove("popup__open");
  }

  _handleEscapeKey(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._closeBtn.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target.className === "popup__overlay") {
        this.close();
      }
    });
  }
}
