require("dotenv").config();
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");
const { Sequelize } = require("sequelize");
const pg = require("pg");
const { DB_USER, DB_PASSWORD, DB_HOST, POSTGRES_URL } = process.env;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
//   { logging: false, native: false }
// );

const sequelize = new Sequelize(`${POSTGRES_URL}`, {
  logging: false,
  native: false,
  dialect: "postgres",
  dialectModule: pg,
});

FavoriteModel(sequelize);
UserModel(sequelize);

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
