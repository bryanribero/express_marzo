import { UniqueConstraintError } from 'sequelize'
import Usuario from '../models/usuario.js'
import bcrypt from 'bcrypt'
import AuthError from '../errors/authError.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config({
  path: `.env.dev`,
})

export async function createUser(data) {
  try {
    const dataHashed = await hashPassword(data)

    const user = await Usuario.create(dataHashed)

    return user
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      throw new Error('El email ya esta en uso', { cause: err })
    }

    const dbError = new Error('Error con la base de datos')
    dbError.type = 'DatabaseError'
    dbError.cause = err
    throw dbError
  }
}

async function hashPassword(data) {
  try {
    const hash = await bcrypt.hash(data.password, 10)

    const newData = { ...data, password: hash }

    return newData
  } catch (err) {
    throw new Error(
      'Error al procesar la contraseña: se recibió un dato inválido',
      {
        cause: err,
      }
    )
  }
}

export async function getUserLogin(email, password) {
  let user

  try {
    user = await Usuario.scope('whitPassword').findOne({
      where: {
        email: email,
      },
    })
  } catch (err) {
    const dbError = new Error('Error con la base de datos')
    dbError.type = 'DatabaseError'
    dbError.cause = err
    throw dbError
  }

  if (!user) {
    const err = new AuthError('Usuario no encontrado')
    err.errors = 'El email ingresado esta incorrecto o no existe'
    throw err
  }

  const isValid = await bcrypt.compare(password, user.password)

  if (!isValid) {
    const err = new AuthError('Credenciales Inválidas')
    err.errors = 'Contraseña incorrecta'
    throw err
  }

  const payload = {
    id: user.id_user,
    email: user.email,
    role: user.role,
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })

  return token
}

export async function getAllUser() {
  try {
    const users = await Usuario.findAll()

    return users
  } catch (err) {
    throw new Error('Error al encontrar usuarios', { cause: err })
  }
}

export async function getAllUserById(condition) {
  try {
    const user = await Usuario.findAll({ where: { id_user: condition } })

    return user
  } catch (err) {
    throw new Error('Error al encontrar el usuario por el id', { cause: err })
  }
}

export async function updateUserById(updateData, condition) {
  try {
    const user = await Usuario.update(updateData, {
      where: { id_usuario: condition },
    })

    return user
  } catch (err) {
    throw new Error(`Error al actualizar el usuario con el id: ${condition}`, {
      cause: err,
    })
  }
}

export async function updateUsers(updateData) {
  try {
    const users = await Usuario.update(updateData, { where: {} })

    return users
  } catch (err) {
    throw new Error(`Error al actualizar los registros`, {
      cause: err,
    })
  }
}

export async function deleteUsersById(condition) {
  try {
    const users = await Usuario.destroy({ where: { id_usuario: condition } })

    return users
  } catch (err) {
    throw new Error(`Error al eliminar el registro`, {
      cause: err,
    })
  }
}

export async function deleteUsers() {
  try {
    const users = await Usuario.destroy({ where: {} })

    return users
  } catch (err) {
    throw new Error(`Error al eliminar el registro`, {
      cause: err,
    })
  }
}
