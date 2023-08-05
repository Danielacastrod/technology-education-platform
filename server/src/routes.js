const { Router } = require("express");

const Controller = require("./app/controllers/Controller");

const router = Router();

router.post("/login", Controller.check);
router.post("/cadastro", Controller.store);
router.post("/cadastrado", Controller.verify);
router.post("/perfil", Controller.show);
router.post("/feedback", Controller.feed);
router.post("/novidades", Controller.news);

module.exports = router;
