'use server'

import { CreateUserParams } from '@/app/types'
import { connectToDatabase } from '../database/db'

export const createUser = async (params: CreateUserParams) => {
	try {
		const connection = await connectToDatabase()

		const { name, username, email, clerkId } = params

		const createUserQuery = `
      INSERT INTO capsulify_live.users (name, username, email, clerk_id)
      VALUES ($1, $2, $3, $4)
    `
		const result = await connection.query(createUserQuery, [
			name,
			username,
			email,
			clerkId,
		])

		await connection.query('COMMIT')

		sessionStorage.setItem('userId', result.rows[0].id)

		console.log('User created successfully:', result)
		connection.release()
	} catch (error) {
		console.error('Error creating user:', error)
		throw new Error('Failed to create user')
	}
}

export const getUserByClerkId = async (clerkId: string) => {
	try {
		const connection = await connectToDatabase()
		console.log('clerk id', clerkId)

		const getUserQuery = `
      SELECT * FROM capsulify_live.users
      WHERE clerk_id = $1
    `
		const user = await connection.query(getUserQuery, [clerkId])
		console.log('User retrieved successfully:', user.rows[0])
		connection.release()
		return user.rows[0]
	} catch (error) {
		console.error('Error getting user by clerkId:', error)
		throw new Error('Failed to get user')
	}
}

export const updateUserBodyType = async (bodyType: string, clerkId: string) => {
	try {
		const connection = await connectToDatabase()
		// also needs setting onboarded value to true
		// there is a change in query, there is a body_shapes table in db, which has id and body_shapes(string) , we have to attach the body_shapes id to the user
		console.log(bodyType.toLowerCase(), clerkId)

		const bodyTypeQuery = `SELECT id FROM capsulify_live.body_shapes WHERE name = $1`
		const bodyTypeResult = await connection.query(bodyTypeQuery, [
			bodyType.toLowerCase(),
		])

		if (bodyTypeResult.rows.length === 0)
			throw new Error('body type not found')

		const bodyTypeId = bodyTypeResult.rows[0].id

		const updateUserQuery = `
      UPDATE capsulify_live.users
      SET body_shape_id = $1, onboarded = true
      WHERE clerk_id = $2
    `

		const result = await connection.query(updateUserQuery, [
			bodyTypeId,
			clerkId,
		])

		console.log('User updated successfully:', result)
		connection.release()
	} catch (error) {}
}

export const updateUser = async (params: CreateUserParams) => {
	try {
		const connection = await connectToDatabase()

		const { name, username, email, clerkId } = params

		const updateUserQuery = `
      UPDATE capsulify_live.users
      SET name = $1, username = $2, email = $3
      WHERE clerk_id = $4
    `
		const result = await connection.query(updateUserQuery, [
			name,
			username,
			email,
			clerkId,
		])

		console.log('User updated successfully:', result)
		connection.release()
	} catch (error) {
		console.error('Error updating user:', error)
		throw new Error('Failed to update user')
	}
}

export const deleteUser = async (clerkId: string) => {
	try {
		const connection = await connectToDatabase()

		const deleteUserQuery = `
      DELETE FROM capsulify_live.users
      WHERE clerk_id = $1
    `
		const result = await connection.query(deleteUserQuery, [clerkId])

		console.log('User deleted successfully:', result)
		connection.release()
	} catch (error) {
		console.error('Error deleting user:', error)
		throw new Error('Failed to delete user')
	}
}
