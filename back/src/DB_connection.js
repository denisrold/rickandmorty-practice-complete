require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const CharacterFunction = require("./models/Character");
const FavoriteFunction = require("./models/Favorite");

/*
EJERCICIO 01
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.

URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
*/
const sequelize = new Sequelize(
  `postgres:${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
  {
    logging: false,
    native: false,
    dialectOptions: {
      charset: "utf8",
    },
  }
);

/*
EJERCICIO 03
Debajo de este comentario puedes ejecutar la función de los modelos.
*/
CharacterFunction(sequelize);
FavoriteFunction(sequelize);

const { Character } = sequelize.models;
const { Favorite } = sequelize.models;

module.exports = {
  ...sequelize.models,
  sequelize,
};
