import { Router } from 'express'
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import authMiddleware from './app/middlewares/auth'
import TaskController from './app/controllers/TaskController'

const routes = new Router()

routes.post('/users', UserController.store)
routes.post('/sessions',SessionController.store)

routes.use(authMiddleware);

routes.post('/tasks', TaskController.store)
routes.get('/tasks', TaskController.index)
routes.put('/tasks/:id', TaskController.update)
routes.delete('/tasks/:id', TaskController.delete)

routes.put('/users', UserController.update)

export default routes