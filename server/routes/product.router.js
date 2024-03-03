const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ProductSchema = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String, require: true},
        price: { type: Number, require: true},
        image: { type: String, require: true},
        category: { type: String, require: true},
    },
    {
        timetampps: true,
    }
)













/***
 * components:
 * schemas:
 *      Product:
 *          type: object
 *          required:
 *              -   name
 *              -   price
 *              -   description
 *              -   image
 *              -   category
 *          properties:
 *              name:
 *                  type: string
 *                  description: The name of the product
 *              price:
 *                  type: number
 *                  description: The price of the product
 *              description:
 *                  type: string
 *                  description: The descripton of the product
 *              image:
 *                  type: string
 *                  description: The image of the product
 *              category:
 *                  type: string
 *                  description: The category of the product




































const express = require ("express");
const router = express.Router();
const productModel = require("../models/Product.model");

router.get("/", async (req, res) =>{
    try {
        const products = await productModel.find();
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

module.exports = router;