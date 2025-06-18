import express from 'express'
import { PORT } from './config/env.js'

const app = express()

app.get('/', (req, res) => {
	res.send('Welcome to the Subscription API Tracker!')
})

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}`)
})

export default app
