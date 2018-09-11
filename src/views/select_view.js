const PubSub = require('../helpers/pub_sub.js');
const CreateAndAppend = require('../helpers/create_append.js');

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:all-ready', e => {
    this.populateOptions(e.detail);
  })

  this.element.addEventListener('change', e => {
    const index = e.target.value;
    PubSub.publish('SelectView:change', index);
  })
}

SelectView.prototype.populateOptions = function (instruments) {
  instruments.forEach((instrument, index) => {
    const option = CreateAndAppend('option', instrument.name, this.element);
    option.value = index;
  })
}

module.exports = SelectView;
