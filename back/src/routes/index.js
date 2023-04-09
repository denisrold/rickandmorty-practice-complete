const { Router } = require("express");
const getCharById = require("../controllers/getCharByID.js");
const getCharDetail = require("../controllers/getCharDetails.js");
const getAllChars = require("../controllers/getAllChars.js");
const getAllFav = require("../controllers/getAllFavorites.js");
const { saveApiData } = require("../controllers/saveApiData.js");
const createFavorite = require("../controllers/createFavorite.js");
const deleteFavs = require("../controllers/deleteFavs.js");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.get("/saveallcharacters", saveApiData);
router.get("/rickandmorty/allCharacters", getAllChars);
/*********************************** */

router.get("/rickandmorty/allfavorites", async (req, res) => {
  try {
    const { gender } = req.query;
    const characters = gender ? await getAllFav({ gender }) : await getAllFav();
    res.status(200).json(characters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/rickandmorty/fav", async (req, res) => {
  try {
    const { id, name, species, status, image, gender, origin } = req.body;
    const personaje = await createFavorite(
      id,
      name,
      species,
      status,
      image,
      gender,
      origin
    );

    res.status(201).json(personaje);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.delete("/rickandmorty/deletefav/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedfav = await deleteFavs(id);
    res.status(200).json(deletedfav);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
