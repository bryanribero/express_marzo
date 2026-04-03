import { Router } from 'express'
import { createUserController } from '../controllers/userController.js'
import { validateCreateUserWhitEmail } from '../validators/userValidator.js'

const router = Router()

router.post('/', validateCreateUserWhitEmail, createUserController)

export default router
