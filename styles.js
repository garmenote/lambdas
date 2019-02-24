const buyers = require('./src/buyers');
 
const getBuyers = async (event, context) => {
  try {
    const result =  await buyers.getBuyers();
    return result
  } catch (error) {
    return { error }
  }
};

const addBuyer = async (event, context) => {
  try {
    const { garmentName } = event;
    const result =  await buyers.addBuyer(garmentName);
    return result
  } catch (error) {
    return { error }
  }
};

module.exports = { getBuyers };
