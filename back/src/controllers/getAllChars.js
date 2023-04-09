const { Character } = require("../DB_connection");

const getAllChars = async (req, res) => {
  try {
    const characters = await Character.findAll();
    const characterInfo = characters.map((character) => {
      const { id, name, status, species, gender, origin, image } =
        character.dataValues;
      return { id, name, status, species, gender, origin, image };
    });
    res.status(200).json(characterInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllChars;
