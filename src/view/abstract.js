import {createElement} from './utils';

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error('Error');
    }
    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error('Abstract method not implemented: getTemplate');
  }

  getElement() {
    if (!this._element){
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}