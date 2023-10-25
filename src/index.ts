import express from 'express'
import userRouter from './routes/users.routes'
import databaseService from './services/database.services'
const app = express()
app.use(express.json())
databaseService.connect().catch(console.dir)
const PORT = 3000
app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server đang chạy ở port ${PORT}`)
})
