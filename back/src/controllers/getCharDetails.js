//const axios = require("axios");
const { Character } = require("../DB_connection");
//const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Character.findByPk(id);
    res.status(200).json(character);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  // axios
  //   .get(`${URL}${id}`)
  //   .then((response) => {
  //     const { id, name, species, image, gender, origin, status } =
  //       response.data;
  //     res.json({ id, name, species, image, gender, origin, status });
  //   })
  //   .catch((error) => {
  //     res.status(500).json({ message: error.message });
  //   });
};

module.exports = getCharDetail;
