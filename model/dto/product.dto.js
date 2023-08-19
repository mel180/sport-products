/** packages */
const mongoose = require("mongoose");
const db = require("../db-connection/mongodb");

/** using schema */
const model = require("../schemas/product.schema");
db();

const dto = {
    async save(data){
        const doc = await model.create(data);
        return doc;
    },
    async update(query, data){
        const doc = await model.findOneAndUpdate(query, data, {new:true});
        return doc;
    },
    async getAll(query){
        const doc = await model.find(query);
        return doc;
    },
    async getByCode(query){
        const doc = await model.findOne(query);
        return doc;
    },
    async delete(query){
        const doc = await model.findOneAndDelete(query);
        return doc;
    },
    

}

module.exports = dto;