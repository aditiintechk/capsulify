import blackSatinTankTop from '../assets/images/tops/black-satin-tank-top.png'
import blackTailoredPants from '../assets/images/bottoms/black-tailored-pants.png'
import blackClutch from '../assets/images/bags/black-clutch.png'
import blackBalletFlats from '../assets/images/footwear/black-ballet-flats.png'

function GenerateOutfits() {
	return (
		<div className='outfits-container'>
			<div className='outfits-content'>
				<div className='outfits-row'>
					{/* Outfit 1 */}
					<div className='outfit-grid'>
						<div className='outfit-item top'>
							<div className='outfit-image-wrapper'>
								<img
									src={blackSatinTankTop}
									alt='Black Satin Tank Top'
									className='outfit-image'
								/>
							</div>
						</div>

						<div className='outfit-item bag'>
							<div className='outfit-image-wrapper'>
								<img
									src={blackClutch}
									alt='Black Clutch'
									className='outfit-image'
								/>
							</div>
						</div>

						<div className='outfit-item bottom'>
							<div className='outfit-image-wrapper'>
								<img
									src={blackTailoredPants}
									alt='Black Tailored Pants'
									className='outfit-image'
								/>
							</div>
						</div>

						<div className='outfit-item footwear'>
							<div className='outfit-image-wrapper'>
								<img
									src={blackBalletFlats}
									alt='Black Ballet Flats'
									className='outfit-image'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GenerateOutfits
