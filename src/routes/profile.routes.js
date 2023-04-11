import { Router } from 'express'
import profileController from '#controllers/profile.controller.js'
import auth from '#middlewares/auth.middleware.js'

const routerProfile = new Router()

routerProfile.get('/', auth, profileController.getProfileController)

export default routerProfile
