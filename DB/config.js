const config = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USR,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
};
module.exports = config;
