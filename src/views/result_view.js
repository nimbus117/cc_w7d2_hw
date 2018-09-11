const PubSub = require('../helpers/pub_sub.js');
const CreateAndAppend = require('../helpers/create_append.js');

const ResultView = function (section) {
  this.section = section;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:selected-ready', e => {
    this.render(e.detail);
  })
}

ResultView.prototype.render = function (family) {
  this.section.innerHTML = '';
  CreateAndAppend('h2', family.name, this.section);
  CreateAndAppend('p', family.description, this.section);
  CreateAndAppend('h2', 'Instruments Include', this.section);
  const familyInstrumentList = CreateAndAppend('ul', '', this.section);
  family.instruments.forEach(instr => {
    CreateAndAppend('li', instr, familyInstrumentList);
  })
}

module.exports = ResultView;
