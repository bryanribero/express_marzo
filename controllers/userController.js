import { validationResult } from 'express-validator'

export async function createUserController(req, res, next) {
  try {
    const errorValidation = validationResult(req)

    if (!errorValidation.isEmpty()) {
      const error = new Error('Validacion fallida')
      error.status = 400
      error.errors = errorValidation.array().map((e) => e.msg)
      return next(error)
    }

    const { nombre, email } = req.body

    console.log(email)

    res.status(201).json({ mensaje: `Usuario creado - ${nombre} - ${email}` })
  } catch (err) {
    next(err)
  }
}
