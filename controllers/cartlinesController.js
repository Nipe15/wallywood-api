import express from "express";
import { cartlinesModel } from "../models/cartlinesmodel.js";

export const cartlinesController = express.Router();

cartlinesController.get('/cartlines', async (req, res) => {
    const data = await cartlinesModel.getCartlines();
    res.send(data);
    console.log(data);
})

cartlinesController.get('/cartlines/:id([0-9A-Za-z]*)', async (req, res) => {
    const data = acartlines.getCartlinesById(req.params.id);
    res.send(data);
    console.log(data);
})

cartlinesController.post('/cartlines', async (req, res) => {
    const data = acartlines.createCartlines(req.body);
    res.send(data);
    console.log(data);
})

cartlinesController.put('/cartlines', async (req, res) => {
    const data = acartlines.updateCartlines(req.body);
    res.send(data);
    console.log(data);
})

