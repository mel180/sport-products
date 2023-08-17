/** packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const productSchema = new mongoose.Schema({
    id:{
        type: "Number",
        require: true, 
        unique: true
    }, 
    color:{
        type: "String",
        require: true
    }, 
    dateFabrication: {
        type: "Number",
        require: true
    },
    sport:{
        type: "String",
        require: true
    },
    price:{
        type: "Number",
        require: true
    },
    brand: {
        type: "String",
        require: true
    }, 
    availability:{
        type: "Boolean",
        require: true, 
        default: true
    },
    units:{
        type: "Number",
        require: true
    },
    weight:{
        type: "Number",
        require: true
    },
    professional:{
        type: "Boolean",
        require: true, 
        default: false
    }
});

/** Schema exportation */
productSchema.plugin(validator);
module.exports = productSchema;