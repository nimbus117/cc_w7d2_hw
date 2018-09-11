const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (section) {
  this.section = section;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:selected-ready', e => {
    console.log(e.detail);
    this.section.innerHTML = '';
    this.renderFamilyInfo(e.detail);
    this.renderFamilyInstruments(e.detail);
  })
}

ResultView.prototype.renderFamilyInfo = function (family) {
  const familyInfoHeading = document.createElement('h2');
  familyInfoHeading.textContent = family.name;
  this.section.appendChild(familyInfoHeading);
  const familyInfoParagraph = document.createElement('p');
  familyInfoParagraph.textContent = family.description;
  this.section.appendChild(familyInfoParagraph);
}

ResultView.prototype.renderFamilyInstruments = function (family) {
  const familyInstrumentHeading = document.createElement('h2');
  familyInstrumentHeading.textContent = 'Instruments Include';
  this.section.appendChild(familyInstrumentHeading);
  const familyInstrumentList = document.createElement('ul');
  this.section.appendChild(familyInstrumentList);
  family.instruments.forEach(instr => {
    console.log(instr);
    let listItem = document.createElement('li');
    listItem.textContent = instr;
    familyInstrumentList.appendChild(listItem);
  })
}

module.exports = ResultView;
