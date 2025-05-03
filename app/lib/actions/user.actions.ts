'use server'

import { CreateUserParams } from '@/app/types'
import { connectToDatabase } from '../database/db'

export const createUser = async (params: CreateUserParams) => {
	try {
		const connection = await connectToDatabase()

		const { name, username, email, clerkId } = params

		const createUserQuery = `
      INSERT INTO users (name, username, email, clerk_id)
      VALUES (?, ?, ?, ?)
    `
		const result = await connection.execute(createUserQuery, [
			name,
			username,
			email,
			clerkId,
		])

		console.log('User created successfully:', result)
		await connection.end()
	} catch (error) {
		console.error('Error creating user:', error)
		throw new Error('Failed to create user')
	}
}

export const getUserByClerkId = async (clerkId: string) => {
	try {
		const connection = await connectToDatabase()

		const getUserQuery = `
      SELECT * FROM users
      WHERE clerk_id = ?
    `
		const [user] = await connection.execute(getUserQuery, [clerkId])

		console.log('User retrieved successfully:', user)
		await connection.end()
		return user
	} catch (error) {
		console.error('Error getting user by clerkId:', error)
		throw new Error('Failed to get user')
	}
}

export const updateUserBodyType = async (bodyType: string, clerkId: string) => {
	try {
		const connection = await connectToDatabase()
		// also needs seeting onboarded valye to true
		// there is a change in query, there is a body_type table in db, which has id and body_type(string) , we have to attach the body_type id to the user
		console.log(bodyType.toLowerCase(), clerkId)
		const bodyTypeQuery = `SELECT id FROM body_type WHERE name = ?`
		const [bodyTypeResult] = await connection.execute(bodyTypeQuery, [
			bodyType.toLowerCase(),
		])
		const updateUserQuery = `
      UPDATE users
      SET body_type_id = ?, onboarded = true
      WHERE clerk_id = ?
    `

		// @ts-ignore
		console.log(bodyTypeResult[0].id)
		const result = await connection.execute(updateUserQuery, [
			// @ts-ignore
			bodyTypeResult[0].id as number,
			clerkId,
		])

		console.log('User updated successfully:', result)
		await connection.end()
	} catch (error) {}
}

export const updateUser = async (params: CreateUserParams) => {
	try {
		const connection = await connectToDatabase()

		const { name, username, email, clerkId } = params

		const updateUserQuery = `
      UPDATE users
      SET name = ?, username = ?, email = ?
      WHERE clerk_id = ?
    `
		const result = await connection.execute(updateUserQuery, [
			name,
			username,
			email,
			clerkId,
		])

		console.log('User updated successfully:', result)
		await connection.end()
	} catch (error) {
		console.error('Error updating user:', error)
		throw new Error('Failed to update user')
	}
}

export const deleteUser = async (clerkId: string) => {
	try {
		const connection = await connectToDatabase()

		const deleteUserQuery = `
      DELETE FROM users
      WHERE clerk_id = ?
    `
		const result = await connection.execute(deleteUserQuery, [clerkId])

		console.log('User deleted successfully:', result)
		await connection.end()
	} catch (error) {
		console.error('Error deleting user:', error)
		throw new Error('Failed to delete user')
	}
}
