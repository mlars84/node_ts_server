import mongoose from 'mongoose'
const Schema = mongoose.Schema

const AnimalSchema = new Schema({
  name: String,
  age: Number,
  color: String
})

module.exports = mongoose.model('Animal', AnimalSchema)