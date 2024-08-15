import express from 'express'
import * as Path from 'node:path'
import codingHabits from './routes/codingHabits.ts'
import waterRoutes from './routes/waterroutes.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/watertracker', waterRoutes)
server.use('/api/v1/coding-habit', codingHabits)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
