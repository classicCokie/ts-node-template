import { Express, Request, Response } from 'express'
import { getUser } from '../queries'

export const applyUserRoutes = (app: Express) => {
  app.get('/user', (req: Request, res: Response) => {
    const user = getUser()
    res.send(user)
  })

  return app
}
