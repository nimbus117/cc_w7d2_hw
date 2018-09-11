const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (section) {
  this.section = section;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:selected-ready', e => {
    console.log(e.detail);
  })
}

module.exports = ResultView;
