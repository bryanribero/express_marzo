import Usuario from '../models/usuario.js'

export async function createUser(data) {
  try {
    const user = await Usuario.create(data)

    return user
  } catch (err) {
    throw new Error('Error al crear el usuario', { cause: err })
  }
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
    const user = await Usuario.findAll({ where: { id_usuario: condition } })

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
