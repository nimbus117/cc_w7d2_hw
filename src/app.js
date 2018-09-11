const InstrumentFamilies = require('./models/instrument_families.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const instrumentFamilies = new InstrumentFamilies;
  instrumentFamilies.bindEvents();
});
