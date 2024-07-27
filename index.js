const server = require("./src/app");

const { conn } = require("./src/DB_connection");

const PORT = process.env.PORT || 3001;

conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
  });
});
