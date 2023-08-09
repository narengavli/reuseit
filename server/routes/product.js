const {
    getAllProducts, getProductById, sellProduct
} = require("./../controllers/product");

const router = require("express").Router();
router.get("/products", getAllProducts);
router.get("/product/:id", getProductById);
router.post("/sell", sellProduct);

module.exports = router;