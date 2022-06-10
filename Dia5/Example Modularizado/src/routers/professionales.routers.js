const {Router} = require ("express");
const router = Router();
const usersCtrl = require("../controller/professionales.controller");

router.get("/", usersCtrl.getStart);

router.get("/profesionales", usersCtrl.getProfesionales);

router.get("/profesionales/:id", usersCtrl.getUserParamsId);

router.post("/profesionales", usersCtrl.postUser);

router.put("/profesionales/:id", usersCtrl.putUser);

router.delete("/profesionales/delete/:id", usersCtrl.deleteUser);

module.exports = router;

