const LIMIT_ROWS = 10

const DATA_BASE = {
  NAME: process.env.DB_NAME,
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.PASSWORD,
  HOST: process.env.HOST,
  PORT: process.env.PORT
}


module.exports = {
  LIMIT_ROWS,
  DATA_BASE
}

