import express from 'express'
import { posterModel } from '../models/postermodel.js'

export const posterController = express.Router()

posterController.get('/posters', async(req, res)=>{
    const data = await posterModel.getAllRecords()
    res.status(200).send(data)
})


posterController.get('/posters/:id([0-9]*)', async(req, res)=>{
    const data = await posterModel.getRecordById(req.params.id)
    res.status(200).send(data)
})