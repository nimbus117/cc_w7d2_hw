const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (dropDown) {
  this.dropDown = dropDown;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:all-ready', (e) => {
    console.log(e.detail);
    this.populateOptions(e.detail);
  })

  this.dropDown.addEventListener('change', e => {
    const index = e.target.value;
    console.log(index);
    PubSub.publish('SelectView:change', index);
  })
}

SelectView.prototype.populateOptions = function (instruments) {
  instruments.forEach((instr, index) => {
    const option = document.createElement('option');
    option.textContent = instr.name;
    option.value = index;
    this.dropDown.appendChild(option);
  })
}

module.exports = SelectView;
