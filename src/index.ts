import app from './app'

const port = 3000

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`Server up on ${port}`)
})