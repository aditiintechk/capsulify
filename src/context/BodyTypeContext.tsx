import React, { createContext, useContext, useState, ReactNode } from 'react'

interface BodyTypeContextType {
	bodyType: string
	setBodyType: (bodyType: string) => void
}

const BodyTypeContext = createContext<BodyTypeContextType | undefined>(
	undefined
)

export function BodyTypeProvider({ children }: { children: ReactNode }) {
	const [bodyType, setBodyType] = useState('')

	return (
		<BodyTypeContext.Provider value={{ bodyType, setBodyType }}>
			{children}
		</BodyTypeContext.Provider>
	)
}

export function useBodyType() {
	const context = useContext(BodyTypeContext)
	if (context === undefined) {
		throw new Error('useBodyType must be used within a BodyTypeProvider')
	}
	return context
}
