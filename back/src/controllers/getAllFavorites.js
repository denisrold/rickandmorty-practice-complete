const { Favorite } = require("../DB_connection");

const getAllFav = async (query) => {
  const characters = await Favorite.findAll();
  const favoriteInfo = characters.map((character) => {
    const { id, name, status, species, gender, origin, image } =
      character.dataValues;
    return { id, name, status, species, gender, origin, image };
  });
  console.log(query);
  if (query) {
    const { gender } = query;
    const favoritefilter = favoriteInfo.filter((c) => {
      return c.gender === gender;
    });
    return favoritefilter;
  }
  return favoriteInfo;
};

module.exports = getAllFav;
