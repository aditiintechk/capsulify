import { useState } from 'react'
// import AppNavbar from './AppNavbar'
import { FaUser } from 'react-icons/fa'

interface ProfileData {
	name: string
	email: string
	location: string
	bodyShape: string
	height: string
	skinTone: string
	colorPalette: string[]
	style: string[]
	bestFeatures: string[]
	necklines: string[]
	bottomCuts: string[]
	sleevePreferences: string[]
	skirtLengths: string[]
	shoePreferences: {
		heels: string[]
		toeBox: string[]
		brands: string[]
	}
	wardrobeGoal: string
	typicalEvents: string[]
}

function Profile() {
	const [profileData] = useState<ProfileData>({
		name: 'Jane Doe',
		email: 'jane.doe@example.com',
		location: 'New York, NY',
		bodyShape: 'Hourglass',
		height: '5\'6"',
		skinTone: 'Medium',
		colorPalette: ['Warm', 'Autumn'],
		style: ['Classic', 'Elegant'],
		bestFeatures: ['Shoulders', 'Waist'],
		necklines: ['V-neck', 'Scoop'],
		bottomCuts: ['A-line', 'Straight'],
		sleevePreferences: ['3/4 length', 'Long'],
		skirtLengths: ['Knee length', 'Midi'],
		shoePreferences: {
			heels: ['2-3 inches', 'Block heel'],
			toeBox: ['Almond', 'Round'],
			brands: ['Nine West', 'Steve Madden'],
		},
		wardrobeGoal: 'Build a versatile professional wardrobe',
		typicalEvents: ['Office work', 'Business meetings', 'Weekend casual'],
	})

	return (
		<div className='profile-page'>
			<div className='profile-container'>
				{/* Left Sidebar */}
				<div className='profile-sidebar'>
					<div className='profile-basic-info'>
						<div className='profile-image-container'>
							<FaUser className='profile-icon' />
						</div>
						<h1 className='profile-name'>{profileData.name}</h1>
						<p className='profile-email'>{profileData.email}</p>
					</div>

					<div className='profile-quick-info'>
						<div className='info-item'>
							<span className='info-label'>Location</span>
							<span className='info-value'>
								{profileData.location}
							</span>
						</div>
						<div className='info-item'>
							<span className='info-label'>Body Shape</span>
							<span className='info-value'>
								{profileData.bodyShape}
							</span>
						</div>
						<div className='info-item'>
							<span className='info-label'>Height</span>
							<span className='info-value'>
								{profileData.height}
							</span>
						</div>
						<div className='info-item'>
							<span className='info-label'>Skin Tone</span>
							<span className='info-value'>
								{profileData.skinTone}
							</span>
						</div>
						<div className='edit-profile'>
							<button className='edit-profile-button'>
								Edit Profile
							</button>
						</div>
					</div>
				</div>

				{/* Main Content */}
				<div className='profile-main-content'>
					<div className='sub-grid'>
						<div className='profile-section one-third-width'>
							<h2 className='section-title'>Color Palette</h2>
							<div className='style-tags'>
								{profileData.colorPalette.map(
									(color, index) => (
										<span key={index} className='style-tag'>
											{color}
										</span>
									)
								)}
							</div>
						</div>

						<div className='profile-section one-third-width'>
							<h2 className='section-title'>Style Preferences</h2>
							<div className='style-tags'>
								{profileData.style.map((style, index) => (
									<span key={index} className='style-tag'>
										{style}
									</span>
								))}
							</div>
						</div>

						<div className='profile-section one-third-width'>
							<h2 className='section-title'>Best Features</h2>
							<div className='style-tags'>
								{profileData.bestFeatures.map(
									(feature, index) => (
										<span key={index} className='style-tag'>
											{feature}
										</span>
									)
								)}
							</div>
						</div>
					</div>

					<div className='profile-section'>
						<h2 className='section-title'>Clothing Preferences</h2>
						<div className='preferences-grid'>
							<div className='preference-group'>
								<h3>Necklines</h3>
								<div className='style-tags'>
									{profileData.necklines.map(
										(neckline, index) => (
											<span
												key={index}
												className='style-tag'
											>
												{neckline}
											</span>
										)
									)}
								</div>
							</div>
							<div className='preference-group'>
								<h3>Bottom Cuts</h3>
								<div className='style-tags'>
									{profileData.bottomCuts.map(
										(cut, index) => (
											<span
												key={index}
												className='style-tag'
											>
												{cut}
											</span>
										)
									)}
								</div>
							</div>
							<div className='preference-group'>
								<h3>Sleeve Styles</h3>
								<div className='style-tags'>
									{profileData.sleevePreferences.map(
										(sleeve, index) => (
											<span
												key={index}
												className='style-tag'
											>
												{sleeve}
											</span>
										)
									)}
								</div>
							</div>
							<div className='preference-group'>
								<h3>Skirt Lengths</h3>
								<div className='style-tags'>
									{profileData.skirtLengths.map(
										(length, index) => (
											<span
												key={index}
												className='style-tag'
											>
												{length}
											</span>
										)
									)}
								</div>
							</div>
						</div>
					</div>

					<div className='profile-section'>
						<h2 className='section-title'>Shoe Preferences</h2>
						<div className='shoe-preferences'>
							<div className='preference-group'>
								<h3>Heels</h3>
								<div className='style-tags'>
									{profileData.shoePreferences.heels.map(
										(heel, index) => (
											<span
												key={index}
												className='style-tag'
											>
												{heel}
											</span>
										)
									)}
								</div>
							</div>
							<div className='preference-group'>
								<h3>Toe Box</h3>
								<div className='style-tags'>
									{profileData.shoePreferences.toeBox.map(
										(toe, index) => (
											<span
												key={index}
												className='style-tag'
											>
												{toe}
											</span>
										)
									)}
								</div>
							</div>
							<div className='preference-group'>
								<h3>Preferred Brands</h3>
								<div className='style-tags'>
									{profileData.shoePreferences.brands.map(
										(brand, index) => (
											<span
												key={index}
												className='style-tag'
											>
												{brand}
											</span>
										)
									)}
								</div>
							</div>
						</div>
					</div>

					{/* <div className='profile-section'>
						<h2 className='section-title'>Wardrobe Goals</h2>
						<p className='profile-text'>
							{profileData.wardrobeGoal}
						</p>
					</div> */}

					<div className='profile-section'>
						<h2 className='section-title'>Typical Events</h2>
						<div className='style-tags'>
							{profileData.typicalEvents.map((event, index) => (
								<span key={index} className='style-tag'>
									{event}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
