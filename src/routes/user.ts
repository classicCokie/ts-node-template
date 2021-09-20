import { Express, Request, Response } from 'express'

export const applyUserRoutes = (app: Express) => {
  app.get('/user', (req: Request, res: Response) => {
    res.send('Hello World!')
  })

  return app
}
