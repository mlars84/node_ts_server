import * as express from 'express'

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()

    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })

    router.get('/api/stuff', (req, res) => {
      let data: object = {
        cats: ['Hugo', 'Gus'],
        dogs: ['Fritz', 'Turtle Bean']
      }

      res.send(data)
    })

    this.express.use('/', router)
  }
}

export default new App().express