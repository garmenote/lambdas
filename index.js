const { getBuyers, addBuyer } = require('./src/buyers');
const { getGarmentComponents, addGarmentComponent } = require('./src/garmentComponents');
const { getGarments, addGarment } = require('./src/garments');
const { getLines, addLine } = require('./src/line');

module.exports = {
  getBuyers,
  addBuyer,
  getGarmentComponents,
  addGarmentComponent,
  getGarments,
  addGarment,
  getLines,
  addLine
};
