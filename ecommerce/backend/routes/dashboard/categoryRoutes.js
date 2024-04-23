const router = require("express").Router();

const { authMiddleware } = require("../../middlewares/authMiddleware");
const categoryControllers = require("../../controllers/dashboard/categoryControllers");

router.post("/category-add", authMiddleware, categoryControllers.add_category);
router.get("/category-get", authMiddleware, categoryControllers.get_category);

module.exports = router;
