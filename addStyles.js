const buyers = require('./src/buyers');
 
const handler = async (event, context) => {
  try {
    const result =  await buyers.getBuyers();
    return result
  } catch (error) {
    return { error }
  }
};

handler()
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})

module.exports = { handler };
