import { Router } from 'express'
import { validateCreateUser } from '../validators/userValidator.js'
import {
  createUserController,
  getAllUsersByIdController,
  getAllUsersController,
} from '../controllers/userController.js'

const router = Router()

router.post('/', validateCreateUser, createUserController)

router.get('/', getAllUsersController)

router.get('/:id', getAllUsersByIdController)

export default router
