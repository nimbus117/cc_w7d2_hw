const PubSub = require('../helpers/pub_sub.js');
const CreateAndAppend = require('../helpers/create_append.js');

const ResultView = function (element) {
  this.element = element;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:selected-ready', e => {
    this.render(e.detail);
  })
}

ResultView.prototype.render = function (family) {
  this.element.innerHTML = '';
  CreateAndAppend('h2', family.name, this.element);
  CreateAndAppend('p', family.description, this.element);
  CreateAndAppend('h2', 'Instruments Include', this.element);
  const familyInstrumentList = CreateAndAppend('ul', '', this.element);
  family.instruments.forEach(instrument => {
    CreateAndAppend('li', instrument, familyInstrumentList);
  })
}

module.exports = ResultView;
