const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const dropDown = document.querySelector('#instrument-families');
  const selectView = new SelectView(dropDown);
  selectView.bindEvents();

  const section = document.querySelector('#instrument-details')
  const resultView = new ResultView(section);
  resultView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies;
  instrumentFamilies.bindEvents();
});
