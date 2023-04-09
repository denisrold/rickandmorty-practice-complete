const { Favorite } = require("../DB_connection");

const createFavorite = async (
  id,
  name,
  species,
  status,
  image,
  gender,
  origin
) => {
  const newEpisode = await Favorite.create({
    id,
    name,
    species,
    status,
    image,
    gender,
    origin,
  });
  return newEpisode;
};

module.exports = createFavorite;
