//const axios = require("axios");
const { Character } = require("../DB_connection");

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await Character.findByPk(id);
    res.status(200).json(character);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  // axios
  //   .get(`${URL}${id}`)
  //   .then((response) => {
  //     const { id, name, species, image, gender } = response.data;
  //     res.header("Access-Control-Allow-Origin", "*");
  //     res.json({ id, name, species, image, gender });
  //   })
  //   .catch((error) => {
  //     res.status(500).json({ message: error.message });
  //   });
};

module.exports = getCharById;
