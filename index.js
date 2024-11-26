import express from 'express'
import dotenv from 'dotenv'
import { posterController } from './controllers/posterController.js'
import { GenresController } from './controllers/genresController.js'
import { cartlinesController } from './controllers/cartlinesController.js'
dotenv.config()

const port = process.env.PORT || 3000
const app = express()

app.get('/',(req, res)=>{
    res.send('velkommen til wallywood')
})
app.use(posterController)
app.listen(port, ()=>{
    console.log(`Server runs at http://localhost:${port}`)
})

app.use(GenresController)
app.use(cartlinesController)

