import { validationResult } from 'express-validator'
import { createUser } from '../services/userService.js'

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
