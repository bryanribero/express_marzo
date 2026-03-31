import { validationResult } from 'express-validator'

export async function createUserController(req, res, next) {
  try {
    const errorValidation = validationResult(req)

    if (!errorValidation.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errorValidation.array().map((e) => e.msg) })
    }

    const { nombre, email } = req.body

    console.log(email)

    res.status(201).json({ mensaje: `Usuario creado - ${nombre} - ${email}` })
  } catch (err) {
    next(err)
  }
}
