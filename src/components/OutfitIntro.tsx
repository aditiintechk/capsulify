import { useNavigate } from 'react-router-dom'

function OutfitIntro() {
	const navigate = useNavigate()

	return (
		<div className='outfit-intro-container'>
			<div className='outfit-intro-card'>
				<div className='outfit-intro-content'>
					<p className='outfit-intro-text'>
						Let's bring your wardrobe to life
					</p>
					<p className='outfit-intro-subtext'>
						Here's where the transformation begins: curated outfit
						ideas designed to flatter your body and reflect the
						woman you're becoming. You'll be able to customize
						everything with your own pieces later on.
					</p>
					<div className='button-container'>
						<button
							onClick={() => navigate('/outfits')}
							className='next-button'
						>
							See my looks ✨
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OutfitIntro
