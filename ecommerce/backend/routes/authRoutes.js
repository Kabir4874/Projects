const router = require("express").Router();
const authControllers = require("../controllers/authControllers");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.post("/admin-login", authControllers.admin_login);
router.post("/seller-login", authControllers.seller_login);
router.post("/seller-register", authControllers.seller_register);
router.get("/get-user-info", authMiddleware, authControllers.getUser);

module.exports = router;
