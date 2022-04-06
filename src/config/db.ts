import mongoose from 'mongoose'

const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(`mongodb+srv://upwork:${MONGO_PASSWORD}@${MONGO_URI}`)

module.exports = mongoose