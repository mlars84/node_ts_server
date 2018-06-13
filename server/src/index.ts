import app from './app'
import mongoose from 'mongoose'
import Animal from '../interfaces/Animal'

let gus = new Animal({
  name: 'Gus',
  age: 5,
  color: 'White and grey'
})

let mongoURI = 'mongodb://localhost:27017/animals'

mongoose.connect(mongoURI)

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', (callback) => {
  console.log('Success!')
})

const port = process.env.PORT || 3000

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`Server up on ${port}, ${gus}`)
})