export default class FormValidator {
  constructor(formElement, settings) {
    this._settings = settings;
    this._formElement = formElement;
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

  _showInputError(inputElement, errorMessage, _formElement) {
    this.errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );

    inputElement.classList.add(this._settings.inputErrorClass);

    this.errorElement.classList.add(this._settings.inputErrorMessageClass);
    this.errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement, _formElement) {
    this.errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._settings.inputErrorClass);
    this.errorElement.classList.remove(this._settings.errorClass);
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

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement, formElement);
        this._toggleButtonState(buttonElement, inputList);
      });
    });
  }

  enableValidation() {
    const formList = Array.from(
      document.querySelectorAll(this._settings.formSelector)
    );
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
    });
    this._setEventListeners();
  }
}
