import express from 'express'
import { applyAllRoutes } from './routes'
let app = express()
const port = 3000

app = applyAllRoutes(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
