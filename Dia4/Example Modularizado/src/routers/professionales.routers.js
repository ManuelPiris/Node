const {Router} = require ("express");
const router = Router();
const usersCtrl = require("../controller/professionales.controller");

router.get("/", usersCtrl.getStart);

router.get("/profesionales", usersCtrl.getProfesionales);

router.get("/profesionales/:id", usersCtrl.getUserParamsId);

router.post("/profesionales", usersCtrl.postUser);

router.put("/profesionales/", usersCtrl.putUser);

router.delete("/profesionales", usersCtrl.deleteUser);

module.exports = router;