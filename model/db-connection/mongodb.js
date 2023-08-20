/** packages */

const mongoose = require("mongoose");
const config = require("config");

const mongodbInfo = config.get("db-connections.mongodb");
const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/`;

module.exports = () => {
    mongoose.connect(connStr);

    mongoose.connection.on("connected", () => {
        console.log("mongodb server connected!")
    });

    mongoose.connection.on("disconnected", () => {
        console.log("mongodb server disconnected!")
    });

    mongoose.connection.on("error", () => {
        console.log("mongodb server connection error!")
    });

    mongoose.connection.on("SIGIN", () => {
        mongoose.connection.close(()=> {
            console.log("mongodb server shutting down!")
        });
    });
};

// User: mariahernandez28361
// Password: CdybKL0yetmFuIa2
// mongodb+srv://mariahernandez28361:CdybKL0yetmFuIa2@cluster0.gik4fkz.mongodb.net/SportProductsDB