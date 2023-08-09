const {
    login,
    sessionLogin,
    register,
    update,
} = require("./../controllers/user");

const router = require("express").Router();
router.post("/login", login);
router.post("/session", sessionLogin);
router.post("/register", register);
router.put("/update/:id", update);

module.exports = router;