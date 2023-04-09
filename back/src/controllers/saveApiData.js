const axios = require("axios");
const { Character } = require("../DB_connection.js");

const URL = "https://rickandmortyapi.com/api/character";

const getApiData = async (req, res) => {
  let data = [];
  let ids = 151;
  try {
    while (ids < 201) {
      await axios.get(`${URL}/${ids}`).then((response) => {
        const { id, name, species, status, image, gender, origin } =
          response.data;
        if (Object.keys(response.data).length) {
          data = [
            ...data,
            { id, name, species, status, image, gender, origin },
          ];
        }
        ids++;
      });
    }
    res.status(200).json({ msg: "Todo ok" });
    return data;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveApiData = async (req, res) => {
  const personajes = await getApiData(req, res);

  personajes.forEach(async (c) => {
    await Character.findOrCreate({
      where: { id: c.id },
      defaults: {
        name: c.name,
        species: c.species,
        status: c.status,
        image: c.image,
        gender: c.gender,
        origin: c.origin.name,
      },
    });
  });
  console.log(personajes);
};

module.exports = { saveApiData };
