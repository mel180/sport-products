/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodeParser = bodyParser.urlencoded(
    {extended: true}
);
 
app.use(jsonParser);
app.use(urlEncodeParser)

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

// const tkFn = require("./middleware/verifyToken");
// app.use(tkFn);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to sport-products api.");
});

const ProductRoutes = require("./routes/product.routes");
ProductRoutes(app);

app.listen(port, () => {
    console.log("Server is running...")
});