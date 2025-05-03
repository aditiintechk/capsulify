'use client'
import { SignedOut, SignInButton, SignUpButton, useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { getUserByClerkId } from './lib/actions/user.actions'
import { BODY_TYPE_ID } from './constants'

export default function Home() {
	const router = useRouter()
	const { isSignedIn, userId: clerkId } = useAuth()

	useEffect(() => {
		if (isSignedIn) {
			const checkOnboarded = async () => {
				//@ts-ignore
				const [user] = await getUserByClerkId(clerkId!)
				// store body type in local storage
				localStorage.setItem(
					'bodyType',
					BODY_TYPE_ID[user.body_type_id as keyof typeof BODY_TYPE_ID]
				)
				if (user.onboarded === 0) {
					router.push('/onboarding')
				}
				router.push('/inventory')
			}
			checkOnboarded()
		}
	}, [isSignedIn, router])

	return (
		<div className='home-container'>
			<div className='home-content'>
				<div className='logo-content'>
					<img
						src={'/assets/images/logo/logo.svg'}
						alt='Capsulify Logo'
						className='logo'
					/>
					<h1 className='logo-text'>CAPSULIFY</h1>
				</div>
				<h1 className='home-title'>
					Style that attracts what <span>you</span> desire.
				</h1>
				<p className='home-subtitle'>
					We'll help you curate a capsule wardrobe designed for your
					shape - and the next era of your life!
				</p>
				<div className='flex justify-center gap-4'>
					<SignedOut>
						<div className='next-button'>
							<SignInButton />
						</div>
						<div className='next-button'>
							<SignUpButton />
						</div>
					</SignedOut>
				</div>
			</div>
		</div>
	)
}
