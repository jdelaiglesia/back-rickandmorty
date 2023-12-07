const getCharById = require("../controllers/getCharById");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");
const deleteFav = require("../controllers/deleteFav");
const getFavorites = require("../controllers/getFav");
const login = require("../login");

const { Router } = require("express");

const router = Router();

//=============================================//
router.get("/character/:id", getCharById);
router.get("/login", login);
router.get("/fav", getFavorites);
//=============================================//
router.post("/login", postUser);
router.post("/fav", postFav);
//=============================================//
router.delete("/fav/:id", deleteFav);
//=============================================//

module.exports = router;
