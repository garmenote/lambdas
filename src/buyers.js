const dataStore = require('../services/dataStore');
const { LIMIT_ROWS } = require('../constants/common')

const getBuyers = async () =>  {
  try {
    const prepareStatement = `SELECT buyer_name FROM buyers LIMIT ${LIMIT_ROWS}`;
    const result =  await dataStore.dbInstance.any(prepareStatement);
    return result;
  } catch (error) {
    console.error(error);
    return {  error: error.toString() }
  }
};

module.exports = {
  getBuyers
}
