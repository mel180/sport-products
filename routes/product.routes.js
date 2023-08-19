const controller = require("../controller/logic/product.controller");

module.exports = (app) => {
    console.log("Loading rroutes of products");
    app.get("/product", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/product/bycode/:code", (req, res, next) => {
        console.log("getting product by code");
        controller.getByCode(req, res, next);
    });
    
    app.post("/product", (req, res, next) => {
        controller.createProduct(req, res, next);
    });

    app.put("/product", (req, res, next) => {
        controller.updateProduct(req, res, next);
    });

    app.delete("/product", (req, res, next) => {
        controller.deleteProduct(req, res, next);
    });
}


