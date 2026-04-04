import Usuario from '../models/usuario.js'

export async function createUser(data) {
  try {
    const user = await Usuario.create(data)

    return user
  } catch (err) {
    throw new Error('Error al crear el usuario', { cause: err })
  }
}
