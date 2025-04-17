import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Import body type images - corrected path with "bodytypes"
import hourglass from '../assets/images/bodytypes/hourglass.png'
import invertedTriangle from '../assets/images/bodytypes/inverted-triangle.png'
import pear from '../assets/images/bodytypes/pear.png'
import apple from '../assets/images/bodytypes/apple.png'
import rectangle from '../assets/images/bodytypes/rectangle.png'

function BodyType() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null)
	const navigate = useNavigate()

	const bodyTypes = [
		{
			id: 'inverted-triangle',
			name: 'Inverted Triangle',
			image: invertedTriangle,
			description:
				'Your shoulders or bust are broader than your hips, with a less defined waist. Your upper body makes a bold statement.',
		},
		{
			id: 'rectangle',
			name: 'Rectangle',
			image: rectangle,
			description:
				'Your shoulders, waist, and hips are evenly aligned, creating a straight silhouette. You carry an effortlessly sleek, athletic look.',
		},
		{
			id: 'apple',
			name: 'Apple',
			image: apple,
			description:
				'You carry volume around your midsection with slimmer arms and legs. Your shape shines with softness and strength.',
		},
		{
			id: 'pear',
			name: 'Pear',
			image: pear,
			description:
				'Your hips are wider than your shoulders, with a beautifully defined waist. Your curves draw the eye downward in a graceful flow.',
		},
		{
			id: 'hourglass',
			name: 'Hourglass',
			image: hourglass,
			description:
				'Balanced shoulders and hips with a well-defined waist. Your curves are evenly proportioned, and your waist naturally stands out.',
		},
	]

	const handleImageClick = (id: string) => {
		setSelectedImage(id)
	}

	const handleNext = () => {
		if (selectedImage) {
			const selectedType = bodyTypes.find(
				(type) => type.id === selectedImage
			)
			navigate('/body-type-result', {
				state: { bodyType: selectedType?.name },
			})
		}
	}

	return (
		<div className='body-type-container'>
			<h1 className='body-type-title'>Pick Your Body Type!</h1>
			<div className='body-type-grid'>
				{bodyTypes.map((type) => (
					<div
						key={type.id}
						className={`body-type-item ${
							selectedImage === type.id ? 'selected' : ''
						}`}
						onClick={() => handleImageClick(type.id)}
					>
						<div className='body-type-image-wrapper'>
							<img
								src={type.image}
								alt={type.name}
								className='body-type-image'
							/>
						</div>
						<div className='body-type-text-container'>
							<h3 className='body-type-name'>{type.name}</h3>
							<p className='body-type-description'>
								{type.description}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className='button-container'>
				<button
					onClick={handleNext}
					className='next-button'
					disabled={!selectedImage}
				>
					Next
				</button>
			</div>
		</div>
	)
}

export default BodyType

/* src/
  assets/
    images/
	  bags/
		bag1.png
		bag2.png
		bag3.png
      bodytypes/
        apple.png
        hourglass.png
        inverted-triangle.png
        pear.png
        rectangle.png
	  bottoms/
        bottom1.png
        bottom2.png
        bottom3.png
        bottom4.png
        bottom5.png
        bottom6.png
        bottom7.png
		bottom8.png
	  dresses/
        dress1.png
        dress2.png
        dress3.png
	  footwear/
        footwear1.png
        footwear2.png
        footwear3.png
        footwear4.png
        footwear5.png
	  layers/
        layer1.png
        layer2.png
        layer3.png
	  tops/
        top1.png
        top2.png
        top3.png
        top4.png
        top5.png
        top6.png
        top7.png 
	*/
