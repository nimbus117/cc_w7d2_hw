const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (section) {
  this.section = section;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:selected-ready', e => {
    console.log(e.detail);
    this.renderFamilyInfo(e.detail);
  })
}

ResultView.prototype.renderFamilyInfo = function (family) {
  const familyInfoHeading = document.createElement('h2');
  familyInfoHeading.textContent = family.name;
  const familyInfoParagraph = document.createElement('p');
  familyInfoParagraph.textContent = family.description;
  this.section.innerHTML = '';
  this.section.appendChild(familyInfoHeading);
  this.section.appendChild(familyInfoParagraph);
}

module.exports = ResultView;
