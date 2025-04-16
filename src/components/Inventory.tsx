import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Import images for each category
import blackLongSleevedTop from '../assets/images/tops/black-long-sleeved-top.png'
import blackSatinTankTop from '../assets/images/tops/black-satin-tank-top.png'
import blueAccentColoredBlouse from '../assets/images/tops/blue-accent-colored-blouse.png'
import longSleevedAccentColoredTop from '../assets/images/tops/long-sleeved-accent-colored-top.png'
import sleevelessBlouse from '../assets/images/tops/sleeveless-blouse.png'
import whiteLongSleevedTop from '../assets/images/tops/white-long-sleeved-top.png'
import whiteSatinTankTop from '../assets/images/tops/white-satin-tank-top.png'

import beigeCasualShorts from '../assets/images/bottoms/beige-casual-shorts.png'
import beigeTailoredPants from '../assets/images/bottoms/beige-tailored-pants.png'
import blackTailoredPants from '../assets/images/bottoms/black-tailored-pants.png'
import casualSkirt from '../assets/images/bottoms/casual-skirt.png'
import denimPants from '../assets/images/bottoms/denim-pants.png'
import formalBlackSkirt from '../assets/images/bottoms/formal-black-skirt.png'
import formalPeplumBlackSkirt from '../assets/images/bottoms/formal-peplum-black-skirt.png'
import taupeCasualPants from '../assets/images/bottoms/taupe-casual-pants.png'

import blackBodyconDress from '../assets/images/dresses/black-bodycon-dress.png'
import casualDress from '../assets/images/dresses/casual-dress.png'
import littleBlackDress from '../assets/images/dresses/little-black-dress.png'
import pinkDress from '../assets/images/dresses/pink-dress.png'

import beigeBlazer from '../assets/images/layers/beige-blazer.png'
import blackBlazer from '../assets/images/layers/black-blazer.png'
import blackCardigan from '../assets/images/layers/black-cardigan.png'
import casualJacket from '../assets/images/layers/casual-jacket.png'

import blackClutch from '../assets/images/bags/black-clutch.png'
import blackTote from '../assets/images/bags/black-tote.png'
import brownTote from '../assets/images/bags/brown-tote.png'

import blackBalletFlats from '../assets/images/footwear/black-ballet-flats.png'
import blackPumps from '../assets/images/footwear/black-pumps.png'
import blackStrappyHeels from '../assets/images/footwear/black-strappy-heels.png'
import goldStrappySandals from '../assets/images/footwear/gold-strappy-sandals.png'
import nudeWedges from '../assets/images/footwear/nude-wedges.png'

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
					{
						id: 1,
						name: 'Black Long Sleeved Top',
						image: blackLongSleevedTop,
					},
					{
						id: 2,
						name: 'Black Satin Tank Top',
						image: blackSatinTankTop,
					},
					{
						id: 3,
						name: 'Blue Accent Colored Blouse',
						image: blueAccentColoredBlouse,
					},
					{
						id: 4,
						name: 'Long Sleeved Accent Colored Top',
						image: longSleevedAccentColoredTop,
					},
					{
						id: 5,
						name: 'Sleeveless Blouse',
						image: sleevelessBlouse,
					},
					{
						id: 6,
						name: 'White Long Sleeved Top',
						image: whiteLongSleevedTop,
					},
					{
						id: 7,
						name: 'White Satin Tank Top',
						image: whiteSatinTankTop,
					},
				]
			case 'Bottoms':
				return [
					{
						id: 1,
						name: 'Beige Casual Shorts',
						image: beigeCasualShorts,
					},
					{
						id: 2,
						name: 'Beige Tailored Pants',
						image: beigeTailoredPants,
					},
					{
						id: 3,
						name: 'Black Tailored Pants',
						image: blackTailoredPants,
					},
					{ id: 4, name: 'Casual Skirt', image: casualSkirt },
					{ id: 5, name: 'Denim Pants', image: denimPants },
					{
						id: 6,
						name: 'Formal Black Skirt',
						image: formalBlackSkirt,
					},
					{
						id: 7,
						name: 'Formal Peplum Black Skirt',
						image: formalPeplumBlackSkirt,
					},
					{
						id: 8,
						name: 'Taupe Casual Pants',
						image: taupeCasualPants,
					},
				]
			case 'Dresses':
				return [
					{
						id: 1,
						name: 'Black Bodycon Dress',
						image: blackBodyconDress,
					},
					{ id: 2, name: 'Casual Dress', image: casualDress },
					{
						id: 3,
						name: 'Little Black Dress',
						image: littleBlackDress,
					},
					{ id: 4, name: 'Pink Dress', image: pinkDress },
				]
			case 'Layers':
				return [
					{ id: 1, name: 'Beige Blazer', image: beigeBlazer },
					{ id: 2, name: 'Black Blazer', image: blackBlazer },
					{ id: 3, name: 'Black Cardigan', image: blackCardigan },
					{ id: 4, name: 'Casual Jacket', image: casualJacket },
				]
			case 'Bags':
				return [
					{ id: 1, name: 'Black Clutch', image: blackClutch },
					{ id: 2, name: 'Black Tote', image: blackTote },
					{ id: 3, name: 'Brown Tote', image: brownTote },
				]
			case 'Footwear':
				return [
					{
						id: 1,
						name: 'Black Ballet Flats',
						image: blackBalletFlats,
					},
					{ id: 2, name: 'Black Pumps', image: blackPumps },
					{
						id: 3,
						name: 'Black Strappy Heels',
						image: blackStrappyHeels,
					},
					{
						id: 4,
						name: 'Gold Strappy Sandals',
						image: goldStrappySandals,
					},
					{ id: 5, name: 'Nude Wedges', image: nudeWedges },
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
					<h1 className='inventory-title'>Your Basic Closet</h1>
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
