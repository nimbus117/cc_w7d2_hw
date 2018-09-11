const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectView = new SelectView;
  selectView.bindEvents();


  // needs to be last
  const instrumentFamilies = new InstrumentFamilies;
  instrumentFamilies.bindEvents();
});
