export default class FormValidator {
  constructor(settings, formElement) {
    this._formElement = formElement;
    this.settings = settings;
  }

  _checkInputValidity() {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        this.settings
      );
    } else {
      this._hideInputError(this._formElement, inputElement, this.settings);
    }
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this.butttonElement.classList.add(this.settings.inactiveButtonClass);
    } else {
      this.butttonElement.classList.remove(this.settings.inactiveButtonClass);
    }
  }

  _showInputError() {
    this.errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.settings.inputErrorClass);
    this.errorElement.textContent = errorMessage;
  }

  _hideInputError() {
    this.errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this.settings.inputErrorClass);
    this.errorElement.textContent = "";
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this.settings.inputSelector)
    );
    this.butttonElement = this._formElement.querySelector(
      this.settings.submitButtonSelector
    );
    toggleButtonState(_inputList, buttonElement, settings);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(_formElement, inputElement, settings);
        toggleButtonState(_inputList, buttonElement, settings);
      });
    });
  }

  enableValidation() {
    this._setEventListeners(this._formElement);
  }
}
