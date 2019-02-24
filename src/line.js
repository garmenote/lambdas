const dataStore = require('../services/dataStore');

const getLines = async () =>  {
  try {
    const prepareStatement = 'SELECT line_name FROM lineNumber LIMIT;';
    const result =  await dataStore.dbInstance.any(prepareStatement);
    return result;
  } catch (error) {
    console.error(error);
    return {  error: error.toString() }
  }
};

const addLine = async (lineName) => {
  try {
    const prepareStatement = 'INSERT INTO lineNumber (line_name) VALUES ${LineName}';
    const result =  await dataStore.dbInstance.any(prepareStatement, { lineName });
    return result;
  } catch (error) {
    console.error(error);
    return {  error: error.toString() }
  }
};


module.exports = {
  getLines,
  addLine
}
