import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector(".popup__image-full");
    this._title = this._popupElement.querySelector(".popup__image-title");
  }

  open(link, name) {
    super.open();
    this._image.src = link;
    this._title.textContent = name;
  }
}
