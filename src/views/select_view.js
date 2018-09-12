const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:all-ready', e => {
    this.populateOptions(e.detail);
  })

  this.element.addEventListener('change', e => {
    PubSub.publish('SelectView:change', e.target.value);
  })
}

SelectView.prototype.populateOptions = function (instruments) {
  instruments.forEach((instrument, index) => {
    const option = createAndAppend('option', instrument.name, this.element);
    option.value = index;
  })
}

module.exports = SelectView;
