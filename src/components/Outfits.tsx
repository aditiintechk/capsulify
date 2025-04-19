import { useNavigate } from 'react-router-dom'
import { useBodyType } from '../context/BodyTypeContext'
import { useState } from 'react'

// Import event outfit images for Apple body type
import appleCasual from '../assets/images/clothing-variations/apple/event-outfits/casual/applecasual.png'
import appleDateNight from '../assets/images/clothing-variations/apple/event-outfits/date-night/appledate.png'
import appleFormal from '../assets/images/clothing-variations/apple/event-outfits/formal/appleformal.png'
import appleSemiCasual from '../assets/images/clothing-variations/apple/event-outfits/semi-casual/applesemicasual.png'

// Import event outfit images for Hourglass body type
import hourglassCasual from '../assets/images/clothing-variations/hourglass/event-outfits/casual/hourglasscasual.png'
import hourglassDateNight from '../assets/images/clothing-variations/hourglass/event-outfits/date-night/hourglassdate.png'
import hourglassFormal from '../assets/images/clothing-variations/hourglass/event-outfits/formal/hourglassformal.png'
import hourglassSemiCasual from '../assets/images/clothing-variations/hourglass/event-outfits/semi-casual/hourglasssemicasual.png'

// Import event outfit images for Inverted Triangle body type
import invertedTriangleCasual from '../assets/images/clothing-variations/inverted-triangle/event-outfits/casual/invertedtrianglecasual.png'
import invertedTriangleDateNight from '../assets/images/clothing-variations/inverted-triangle/event-outfits/date-night/invertedtriangledate.png'
import invertedTriangleFormal from '../assets/images/clothing-variations/inverted-triangle/event-outfits/formal/invertedtriangleformal.png'
import invertedTriangleSemiCasual from '../assets/images/clothing-variations/inverted-triangle/event-outfits/semi-casual/invertedtrianglesemicasual.png'

// Import event outfit images for Pear body type
import pearCasual from '../assets/images/clothing-variations/pear/event-outfits/casual/pearcasual.png'
import pearDateNight from '../assets/images/clothing-variations/pear/event-outfits/date-night/peardate.png'
import pearFormal from '../assets/images/clothing-variations/pear/event-outfits/formal/pearformal.png'
import pearSemiCasual from '../assets/images/clothing-variations/pear/event-outfits/semi-casual/pearsemicasual.png'

// Import event outfit images for Rectangle body type
import rectangleCasual from '../assets/images/clothing-variations/rectangle/event-outfits/casual/rectanglecasual.png'
import rectangleDateNight from '../assets/images/clothing-variations/rectangle/event-outfits/date-night/rectangledate.png'
import rectangleFormal from '../assets/images/clothing-variations/rectangle/event-outfits/formal/rectangleformal.png'
import rectangleSemiCasual from '../assets/images/clothing-variations/rectangle/event-outfits/semi-casual/rectanglesemicasual.png'

function Outfits() {
	const navigate = useNavigate()
	const { bodyType } = useBodyType()
	const [currentOutfitIndex, setCurrentOutfitIndex] = useState(0)

	const getEventOutfits = (bodyType: string) => {
		switch (bodyType.toLowerCase()) {
			case 'apple':
				return [
					{
						id: 1,
						event: 'Casual',
						image: appleCasual,
					},
					{
						id: 2,
						event: 'Date Night',
						image: appleDateNight,
					},
					{
						id: 3,
						event: 'Formal',
						image: appleFormal,
					},
					{
						id: 4,
						event: 'Semi-Casual',
						image: appleSemiCasual,
					},
				]
			case 'hourglass':
				return [
					{ id: 1, event: 'Casual', image: hourglassCasual },
					{ id: 2, event: 'Date Night', image: hourglassDateNight },
					{ id: 3, event: 'Formal', image: hourglassFormal },
					{ id: 4, event: 'Semi-Casual', image: hourglassSemiCasual },
				]
			case 'inverted triangle':
				return [
					{ id: 1, event: 'Casual', image: invertedTriangleCasual },
					{
						id: 2,
						event: 'Date Night',
						image: invertedTriangleDateNight,
					},
					{ id: 3, event: 'Formal', image: invertedTriangleFormal },
					{
						id: 4,
						event: 'Semi-Casual',
						image: invertedTriangleSemiCasual,
					},
				]
			case 'pear':
				return [
					{ id: 1, event: 'Casual', image: pearCasual },
					{ id: 2, event: 'Date Night', image: pearDateNight },
					{ id: 3, event: 'Formal', image: pearFormal },
					{ id: 4, event: 'Semi-Casual', image: pearSemiCasual },
				]
			case 'rectangle':
				return [
					{ id: 1, event: 'Casual', image: rectangleCasual },
					{ id: 2, event: 'Date Night', image: rectangleDateNight },
					{ id: 3, event: 'Formal', image: rectangleFormal },
					{ id: 4, event: 'Semi-Casual', image: rectangleSemiCasual },
				]
			default:
				return []
		}
	}

	const outfits = getEventOutfits(bodyType || 'hourglass')

	return (
		<div className='outfits-container'>
			<div className='outfits-content'>
				<div className='outfits-carousel'>
					<button
						className='carousel-button'
						onClick={() =>
							setCurrentOutfitIndex((prev) =>
								prev > 0 ? prev - 1 : prev
							)
						}
						disabled={currentOutfitIndex === 0}
					>
						‹
					</button>
					<div className='outfit-display'>
						<p className='outfit-event-name'>
							{outfits[currentOutfitIndex].event}
						</p>
						<div className='outfit-image-container'>
							<img
								src={outfits[currentOutfitIndex].image}
								alt={`${outfits[currentOutfitIndex].event} outfit`}
								className='outfit-image'
							/>
						</div>
					</div>
					<button
						className='carousel-button'
						onClick={() =>
							setCurrentOutfitIndex((prev) =>
								prev < outfits.length - 1 ? prev + 1 : prev
							)
						}
						disabled={currentOutfitIndex === outfits.length - 1}
					>
						›
					</button>
				</div>
			</div>

			<div className='navigation-arrows-container'>
				<button
					className='next-button'
					onClick={() => navigate('/inventory')}
				>
					Take me to the app
				</button>
			</div>
		</div>
	)
}

export default Outfits
