import { validationResult } from 'express-validator'
import {
  createUser,
  getAllUser,
  getAllUserById,
  updateUserById,
} from '../services/userService.js'

export async function createUserController(req, res, next) {
  try {
    const errorValidation = validationResult(req)

    if (!errorValidation.isEmpty()) {
      const error = new Error('Validacion fallida')
      error.status = 400
      error.errors = errorValidation.array().map((e) => e.msg)
      return next(error)
    }

    const { nombre, edad } = req.body

    const result = await createUser({ nombre, edad })

    res.status(201).json({ mensaje: `Usuario creado`, details: result })
  } catch (err) {
    next(err)
  }
}

export async function getAllUsersController(req, res, next) {
  try {
    const users = await getAllUser()

    res.status(200).json({ result: users })
  } catch (err) {
    next(err)
  }
}

export async function getAllUsersByIdController(req, res, next) {
  const { id } = req.params

  try {
    const user = await getAllUserById(id)

    if (!user.length) {
      const error = new Error('No se encontro ningun registro con ese id')
      error.status = 404
      return next(error)
    }

    res.status(200).json({ result: user })
  } catch (err) {
    next(err)
  }
}

export async function updateUserByIdController(req, res, next) {
  const { id } = req.params
  const body = req.body

  const errorValidation = validationResult(req)

  if (!errorValidation.isEmpty()) {
    const error = new Error('Actualizacion fallida')
    error.status = 400
    error.errors = errorValidation.array().map((e) => e.msg)
    return next(error)
  }
  try {
    const userUpdate = await updateUserById(body, id)

    if (!userUpdate[0]) {
      const error = new Error('No se hallaron registros a modificar')
      error.status = 404
      return next(error)
    }

    res.status(200).json({ message: `Registro actulizado` })
  } catch (err) {
    next(err)
  }
}
