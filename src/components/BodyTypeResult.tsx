import { useLocation, useNavigate } from 'react-router-dom'

function BodyTypeResult() {
	const location = useLocation()
	const navigate = useNavigate()
	const { bodyType } = location.state || { bodyType: '' }
	console.log(bodyType)
	const getBodyTypeDescription = (type: string) => {
		switch (type) {
			case 'Inverted Triangle':
				return {
					description:
						"we'll guide you to styles that soften and balance your silhouette—highlighting your shoulders while harmonizing your overall look.",
					recommendations:
						'6 Tops · 7 Bottoms · 2 Dresses · 4 Layers · 3 Bags · 6 Shoes',
					benefits:
						'designed to create flow, balance, and effortless allure.',
				}
			case 'Rectangle':
				return {
					description:
						"we'll help you bring dimension and softness to your naturally sleek silhouette—creating curves where you want them, and ease where you need it.",
					recommendations:
						'6 Tops · 7 Bottoms · 2 Dresses · 4 Layers · 3 Bags · 6 Shoes',
					benefits:
						'crafted to bring subtle structure, femininity, and versatility',
				}
			case 'Apple':
				return {
					description:
						"we'll focus on styles that elongate your frame and define your shape—so you feel confident, light, and radiant in every outfit.",
					recommendations:
						'6 Tops · 7 Bottoms · 2 Dresses · 4 Layers · 3 Bags · 6 Shoes',
					benefits:
						'chosen to flatter your proportions and highlight your best features.',
				}
			case 'Pear':
				return {
					description:
						"we'll show you how to balance your silhouette by drawing attention upward and enhancing your waist—while honoring your beautiful curves.",
					recommendations:
						'6 Tops · 7 Bottoms · 2 Dresses · 4 Layers · 3 Bags · 6 Shoes',
					benefits:
						'that bring harmony, confidence, and quiet magnetism to your wardrobe.',
				}
			case 'Hourglass':
				return {
					description:
						"we'll help you celebrate your balanced curves with timeless pieces that define your waist and enhance your natural symmetry.",
					recommendations:
						'6 Tops · 7 Bottoms · 2 Dresses · 4 Layers · 3 Bags · 6 Shoes',
					benefits:
						'chosen to elevate your shape with elegance and ease.',
				}
			default:
				return {
					description: '',
					recommendations: '',
					benefits: '',
				}
		}
	}

	const { description, recommendations, benefits } =
		getBodyTypeDescription(bodyType)

	return (
		<div className='result-container'>
			<div className='result-card'>
				<p>
					Because your body shape is{' '}
					<span className='selected-body-type'>{bodyType}</span>,
				</p>
				<p className='result-description'>{description}</p>
				<p>You'll receive tailored recommendations for:</p>
				<p className='recommendations'>{recommendations}</p>
				<p className='benefits'>{benefits}</p>
				<div className='button-container'>
					<button
						onClick={() =>
							navigate('/tops', { state: { bodyType } })
						}
						className='next-button'
					>
						Next
					</button>
				</div>
			</div>
		</div>
	)
}

export default BodyTypeResult
