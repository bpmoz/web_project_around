export default class Section {
  constructor({ items, renderer }, cardSectionSelector) {
    this._rendererItems = items;
    this._renderer = renderer;
    this._section = document.querySelector(cardSectionSelector);
  }

  addItem(element) {
    this._section.append(element);
  }

  renderItems() {
    this._rendererItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
