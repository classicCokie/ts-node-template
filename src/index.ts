import express from 'express'
import { applyAllRoutes } from './routes'
import { databaseInit } from './database/index'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()
let app = express()
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

const port = 3000
databaseInit()
  .catch(error => {
    console.error('EXCEPTION ON INIT DATABASE!', error)
  })
app = applyAllRoutes(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
