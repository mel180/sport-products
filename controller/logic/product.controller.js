/** Dto */
const dto = require("../../model/dto/product.dto");

/** Helper */
//const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper");

exports.createProduct = async(req, res, next) => {
    console.log(req.body);
    let prdt = {
        color: req.body.color,
        dateFabrication: req.body.dateFabrication,
        sport: req.body.sport,
        price: req.body.price,
        brand: req.body.brand,
        availablity: req.body.availablity,
        units: req.body.units,
        weight: req.body.weight,
        professional: req.body.professional,
        code: req.body.code
    };
    try {
        const codeFilter = await dto.getByCode({code: req.body.code});
        if (codeFilter == null) {
            const doc = await dto.save(prdt);
            notHelper.sendSMS()
            return res.json(doc);
        }
        else {
            return res.status(400).json({message:"Another product has the same code"})
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({err:error});
    }
}

exports.updateProduct = async (req, res, next) => {
    let prdt = {
        color: req.body.color,
        dateFabrication: req.body.dateFabrication,
        sport: req.body.sport,
        price: req.body.price,
        brand: req.body.brand,
        availablity: req.body.availablity,
        units: req.body.units,
        weight: req.body.weight,
        professional: req.body.professional,
        code: req.body.code
    };
    try {
        const doc = await dto.update({code: req.body.old_code},prdt);
        if (doc == null) {
            return res.status(400).json({message:"Product Not Found"})
        }
        return res.json(doc);
    } catch (error) {
        return res.status(400).json({err:error});
    } 
}

exports.getAll = async (req, res, next) => {
    try {
        const doc = await dto.getAll({});
        return res.json(doc);
    } catch (error) {
        console.log(error);
        return res.status(400).json({err:error});
    }
}

exports.getByCode = async (req, res, next) => {
    try {
        const doc = await dto.getByCode({code: req.params.code});
        return res.json(doc);
    } catch (error) {
        return res.status(400).json({err:error});
    }
}

exports.deleteProduct = async(req, res, next) => {
    try {
        const doc = await dto.delete({code: req.body.code});
        return res.json({message: "Product deleted"});
    } catch (error) {
        return res.status(400).json({err:error});
    }
}