require("dotenv").config();
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
//   { logging: false, native: false }
// );

const sequelize = new Sequelize(`${DB_DEPLOY}`, {
  logging: false,
  native: false,
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
