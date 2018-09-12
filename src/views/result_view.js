const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');

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
  createAndAppend('h2', family.name, this.element);
  createAndAppend('p', family.description, this.element);
  createAndAppend('h2', 'Instruments Include', this.element);
  const familyInstrumentList = createAndAppend('ul', '', this.element);
  family.instruments.forEach(instrument => {
    createAndAppend('li', instrument, familyInstrumentList);
  })
}

module.exports = ResultView;
