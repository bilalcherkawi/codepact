const mysql = require("mysql2/promise");
const config = require("./config");
var connection;
const connect = async () => {
  try {
    connection = await mysql.createConnection(config.db);
    console.log("=======================================");
    console.log(`>>>>>>connection to ${process.env.DB_NAME} succeffully`);
    console.log("=======================================");
  } catch (error) {
    console.error(
      `>>>Error Connecting to database ${process.env.DB_NAME}`,
      error
    );
    process.exit(1);
  }
};
const query = async (sql, params) => {
  if (!connection) {
    await connect();
  }
  try {
    const [results] = await connection.execute(sql, params);
    return results;
  } catch (error) {
    console.error(`QUERY error --->${sql}:${error.message}`);
  }
};
module.exports = {
  query,
};
