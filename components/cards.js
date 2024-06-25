const template = document.querySelector(".template__card");

export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this._card = this.getTemplate();
  }
  getTemplate() {
    return template.cloneNode(true).content.querySelector(".element");
  }

  _setProperties() {
    this._cardImage = this._card.querySelector(".element__image");
    this._cardTitle = this._card.querySelector(".element__title");
    this._btnDelete = this._card.querySelector(".element__button");
    this._btnLike = this._card.querySelector(".element__title-button");
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
  }

  _handleLike() {
    this._btnLike.classList.toggle("element__title-button-active");
  }

  _handleRemove() {
    this._card.remove();
  }

  _setEventListeners() {
    this._btnLike.addEventListener("click", () => {
      this._handleLike();
    });
    this._btnDelete.addEventListener("click", () => {
      this._handleRemove();
    });
  }

  generateCard() {
    this._setProperties();
    this._setEventListeners();

    return this._card;
  }
}
