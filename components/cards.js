import { template } from "../scripts/utils.js";

export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this._card = this.getTemplate();
  }
  getTemplate() {
    return template.cloneNode(true).content.querySelector(".element");
  }

  setProperties() {
    this._cardImage = this._card.querySelector(".element__image");
    this._cardTitle = this._card.querySelector(".element__title");
    this._btnDelete = this._card.querySelector(".element__button");
    this._btnLike = this._card.querySelector(".element__title-button");
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
  }

  handleLike() {
    this._btnLike.classList.toggle("element__title-button-active");
  }

  handleRemove() {
    this._card.remove();
  }

  setEventListeners() {
    this._btnLike.addEventListener("click", () => {
      this.handleLike();
    });
    this._btnDelete.addEventListener("click", () => {
      this.handleRemove();
    });
  }

  generateCard() {
    this.setProperties();
    this.setEventListeners();

    return this._card;
  }
}
