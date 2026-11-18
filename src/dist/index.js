import express from 'express';
import service from './service.mjs';

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About Page')
})

const port = service.port()
const { db } = service.load()

app.listen(port, '0.0.0.0', () => {
  console.log(`mawid is running on port ${port}`)
})
