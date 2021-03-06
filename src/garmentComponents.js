const dataStore = require('../services/dataStore');
const { LIMIT_ROWS } = require('../constants/common')

const getGarmentComponents = async (event, context) =>  {
  try {
    const prepareStatement = 'SELECT component_name FROM components LIMIT;';
    const result =  await dataStore.dbInstance.any(prepareStatement);
    return result;
  } catch (error) {
    console.error(error);
    return {  error: error.toString() }
  }
};

const addGarmentComponent = async (event, context) => {
  try {
    const { garmentComponentName } = event
    const prepareStatement = 'INSERT INTO components (component_name) VALUES ${garmentComponentName}';
    const result =  await dataStore.dbInstance.any(prepareStatement, { garmentComponentName });
    return result;
  } catch (error) {
    console.error(error);
    return {  error: error.toString() }
  }
};


module.exports = {
  getGarmentComponents,
  addGarmentComponent
}
