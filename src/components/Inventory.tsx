import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Import images for each category
import top1 from '../assets/images/tops/top1.png'
import top2 from '../assets/images/tops/top2.png'
import top3 from '../assets/images/tops/top3.png'
import top4 from '../assets/images/tops/top4.png'
import top5 from '../assets/images/tops/top5.png'
import top6 from '../assets/images/tops/top6.png'
import top7 from '../assets/images/tops/top7.png'

import bottom1 from '../assets/images/bottoms/bottom1.png'
import bottom2 from '../assets/images/bottoms/bottom2.png'
import bottom3 from '../assets/images/bottoms/bottom3.png'
import bottom4 from '../assets/images/bottoms/bottom4.png'
import bottom5 from '../assets/images/bottoms/bottom5.png'
import bottom6 from '../assets/images/bottoms/bottom6.png'
import bottom7 from '../assets/images/bottoms/bottom7.png'
import bottom8 from '../assets/images/bottoms/bottom8.png'

import dress1 from '../assets/images/dresses/dress1.png'
import dress2 from '../assets/images/dresses/dress2.png'
import dress3 from '../assets/images/dresses/dress3.png'
import dress4 from '../assets/images/dresses/dress4.png'

import layer1 from '../assets/images/layers/layer1.png'
import layer2 from '../assets/images/layers/layer2.png'
import layer3 from '../assets/images/layers/layer3.png'
import layer4 from '../assets/images/layers/layer4.png'

import bag1 from '../assets/images/bags/bag1.png'
import bag2 from '../assets/images/bags/bag2.png'
import bag3 from '../assets/images/bags/bag3.png'

import footwear1 from '../assets/images/footwear/footwear1.png'
import footwear2 from '../assets/images/footwear/footwear2.png'
import footwear3 from '../assets/images/footwear/footwear3.png'
import footwear4 from '../assets/images/footwear/footwear4.png'
import footwear5 from '../assets/images/footwear/footwear5.png'

function Inventory() {
	const [selectedCategory, setSelectedCategory] = useState('Tops')
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const navigate = useNavigate()

	const categories = [
		'Tops',
		'Bottoms',
		'Dresses',
		'Layers',
		'Bags',
		'Footwear',
	]

	const getImagesForCategory = (category: string) => {
		switch (category) {
			case 'Tops':
				return [
					{ id: 1, name: 'Top 1', image: top1 },
					{ id: 2, name: 'Top 2', image: top2 },
					{ id: 3, name: 'Top 3', image: top3 },
					{ id: 4, name: 'Top 4', image: top4 },
					{ id: 5, name: 'Top 5', image: top5 },
					{ id: 6, name: 'Top 6', image: top6 },
					{ id: 7, name: 'Top 7', image: top7 },
				]
			case 'Bottoms':
				return [
					{ id: 1, name: 'Bottom 1', image: bottom1 },
					{ id: 2, name: 'Bottom 2', image: bottom2 },
					{ id: 3, name: 'Bottom 3', image: bottom3 },
					{ id: 4, name: 'Bottom 4', image: bottom4 },
					{ id: 5, name: 'Bottom 5', image: bottom5 },
					{ id: 6, name: 'Bottom 6', image: bottom6 },
					{ id: 7, name: 'Bottom 7', image: bottom7 },
					{ id: 8, name: 'Bottom 8', image: bottom8 },
				]
			case 'Dresses':
				return [
					{ id: 1, name: 'Dress 1', image: dress1 },
					{ id: 2, name: 'Dress 2', image: dress2 },
					{ id: 3, name: 'Dress 3', image: dress3 },
					{ id: 4, name: 'Dress 4', image: dress4 },
				]
			case 'Layers':
				return [
					{ id: 1, name: 'Layer 1', image: layer1 },
					{ id: 2, name: 'Layer 2', image: layer2 },
					{ id: 3, name: 'Layer 3', image: layer3 },
					{ id: 4, name: 'Layer 4', image: layer4 },
				]
			case 'Bags':
				return [
					{ id: 1, name: 'Bag 1', image: bag1 },
					{ id: 2, name: 'Bag 2', image: bag2 },
					{ id: 3, name: 'Bag 3', image: bag3 },
				]
			case 'Footwear':
				return [
					{ id: 1, name: 'Footwear 1', image: footwear1 },
					{ id: 2, name: 'Footwear 2', image: footwear2 },
					{ id: 3, name: 'Footwear 3', image: footwear3 },
					{ id: 4, name: 'Footwear 4', image: footwear4 },
					{ id: 5, name: 'Footwear 5', image: footwear5 },
				]
			default:
				return []
		}
	}

	const items = getImagesForCategory(selectedCategory)

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<div className='inventory-container'>
			<button className='hamburger-menu' onClick={toggleSidebar}>
				{isSidebarOpen ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				)}
			</button>
			<div className='inventory-layout'>
				<div
					className={`inventory-sidebar ${
						isSidebarOpen ? 'show' : ''
					}`}
				>
					<h2 className='inventory-sidebar-title'>Categories</h2>
					<ul className='inventory-categories'>
						{categories.map((category) => (
							<li
								key={category}
								className={`inventory-category ${
									selectedCategory === category
										? 'active'
										: ''
								}`}
								onClick={() => {
									setSelectedCategory(category)
									if (window.innerWidth <= 768) {
										setIsSidebarOpen(false)
									}
								}}
							>
								{category}
							</li>
						))}
					</ul>
				</div>
				<div className='inventory-content'>
					<h1 className='inventory-title'>{selectedCategory}</h1>
					<div className='inventory-grid'>
						{items.map((item) => (
							<div key={item.id} className='inventory-item'>
								<div className='inventory-image-wrapper'>
									<img
										src={item.image}
										alt={item.name}
										className='inventory-image'
									/>
								</div>
								<p className='inventory-item-name'>
									{item.name}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<button
				className='generate-outfits-button'
				onClick={() => navigate('/generate-outfits')}
			>
				Generate Outfits
			</button>
		</div>
	)
}

export default Inventory
