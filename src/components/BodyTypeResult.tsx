import { useLocation, useNavigate } from 'react-router-dom'

function BodyTypeResult() {
	const location = useLocation()
	const navigate = useNavigate()
	const bodyType = location.state?.bodyType || 'Unknown'

	const categories = [
		'Tops',
		'Bottoms',
		'Dresses',
		'Layers',
		'Bags',
		'Footwear',
	]

	return (
		<div className='result-container'>
			<div className='result-card'>
				<p className='result-heading'>
					Given your body type{' '}
					<span className='selected-body-type'>{bodyType}</span>, I am
					going to consider the following groups for you
				</p>

				<div className='categories-grid'>
					{categories.map((category, index) => (
						<div key={index} className='category-item'>
							<p className='category-name'>{category}</p>
						</div>
					))}
				</div>

				<div className='button-container'>
					<button
						onClick={() => navigate('/tops')}
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
