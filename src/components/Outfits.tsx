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
	const [currentIndex, setCurrentIndex] = useState(0)

	const getEventOutfits = (bodyType: string) => {
		switch (bodyType) {
			case 'Apple':
				return [
					{ id: 1, name: 'Casual', image: appleCasual },
					{ id: 2, name: 'Date Night', image: appleDateNight },
					{ id: 3, name: 'Formal', image: appleFormal },
					{ id: 4, name: 'Semi-Casual', image: appleSemiCasual },
				]
			case 'Hourglass':
				return [
					{ id: 1, name: 'Casual', image: hourglassCasual },
					{ id: 2, name: 'Date Night', image: hourglassDateNight },
					{ id: 3, name: 'Formal', image: hourglassFormal },
					{ id: 4, name: 'Semi-Casual', image: hourglassSemiCasual },
				]
			case 'Inverted Triangle':
				return [
					{ id: 1, name: 'Casual', image: invertedTriangleCasual },
					{
						id: 2,
						name: 'Date Night',
						image: invertedTriangleDateNight,
					},
					{ id: 3, name: 'Formal', image: invertedTriangleFormal },
					{
						id: 4,
						name: 'Semi-Casual',
						image: invertedTriangleSemiCasual,
					},
				]
			case 'Pear':
				return [
					{ id: 1, name: 'Casual', image: pearCasual },
					{ id: 2, name: 'Date Night', image: pearDateNight },
					{ id: 3, name: 'Formal', image: pearFormal },
					{ id: 4, name: 'Semi-Casual', image: pearSemiCasual },
				]
			case 'Rectangle':
				return [
					{ id: 1, name: 'Casual', image: rectangleCasual },
					{ id: 2, name: 'Date Night', image: rectangleDateNight },
					{ id: 3, name: 'Formal', image: rectangleFormal },
					{ id: 4, name: 'Semi-Casual', image: rectangleSemiCasual },
				]
			default:
				return []
		}
	}

	const outfits = getEventOutfits(bodyType)

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? outfits.length - 1 : prevIndex - 1
		)
	}

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === outfits.length - 1 ? 0 : prevIndex + 1
		)
	}

	return (
		<div className='outfits-container'>
			<div className='outfits-content'>
				<div className='outfits-carousel'>
					<button
						className='carousel-button prev'
						onClick={handlePrevious}
					>
						‹
					</button>
					<div className='outfit-display'>
						<h2 className='outfit-event-name'>
							{outfits[currentIndex]?.name}
						</h2>
						<div className='outfit-image-container'>
							<img
								src={outfits[currentIndex]?.image}
								alt={outfits[currentIndex]?.name}
								className='outfit-image'
							/>
						</div>
					</div>
					<button
						className='carousel-button next'
						onClick={handleNext}
					>
						›
					</button>
				</div>
				<div className='button-container'>
					<button
						onClick={() => navigate('/inventory')}
						className='next-button'
					>
						Take me to the app
					</button>
				</div>
			</div>
		</div>
	)
}

export default Outfits
