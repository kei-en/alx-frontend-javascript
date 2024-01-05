/* eslint-disable no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    // Create objects
    this._code = code;
    this._name = name;
  }

  // Methods

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
