const express = require ("express");
const dotenv = require ( "dotent");
const cors = require ("cors");
const mongoose = require ("mongoose");
const productRouter = require (".router/priduct.router");
//config .env
dotenv.config();

const app = express();
const CLIENT_URL = process.env.CLIENT_URL;
app.use(cors({ credentials: true, origin: "CLIENT_URL" }));
app.use(express.json());
//Database Connection
const MONGOOSE_URL = process.env.MONGOOSE_URL;
mongoose.connect(MONGOOSE_URL);

app.get("/", (req, res) => {
    res.send(<h1>This is a RESTful API for SE Shop</h1>);
    //Add Router
    app.use("/products", productRouter);

    //Run Server
    const 
})