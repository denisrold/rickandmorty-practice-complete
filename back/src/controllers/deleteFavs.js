const { Favorite } = require("../DB_connection");

const deleteFavs = async (id) => {
  const favorite = await Favorite.findByPk(id);
  const aux = { ...favorite };
  await favorite.destroy();
  return aux;
};

module.exports = deleteFavs;
