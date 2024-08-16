import express from 'express'
import * as Path from 'node:path'
import codingHabits from './routes/codingHabit.ts'
import waterRoutes from './routes/waterroutes.ts'
import habitRoutes from './routes/add-habit-routes.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/watertracker', waterRoutes)
server.use('/api/v1/coding-habit', codingHabits)
server.use('/api/v1/habits', habitRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
