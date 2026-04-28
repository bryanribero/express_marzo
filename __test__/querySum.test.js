import request from 'supertest'
import app from '../app2.js'

describe('GET /test/sum', () => {
  it('Deberia de devolver la suma y el status', async () => {
    const res = await request(app).get('/api/test/sum?a=2&b=2')

    expect(res.status).toBe(200)
    expect(res.body.result).toBe(4)
  })
})
