export function sumController(req, res, next) {
  try {
    const { a, b } = req.query

    const sum = Number(a) + Number(b)

    res.status(200).json({ result: sum })
  } catch (err) {
    next(err)
  }
}
