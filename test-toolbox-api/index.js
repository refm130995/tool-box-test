const express = require('express')
const axios = require('axios')
const cors = require('cors')

const API_URL = 'https://echo-serv.tbxnet.com/v1/secret'
const API_KEY = 'Bearer aSuperSecretKey'

const app = express()
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.get('/files/data', async (req, res) => {
  try {
    const fileListResponse = await axios.get(`${API_URL}/files`, { headers: { authorization: API_KEY } })
    const fileName = req.query.fileName
    const files = fileListResponse.data.files
    const file = files.find(file => file === fileName)

    if (!file && fileName) {
      return res.status(404).send('File not found')
    }

    if (file && fileName) {
      try {
        const fileResponse = await axios.get(`${API_URL}/file/${file}`, { headers: { authorization: API_KEY } })
        res.status(200).send(fileResponse.data)
        return
      } catch (error) {
        res.status(404).send('Not found')
      }
    }

    const result = []

    for (const file of files) {
      try {
        const fileResponse = await axios.get(`${API_URL}/file/${file}`, { headers: { authorization: API_KEY } })
        const lines = fileResponse.data.split('\n').slice(1).map(line => line.split(',')).filter(line => line.length === 4)
        const json = lines.map(([file, text, number, hex]) => ({ text, number: Number(number), hex }))

        if (json.length > 0 && json.every(line => line.number > 0)) {
          result.push({ file, lines: json })
          continue
        }
      } catch (err) {
        console.error(`Error fetching data for file: ${file}`)
        continue
      }
    }

    res.json(result)
  } catch (err) {
    console.error('Error fetching file list')
    res.status(500).send('Error fetching file list')
  }
})

app.get('/files/list', async (req, res) => {
  const fileListResponse = await axios.get(`${API_URL}/files`, { headers: { authorization: API_KEY } })
  const files = fileListResponse.data.files
  const fileList = []

  for (const file of files) {
    fileList.push(file)
  }

  res.send(fileList)
})

app.listen(3001, () => {
  console.log('Server listening on port 3001')
})

module.exports = app
