import { createContent } from '../services/sanitizeService.js'

export async function createContentController(req, res, next) {
  try {
    const { id_sanitize, content } = await createContent(req.body)

    res.status(201).json({
      message: 'Guardado en la base de datos',
      result: {
        id_sanitize,
        content,
      },
    })
  } catch (err) {
    next(err)
  }
}
