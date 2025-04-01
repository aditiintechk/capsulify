import { useNavigate } from 'react-router-dom'

function OutfitIntro() {
	const navigate = useNavigate()

	return (
		<div className='outfit-intro-container'>
			<div className='outfit-intro-card'>
				<div className='outfit-intro-content'>
					<p className='outfit-intro-text'>
						Now, I am going to show you the best part of being here
						- a list of unique ways we can combine these items to
						make unique outfits
					</p>
					<p className='outfit-intro-subtext'>
						ah ha..dont you worry, you can customise your wardrobe
						with your own clothes later!!
					</p>
					<div className='button-container'>
						<button
							onClick={() => navigate('/outfits')}
							className='next-button'
						>
							Let's go
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OutfitIntro
