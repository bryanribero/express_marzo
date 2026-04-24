export function checkRole(requiredRole = []) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'no autenticado' })
    }

    if (!requiredRole.includes(req.user.role)) {
      return res.status(403).json({ message: 'No autorizado' })
    }

    next()
  }
}
