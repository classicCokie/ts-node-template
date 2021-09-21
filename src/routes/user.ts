import { Express, Request, Response } from 'express'
import { createUser } from '../commands/createUser'
import { getUser } from '../queries'

export const applyUserRoutes = (app: Express) => {
  app.get('/user/:uid', async (req: Request, res: Response) => {
    try {
      const { uid } = req.params

      if (!uid) {
        res.status(400).send('Please provide User ID')
        return
      }

      const user = await getUser(uid)

      if (!user) {
        res.status(404).send('User not Found')
        return
      }

      res.send(user)
    } catch (error) {
      console.log(error)
    }
  })

  app.post('/user/add', async (req: Request, res: Response) => {
    try {
      const { name } = req.body

      if (!name) {
        res.status(400).send('Please provide User Name')
        return
      }

      const user = await createUser(name)

      if (!user) {
        res.status(500).send('User was not created')
        return
      }

      res.send(user)
    } catch (error) {
      console.log(error)
    }
  })

  return app
}
