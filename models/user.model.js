import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(definition, {
	name: {
		type: String,
		required: [true, 'User name is required'],
		trim: true,
		minLength: 2,
		maxLength: 50,
	},

	email: {
		tytpe: String,
		required: [true, 'Email is required'],
		unique: true,
		trim: true,
		lowercase: true,
		minLength: 5,
		maxLength: 255,
		match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
	},

	password: {
		type: String,
		requiredq: [true, 'Password is required'],
		trim: true,
		minLength: 3,
		maxLength: 64,
	},
	options: {
		timestamps: true,
	},
})

const User = mongoose.model('User', userSchema)
export default User
