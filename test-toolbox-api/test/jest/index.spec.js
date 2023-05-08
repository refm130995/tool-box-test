const request = require('supertest')
const app = require('../../index')
const { expect, it, describe } = require('@jest/globals')
describe('GET /', () => {
  it('responds with JSON containing a list of all files', async () => {
    const response = await request(app).get('/files/list')
    expect(response.statusCode).toBe(200)
    expect(response.type).toBe('application/json')
    expect(response.body).toEqual(expect.arrayContaining(['test1.csv', 'test2.csv', 'test3.csv', 'test18.csv', 'test4.csv', 'test5.csv', 'test6.csv', 'test9.csv', 'test15.csv']))
  })
})

describe('GET /files/data', () => {
  it('responds with JSON containing data from specified file', async () => {
    const response = await request(app).get('/files/data?fileName=test2.csv')
    expect(response.statusCode).toBe(200)
    expect(response.type).toBe('text/html')
  })

  it('responds with 404 if specified file is not found', async () => {
    const response = await request(app).get('/files/data?fileName=nonexistent.txt')
    expect(response.statusCode).toBe(404)
    expect(response.text).toBe('File not found')
  })
})
