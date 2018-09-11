const PubSub = require('../helpers/pub_sub.js');

const SelectView = function () {

}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:all-ready', (e) => {
    console.log(e.detail);
    this.populateOptions(e.detail);
  })
}

SelectView.prototype.populateOptions = function (instruments) {
  const dropDown = document.querySelector('#instrument-families');
  instruments.forEach((instr, index) => {
    const option = document.createElement('option');
    option.textContent = instr.name;
    option.value = index;
    dropDown.appendChild(option);
  })
}

module.exports = SelectView;
