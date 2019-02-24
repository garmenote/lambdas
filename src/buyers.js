const dataStore = require('../services/dataStore');
const { LIMIT_ROWS } = require('../constants/common')

const getBuyers = async (event, context) =>  {
  try {
    const prepareStatement = `SELECT buyer_name FROM buyers LIMIT ${LIMIT_ROWS}`;
    const result =  await dataStore.dbInstance.any(prepareStatement);
    return result;
  } catch (error) {
    console.error(error);
    return {  error: error.toString() }
  }
};

const addBuyer = async (event, context) => {
  try {
    const { buyerName } = event;
    const prepareStatement = 'INSERT INTO buyers (buyer_name) VALUES ${buyerName}';
    const result =  await dataStore.dbInstance.any(prepareStatement, { buyerName });
    return result;
  } catch (error) {
    console.error(error);
    return {  error: error.toString() }
  }
};


module.exports = {
  getBuyers,
  addBuyer
}
