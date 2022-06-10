const {Router} = require ("express");
const router = Router();
const usersCtrl = require("../controller/professional.controller");

router.get("/", usersCtrl.getStart);

router.get("/profesional", usersCtrl.getProfesional);

// router.get("/profesional/:id", usersCtrl.getUserParams);

router.post("/profesional", usersCtrl.postUser);

router.put("/profesional", usersCtrl.putUser);

router.delete("/profesional", usersCtrl.deleteUser);

module.exports = router;


