const dataStore = require('../services/dataStore');

const getGarments = async () =>  {
  try {
    const prepareStatement = 'SELECT garments_name FROM garments LIMIT;';
    const result =  await dataStore.dbInstance.any(prepareStatement);
    return result;
  } catch (error) {
    console.error(error);
    return {  error: error.toString() }
  }
};

const addGarment = async (garmentName) => {
  try {
    const prepareStatement = 'INSERT INTO garments (garments_name) VALUES ${garmentName}';
    const result =  await dataStore.dbInstance.any(prepareStatement, { garmentName });
    return result;
  } catch (error) {
    console.error(error);
    return {  error: error.toString() }
  }
};


module.exports = {
  getGarments,
  addGarment
}
