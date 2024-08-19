import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._inputList = Array.from(
      this._formElement.querySelectorAll(".popup__input")
    );
    this._formButton = this._popupElement.querySelector(".popup__btn");
  }

  getInputValues() {
    this.formValues = {};
    this._inputList.forEach((input) => {
      this.formValues[input.name] = input.value;
    });
    return this.formValues;
  }

  open(contentFirstInput, contentSecondInput) {
    this._formButton.textContent = "Guardar";
    super.open();
    this._inputList[0].value = contentFirstInput || "";
    if (this._inputList[1]) {
      this._inputList[1].value = contentSecondInput || "";
    }
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formButton.textContent = "Guardando...";
      const closeOn = () => this.close();
      this._handleFormSubmit(this.getInputValues(), closeOn);
    });
  }
}
