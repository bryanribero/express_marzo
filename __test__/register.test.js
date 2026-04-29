import request from 'supertest'
import app from '../app2.js'
import Usuario from '../models/usuario.js'

let user
let createdUserId

describe('POST /api/users/register', () => {
  beforeEach(() => {
    user = {
      email: `test${Date.now()}@hotmail.com`,
      password: '123456789',
    }
  })

  it('Registrar un nuevo usuario y devolverlo', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send(user)
      .expect(201)

    createdUserId = res.body.details.id_user

    expect(res.body.details).toHaveProperty('id_user')
    expect(res.body.mensaje).toBe(`Usuario creado`)
    expect(res.body.details.role).toBe('user')
  })

  afterEach(async () => {
    if (createdUserId) {
      await Usuario.destroy({
        where: { id_user: createdUserId },
      })
    }
  })
})
