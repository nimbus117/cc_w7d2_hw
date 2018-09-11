const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const dropDown = document.querySelector('#instrument-families');
  const selectView = new SelectView(dropDown);
  selectView.bindEvents();


  // needs to be last
  const instrumentFamilies = new InstrumentFamilies;
  instrumentFamilies.bindEvents();
});
