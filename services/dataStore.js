const {
  DATA_BASE: {
    NAME,
    PASSWORD,
    USERNAME,
    HOST,
    PORT
  }
} = require('../constants/common');

const postgres = require('pg-promise')({});
const connectionDetails =  `postgres://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${NAME}`; 
                            // 'postgres://username:password@host:port/database';

                            console.log(connectionDetails);
const dbInstance = postgres(connectionDetails);

module.exports = {
  dbInstance
};
