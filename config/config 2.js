module.exports = {
  development: {
    username: "root",
    password: process.env.MYSQL_KEY,
    database: "space_saver",
    host: "127.0.0.1",
    dialect: "mysql",
  },
 test: {
    username: "root",
    password: process.env.MYSQL_KEY,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};
