import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Application } from 'express'
import { mongoose } from './config'
import router from './routes'

const app: Application = express()
const PORT = process.env.PORT || 4000
const db = mongoose.connection

db.on('error', (err: string) => {
    console.log('err', err)
})

db.on('open', () => {
    console.log('DB running')
})

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`)
})