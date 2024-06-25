export default class FormValidator {
  constructor(formElement, settings) {
    this._settings = settings;
    this._formElement = formElement;
    console.log(settings);
    console.log(formElement);
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(buttonElement, inputList) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._settings.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _showInputError(inputElement, errorMessage, formElement) {
    this.errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._settings.inputErrorClass);

    this.errorElement.classList.add(settings.inputErrorMessageClass);
    this.errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement, formElement) {
    this.errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    this.errorElement.classList.remove(".popup__error-visible");
    this.errorElement.textContent = "";
  }

  _checkInputValidity(inputElement, formElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        inputElement,
        inputElement.validationMessage,
        formElement
      );
    } else {
      this._hideInputError(inputElement, formElement);
    }
  }

  _setEventListeners(formElement) {
    let inputList = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector)
    );
    let buttonElement = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );

    this._toggleButtonState(buttonElement, inputList);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement, formElement);
        this._toggleButtonState(buttonElement, inputList);
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
