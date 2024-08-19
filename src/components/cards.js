const template = document.querySelector(".template__card");

export default class Card {
  constructor(
    item,
    handleClickCard,
    userId,
    handleDeleteCard,
    handleLikeCard,
    handleRemoveLike
  ) {
    this._name = item.name;
    this._link = item.link;
    this._id = item._id;
    this._likes = item.likes;
    this._owner = item.owner;
    this._userId = userId;
    this._card = this.getTemplate();
    this._cardId = item._id;
    this._handleClickCard = handleClickCard;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeCard = handleLikeCard;
    this._handleRemovelike = handleRemoveLike;
  }
  getTemplate() {
    return template.cloneNode(true).content.querySelector(".element");
  }

  _setProperties() {
    this._cardImage = this._card.querySelector(".element__image");
    this._cardTitle = this._card.querySelector(".element__title");
    this._btnDelete = this._card.querySelector(".element__button");
    this._btnLike = this._card.querySelector(".element__title-button");
    if (this._owner._id !== this._userId) {
      this._btnDelete.remove();
    }
    if (this._likes.some((item) => item._id === this._userId)) {
      this._btnLike.classList.toggle("element__title-button-active");
    }
    this._likesCounter = this._card.querySelector(".element__likes-number");
    this._likesCounter.textContent = this._likes.length;
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this._card.id = `id_${this._cardId}`;
  }

  _handleDeleteCard() {
    this._card.remove();
  }
  _changeLikeCounter(newArrayLikes) {
    this._likes = newArrayLikes;
    this._likesCounter.textContent = newArrayLikes.length;
  }

  _setEventListeners() {
    this._btnLike.addEventListener("click", () => {
      if (this._likes.some((item) => item._id === this._userId)) {
        this._handleRemovelike(this._cardId).then((cardWithLike) => {
          this._changeLikeCounter(cardWithLike.likes);
        });
        this._btnLike.classList.toggle("element__title-button-active");
      } else {
        this._handleLikeCard(this._cardId).then((cardWithLike) => {
          this._changeLikeCounter(cardWithLike.likes);
        });
        this._btnLike.classList.toggle("element__title-button-active");
      }
    });
    this._btnDelete.addEventListener("click", () => {
      this._handleDeleteCard(this._cardId);
    });
    this._cardImage.addEventListener("click", () => {
      this._handleClickCard(this._link, this._name);
    });
  }

  generateCard() {
    this._setProperties();
    this._setEventListeners();
    return this._card;
  }
}
