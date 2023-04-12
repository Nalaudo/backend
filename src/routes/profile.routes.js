import profileController from '#controllers/profile.controller.js'
import auth from '#middlewares/auth.middleware.js'
import { Router } from 'express'

const routerProfile = new Router()

routerProfile.get('/', auth, profileController.getProfileController)

export default routerProfile
