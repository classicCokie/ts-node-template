import { applyUserRoutes } from './user'
import { Express } from 'express'

export const applyAllRoutes = (app: Express) => applyUserRoutes(app)
