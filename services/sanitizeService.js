import Sanitize from '../models/Sanitize.js'

export async function createContent(content) {
  try {
    const data = await Sanitize.create(content)

    return data
  } catch (err) {
    throw new Error('Error con la base de datos', { cause: err })
  }
}
