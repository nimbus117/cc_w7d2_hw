const PubSub = require('../helpers/pub_sub.js');
const CreateAndAppend = require('../helpers/create_append.js');

const SelectView = function (dropDown) {
  this.dropDown = dropDown;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:all-ready', e => {
    this.populateOptions(e.detail);
  })

  this.dropDown.addEventListener('change', e => {
    const index = e.target.value;
    PubSub.publish('SelectView:change', index);
  })
}

SelectView.prototype.populateOptions = function (instruments) {
  instruments.forEach((instr, index) => {
    const option = CreateAndAppend('option', instr.name, this.dropDown);
    option.value = index;
  })
}

module.exports = SelectView;
