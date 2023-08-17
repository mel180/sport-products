/** Dto */
const dto = require("../../model/dto/product.dto");

exports.createProduct = (req, res, next) => {
    let prdt = {
        id: req.body.id,
        color: req.body.color,
        dateFabrication: req.body.dateFabrication,
        sport: req.body.sport,
        price: req.body.price,
        brand: req.body.brand,
        availablity: req.body.availablity,
        units: req.body.units,
        weight: req.body.weight,
        professional: req.body.professional
    };
    dto.save(prdt, (err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.status(201).json({
            info: data
        })
    })
}

exports.updateProduct = (req, res, next) => {
    let prdt = {
        id: req.body.id,
        color: req.body.color,
        dateFabrication: req.body.dateFabrication,
        sport: req.body.sport,
        price: req.body.price,
        brand: req.body.brand,
        availablity: req.body.availablity,
        units: req.body.units,
        weight: req.body.weight,
        professional: req.body.professional
    };
    dto.update({_id: req.body.id},prdt, (err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.status(201).json({
            info: data
        })
    })
}

exports.getAll = (req, res, next) => {
    dto.getAll({}, prdt, (err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json({
            info: data
        })
    })
}

exports.getByCode = (req, res, next) => {
    dto.getByCode({code: req.params.code}, prdt, (err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json({
            info: data
        })
    })
}

exports.deleteProduct = () => {
    dto.delete({_id: req.body.id}, prdt, (err, data) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.status(204).json();
    })
}