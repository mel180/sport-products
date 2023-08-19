/** packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const productSchema = new mongoose.Schema({ 
    color:{
        type: "String",
        required: true
    }, 
    dateFabrication: {
        type: "String",
        required: true
    },
    sport:{
        type: "String",
        required: true
    },
    price:{
        type: "Number",
        required: true
    },
    brand: {
        type: "String",
        required: true
    }, 
    availability:{
        type: "Boolean",
        required: true, 
        default: true
    },
    units:{
        type: "Number",
        required: true
    },
    weight:{
        type: "Number",
        required: true
    },
    professional:{
        type: "Boolean",
        required: true, 
        default: false
    },
    code:{
        type: "String",
        required: true,
        unique: true
    }
});

/** Schema exportation */
productSchema.plugin(validator);
module.exports = mongoose.model("coll_product", productSchema);