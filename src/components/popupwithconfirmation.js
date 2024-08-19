import Popup from "./popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirmation) {
    super(popupSelector);
    this._handleConfirmation = handleConfirmation;
    this._formElement = this._popupElement.querySelector(".popup__container");
    this.cardId = "";
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleConfirmation(this.cardId);
      super.close();
    });
  }

  open(cardId) {
    this.cardId = cardId;
    super.open();
  }

  close() {
    super.close();
  }
}
