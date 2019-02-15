const buyers = require('./src/buyers');
 
const handler = async (event, context) => {
  try {
    const result =  await buyers.getBuyers();
    return result
  } catch (error) {
    return { error }
  }
};

module.exports = { handler };
