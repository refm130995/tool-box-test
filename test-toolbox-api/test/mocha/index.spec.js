const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../index')
const { expect, it, describe, afterAll } = chai
chai.use(chaiHttp)

describe('API tests', () => {
  afterAll((done) => {
    chai.request(app).close()
    done()
  })
  it('should return a list of files', (done) => {
    try {
      chai.request(app)
        .get('/files/list')
        .end((res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('array')
          expect(res.body).to.have.length.greaterThan(0)
          done()
        })
    } catch (error) {
      done(error)
    }
  })

  it('should return file data when given a filename', (done) => {
    try {
      chai.request(app)
        .get('/files/data?fileName=test2.csv')
        .end((res) => {
          expect(res).to.have.status(200)
          expect(res.text).to.be.an('string')
          done()
        })
    } catch (error) {
      done(error)
    }
  })

  it('should return a 404 error when a file is not found', (done) => {
    try {
      chai.request(app)
        .get('/files/data?fileName=nonexistent.csv')
        .end((res) => {
          expect(res).to.have.status(404)
          done()
        })
    } catch (error) {
      done(error)
    }
  })
})
