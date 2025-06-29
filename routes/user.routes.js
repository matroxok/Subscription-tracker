import { Router } from 'express'

const userRouter = Router()

// Pobieranie wszystkich userów
userRouter.get('/', (req, res) => {
	res.send({ title: 'GET all users' })
})

// Pobnieranie użytkownika po id
userRouter.get('/:id', (req, res) => {
	res.send({ title: 'GET user details' })
})

// Utworzenie nowego użytkownika
userRouter.post('/', (req, res) => {
	res.send({ title: 'Create new user' })
})

// Educja użytkownika po id
userRouter.put('/:id', (req, res) => {
	res.send({ title: 'Upade user by id' })
})

// Uuswanie użytkownika po id
userRouter.delete('/:id', (req, res) => {
	res.send({ title: 'Delete user by id' })
})

export default userRouter
