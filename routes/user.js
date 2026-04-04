import { Router } from 'express'
import { validateCreateUser } from '../validators/userValidator.js'
import { createUserController } from '../controllers/userController.js'

const router = Router()

router.post('/', validateCreateUser, createUserController)

export default router
