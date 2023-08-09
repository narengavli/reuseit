const Products = require("./../models/product");

module.exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await Products.find({});
        res.status(200).send(products);
    } catch (error) {
        next(error);
    }
}

module.exports.getProductById = async (req, res, next) => {
    try {
        const product = await Products.findById(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        next(error);
    }
}

module.exports.sellProduct = async (req, res, next) => {
    try {
        const { photo, name, category, price, description, username } = req.body;
        const product = await Products.create({
            photo,
            name,
            category,
            price,
            description,
            username,
        });
        return res.json({ status: true, product });
    } catch (error) {
        next(error);
    }
}