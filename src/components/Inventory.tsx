import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBodyType } from '../context/BodyTypeContext'
import AppNavbar from './AppNavbar'
import {
	FaTrash,
	FaEdit,
	FaHeart,
	FaRegHeart,
	FaInfoCircle,
	FaCog,
} from 'react-icons/fa'

// Import images for Apple body type
import appleBlackLongSleevedTop from '../assets/images/clothing-variations/apple/tops/black-long-sleeved-top.png'
import appleWhiteLongSleevedTop from '../assets/images/clothing-variations/apple/tops/white-long-sleeved-top.png'
import appleAccentColoredLongSleevedTop from '../assets/images/clothing-variations/apple/tops/accent-colored-long-sleeved-top.png'
import appleBlackSatinTop from '../assets/images/clothing-variations/apple/tops/black-satin-top.png'
import appleWhiteSatinTop from '../assets/images/clothing-variations/apple/tops/white-satin-top.png'
import appleAccentColoredBlouse1 from '../assets/images/clothing-variations/apple/tops/accent-colored-blouse-1.png'
import appleAccentColoredBlouse2 from '../assets/images/clothing-variations/apple/tops/accent-colored-blouse-2.png'

import appleTailoredBlackPants from '../assets/images/clothing-variations/apple/bottoms/tailored-black-pants.png'
import appleTailoredBrownPants from '../assets/images/clothing-variations/apple/bottoms/tailored-brown-pants.png'
import appleFormalBlackSkirt from '../assets/images/clothing-variations/apple/bottoms/formal-black-skirt.png'
import appleDenimJeans from '../assets/images/clothing-variations/apple/bottoms/denim-jeans.png'
import appleCasualSkirt from '../assets/images/clothing-variations/apple/bottoms/casual-skirt.png'

import appleLittleBlackDress from '../assets/images/clothing-variations/apple/dresses/little-black-dress.png'
import appleCasualDress from '../assets/images/clothing-variations/apple/dresses/casual-dress.png'

// Import images for Hourglass body type
import hourglassBlackLongSleevedTop from '../assets/images/clothing-variations/hourglass/tops/black-long-sleeved-top.png'
import hourglassWhiteLongSleevedTop from '../assets/images/clothing-variations/hourglass/tops/white-long-sleeved-top.png'
import hourglassAccentColoredLongSleevedTop from '../assets/images/clothing-variations/hourglass/tops/accent-colored-long-sleeved-top.png'
import hourglassBlackSatinTop from '../assets/images/clothing-variations/hourglass/tops/black-satin-top.png'
import hourglassWhiteSatinTop from '../assets/images/clothing-variations/hourglass/tops/white-satin-top.png'
import hourglassAccentColoredBlouse1 from '../assets/images/clothing-variations/hourglass/tops/accent-colored-blouse-1.png'
import hourglassAccentColoredBlouse2 from '../assets/images/clothing-variations/hourglass/tops/accent-colored-blouse-2.png'

import hourglassBlackTailoredPants from '../assets/images/clothing-variations/hourglass/bottoms/black-tailored-pants.png'
import hourglassBeigeTailoredPants from '../assets/images/clothing-variations/hourglass/bottoms/beige-tailored-pants.png'
import hourglassFormalBlackSkirt from '../assets/images/clothing-variations/hourglass/bottoms/formal-black-skirt.png'
import hourglassTaupeCasualPants from '../assets/images/clothing-variations/hourglass/bottoms/taupe-casual-pants.png'
import hourglassDenimJeans from '../assets/images/clothing-variations/hourglass/bottoms/denim-jeans.png'
import hourglassCasualSkirt from '../assets/images/clothing-variations/hourglass/bottoms/casual-skirt.png'

import hourglassBlackDress from '../assets/images/clothing-variations/hourglass/dresses/black-dress.png'
import hourglassCasualDress from '../assets/images/clothing-variations/hourglass/dresses/casual-dress.png'

// Import images for Inverted Triangle body type
import invertedTriangleBlackLongSleevedTop from '../assets/images/clothing-variations/inverted-triangle/tops/black-long-sleeved-top.png'
import invertedTriangleWhiteLongSleevedTop from '../assets/images/clothing-variations/inverted-triangle/tops/white-long-sleeved-top.png'
import invertedTriangleAccentColoredLongSleevedTop from '../assets/images/clothing-variations/inverted-triangle/tops/accent-colored-long-sleeved-top.png'
import invertedTriangleBlackSatinTop from '../assets/images/clothing-variations/inverted-triangle/tops/black-satin-top.png'
import invertedTriangleWhiteSatinTop from '../assets/images/clothing-variations/inverted-triangle/tops/white-satin-top.png'
import invertedTriangleAccentColoredBlouse1 from '../assets/images/clothing-variations/inverted-triangle/tops/accent-colored-blouse-1.png'
import invertedTriangleAccentColoredBlouse2 from '../assets/images/clothing-variations/inverted-triangle/tops/accent-colored-blouse-2.png'

import invertedTriangleBlackTailoredPants from '../assets/images/clothing-variations/inverted-triangle/bottoms/black-tailored-pants.png'
import invertedTriangleBeigeTailoredPants from '../assets/images/clothing-variations/inverted-triangle/bottoms/beige-tailored-pants.png'
import invertedTriangleBlackFormalSkirt from '../assets/images/clothing-variations/inverted-triangle/bottoms/black-formal-skirt.png'
import invertedTriangleTaupeCasualPants from '../assets/images/clothing-variations/inverted-triangle/bottoms/taupe-casual-pants.png'
import invertedTriangleDenimJeans from '../assets/images/clothing-variations/inverted-triangle/bottoms/denim-jeans.png'
import invertedTriangleCasualSkirt from '../assets/images/clothing-variations/inverted-triangle/bottoms/casual-skirt.png'
import invertedTriangleBeigeShortsImg from '../assets/images/clothing-variations/inverted-triangle/bottoms/beige-shorts.png'

import invertedTriangleBlackDress from '../assets/images/clothing-variations/inverted-triangle/dresses/black-dress.png'
import invertedTriangleCasualDress from '../assets/images/clothing-variations/inverted-triangle/dresses/casual-dress.png'

// Import images for Pear body type
import pearBlackLongSleevedTop from '../assets/images/clothing-variations/pear/tops/black-long-sleeved-top.png'
import pearWhiteLongSleevedTop from '../assets/images/clothing-variations/pear/tops/white-long-sleeved-top.png'
import pearAccentColoredLongSleevedTop from '../assets/images/clothing-variations/pear/tops/accent-colored-long-sleeved-top.png'
import pearBlackSatinTop from '../assets/images/clothing-variations/pear/tops/black-satin-top.png'
import pearWhiteSatinTop from '../assets/images/clothing-variations/pear/tops/white-satin-top.png'
import pearAccentColoredBlouse1 from '../assets/images/clothing-variations/pear/tops/accent-colored-blouse-1.png'
import pearAccentColoredBlouse2 from '../assets/images/clothing-variations/pear/tops/accent-colored-blouse-2.png'

import pearTailoredBlackPants from '../assets/images/clothing-variations/pear/bottoms/tailored-black-pants.png'
import pearTailoredCasualPants from '../assets/images/clothing-variations/pear/bottoms/tailored-casual-pants.png'
import pearFormalSkirt from '../assets/images/clothing-variations/pear/bottoms/formal-skirt.png'
import pearDenimJeans from '../assets/images/clothing-variations/pear/bottoms/denim-jeans.png'
import pearCasualSkirt from '../assets/images/clothing-variations/pear/bottoms/casual-skirt.png'
import pearBeigeShortsImg from '../assets/images/clothing-variations/pear/bottoms/beige-shorts.png'

import pearBlackDress from '../assets/images/clothing-variations/pear/dresses/black-dress.png'
import pearCasualDress from '../assets/images/clothing-variations/pear/dresses/casual-dress.png'

// Import images for Rectangle body type
import rectangleBlackLongSleevedTop from '../assets/images/clothing-variations/rectangle/tops/black-long-sleeved-top.png'
import rectangleWhiteLongSleevedTop from '../assets/images/clothing-variations/rectangle/tops/white-long-sleeved-top.png'
import rectangleAccentColoredLongSleevedTop from '../assets/images/clothing-variations/rectangle/tops/accent-colored-long-sleeved-top.png'
import rectangleBlackSatinTop from '../assets/images/clothing-variations/rectangle/tops/black-satin-top.png'
import rectangleWhiteSatinTop from '../assets/images/clothing-variations/rectangle/tops/white-satin-top.png'
import rectangleAccentColoredBlouse1 from '../assets/images/clothing-variations/rectangle/tops/accent-colored-blouse-1.png'
import rectangleAccentColoredBlouse2 from '../assets/images/clothing-variations/rectangle/tops/accent-colored-blouse-2.png'

import rectangleTailoredBlackPants from '../assets/images/clothing-variations/rectangle/bottoms/tailored-black-pants.png'
import rectangleTailoredBeigePants from '../assets/images/clothing-variations/rectangle/bottoms/tailored-beige-pants.png'
import rectangleBlackFormalSkirt from '../assets/images/clothing-variations/rectangle/bottoms/black-formal-skirt.png'
import rectangleTaupeTailoredPants from '../assets/images/clothing-variations/rectangle/bottoms/taupe-tailored-pants.png'
import rectangleDenimJeans from '../assets/images/clothing-variations/rectangle/bottoms/denim-jeans.png'
import rectangleCasualSkirt from '../assets/images/clothing-variations/rectangle/bottoms/casual-skirt.png'
import rectangleBeigeShortsImg from '../assets/images/clothing-variations/rectangle/bottoms/beige-shorts.png'

import rectangleBlackDress from '../assets/images/clothing-variations/rectangle/dresses/black-dress.png'
import rectangleCasualDress from '../assets/images/clothing-variations/rectangle/dresses/casual-dress.png'

// Import images for layers, bags, and shoes (same for all body types)
import beigeBlazer from '../assets/images/layers/beige-blazer.png'
import blackBlazer from '../assets/images/layers/black-blazer.png'
import blackCardigan from '../assets/images/layers/black-cardigan.png'
import casualJacket from '../assets/images/layers/casual-jacket.png'

import blackClutch from '../assets/images/bags/black-clutch.png'
import blackTote from '../assets/images/bags/black-tote.png'
import brownTote from '../assets/images/bags/brown-tote.png'

import blackBalletFlats from '../assets/images/shoes/black-ballet-flats.png'
import blackPumps from '../assets/images/shoes/black-pumps.png'
import blackStrappyHeels from '../assets/images/shoes/black-strappy-heels.png'
import goldStrappySandals from '../assets/images/shoes/gold-strappy-sandals.png'
import nudeWedges from '../assets/images/shoes/nude-wedges.png'

function Inventory() {
	const [selectedCategory, setSelectedCategory] = useState('Tops')
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [favorites, setFavorites] = useState<Record<string, boolean>>({})
	const navigate = useNavigate()
	const { bodyType } = useBodyType()
	const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

	// Add scroll detection effect
	useEffect(() => {
		const handleScroll = () => {
			let maxVisibility = 0
			let mostVisibleCategory = selectedCategory

			Object.entries(categoryRefs.current).forEach(
				([category, element]) => {
					if (!element) return

					const rect = element.getBoundingClientRect()
					const visibility =
						Math.min(Math.max(0, rect.bottom), window.innerHeight) -
						Math.max(0, rect.top)

					if (visibility > maxVisibility) {
						maxVisibility = visibility
						mostVisibleCategory = category
					}
				}
			)

			if (mostVisibleCategory !== selectedCategory) {
				setSelectedCategory(mostVisibleCategory)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [selectedCategory])

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category)
		categoryRefs.current[category]?.scrollIntoView({ behavior: 'smooth' })
		if (window.innerWidth <= 768) {
			setIsSidebarOpen(false)
		}
	}

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	const categories = ['Tops', 'Bottoms', 'Dresses', 'Layers', 'Bags', 'Shoes']

	const getImagesForCategory = (category: string) => {
		switch (category) {
			case 'Tops':
				switch (bodyType) {
					case 'Apple':
						return [
							{
								id: 1,
								name: 'Black Long Sleeved Top',
								image: appleBlackLongSleevedTop,
							},
							{
								id: 2,
								name: 'White Long Sleeved Top',
								image: appleWhiteLongSleevedTop,
							},
							{
								id: 3,
								name: 'Accent Colored Long Sleeved Top',
								image: appleAccentColoredLongSleevedTop,
							},
							{
								id: 4,
								name: 'Black Satin Top',
								image: appleBlackSatinTop,
							},
							{
								id: 5,
								name: 'White Satin Top',
								image: appleWhiteSatinTop,
							},
							{
								id: 6,
								name: 'Accent Colored Blouse 1',
								image: appleAccentColoredBlouse1,
							},
							{
								id: 7,
								name: 'Accent Colored Blouse 2',
								image: appleAccentColoredBlouse2,
							},
						]
					case 'Hourglass':
						return [
							{
								id: 1,
								name: 'Black Long Sleeved Top',
								image: hourglassBlackLongSleevedTop,
							},
							{
								id: 2,
								name: 'White Long Sleeved Top',
								image: hourglassWhiteLongSleevedTop,
							},
							{
								id: 3,
								name: 'Accent Colored Long Sleeved Top',
								image: hourglassAccentColoredLongSleevedTop,
							},
							{
								id: 4,
								name: 'Black Satin Top',
								image: hourglassBlackSatinTop,
							},
							{
								id: 5,
								name: 'White Satin Top',
								image: hourglassWhiteSatinTop,
							},
							{
								id: 6,
								name: 'Accent Colored Blouse 1',
								image: hourglassAccentColoredBlouse1,
							},
							{
								id: 7,
								name: 'Accent Colored Blouse 2',
								image: hourglassAccentColoredBlouse2,
							},
						]
					case 'Inverted Triangle':
						return [
							{
								id: 1,
								name: 'Black Long Sleeved Top',
								image: invertedTriangleBlackLongSleevedTop,
							},
							{
								id: 2,
								name: 'White Long Sleeved Top',
								image: invertedTriangleWhiteLongSleevedTop,
							},
							{
								id: 3,
								name: 'Accent Colored Long Sleeved Top',
								image: invertedTriangleAccentColoredLongSleevedTop,
							},
							{
								id: 4,
								name: 'Black Satin Top',
								image: invertedTriangleBlackSatinTop,
							},
							{
								id: 5,
								name: 'White Satin Top',
								image: invertedTriangleWhiteSatinTop,
							},
							{
								id: 6,
								name: 'Accent Colored Blouse 1',
								image: invertedTriangleAccentColoredBlouse1,
							},
							{
								id: 7,
								name: 'Accent Colored Blouse 2',
								image: invertedTriangleAccentColoredBlouse2,
							},
						]
					case 'Pear':
						return [
							{
								id: 1,
								name: 'Black Long Sleeved Top',
								image: pearBlackLongSleevedTop,
							},
							{
								id: 2,
								name: 'White Long Sleeved Top',
								image: pearWhiteLongSleevedTop,
							},
							{
								id: 3,
								name: 'Accent Colored Long Sleeved Top',
								image: pearAccentColoredLongSleevedTop,
							},
							{
								id: 4,
								name: 'Black Satin Top',
								image: pearBlackSatinTop,
							},
							{
								id: 5,
								name: 'White Satin Top',
								image: pearWhiteSatinTop,
							},
							{
								id: 6,
								name: 'Accent Colored Blouse 1',
								image: pearAccentColoredBlouse1,
							},
							{
								id: 7,
								name: 'Accent Colored Blouse 2',
								image: pearAccentColoredBlouse2,
							},
						]
					case 'Rectangle':
						return [
							{
								id: 1,
								name: 'Black Long Sleeved Top',
								image: rectangleBlackLongSleevedTop,
							},
							{
								id: 2,
								name: 'White Long Sleeved Top',
								image: rectangleWhiteLongSleevedTop,
							},
							{
								id: 3,
								name: 'Accent Colored Long Sleeved Top',
								image: rectangleAccentColoredLongSleevedTop,
							},
							{
								id: 4,
								name: 'Black Satin Top',
								image: rectangleBlackSatinTop,
							},
							{
								id: 5,
								name: 'White Satin Top',
								image: rectangleWhiteSatinTop,
							},
							{
								id: 6,
								name: 'Accent Colored Blouse 1',
								image: rectangleAccentColoredBlouse1,
							},
							{
								id: 7,
								name: 'Accent Colored Blouse 2',
								image: rectangleAccentColoredBlouse2,
							},
						]
					default:
						return []
				}
			case 'Bottoms':
				switch (bodyType) {
					case 'Apple':
						return [
							{
								id: 1,
								name: 'Tailored Black Pants',
								image: appleTailoredBlackPants,
							},
							{
								id: 2,
								name: 'Tailored Brown Pants',
								image: appleTailoredBrownPants,
							},
							{
								id: 3,
								name: 'Formal Black Skirt',
								image: appleFormalBlackSkirt,
							},
							{
								id: 4,
								name: 'Denim Jeans',
								image: appleDenimJeans,
							},
							{
								id: 5,
								name: 'Casual Skirt',
								image: appleCasualSkirt,
							},
						]
					case 'Hourglass':
						return [
							{
								id: 1,
								name: 'Black Tailored Pants',
								image: hourglassBlackTailoredPants,
							},
							{
								id: 2,
								name: 'Beige Tailored Pants',
								image: hourglassBeigeTailoredPants,
							},
							{
								id: 3,
								name: 'Formal Black Skirt',
								image: hourglassFormalBlackSkirt,
							},
							{
								id: 4,
								name: 'Taupe Casual Pants',
								image: hourglassTaupeCasualPants,
							},
							{
								id: 5,
								name: 'Denim Jeans',
								image: hourglassDenimJeans,
							},
							{
								id: 6,
								name: 'Casual Skirt',
								image: hourglassCasualSkirt,
							},
						]
					case 'Inverted Triangle':
						return [
							{
								id: 1,
								name: 'Black Tailored Pants',
								image: invertedTriangleBlackTailoredPants,
							},
							{
								id: 2,
								name: 'Beige Tailored Pants',
								image: invertedTriangleBeigeTailoredPants,
							},
							{
								id: 3,
								name: 'Black Formal Skirt',
								image: invertedTriangleBlackFormalSkirt,
							},
							{
								id: 4,
								name: 'Taupe Casual Pants',
								image: invertedTriangleTaupeCasualPants,
							},
							{
								id: 5,
								name: 'Denim Jeans',
								image: invertedTriangleDenimJeans,
							},
							{
								id: 6,
								name: 'Casual Skirt',
								image: invertedTriangleCasualSkirt,
							},
							{
								id: 7,
								name: 'Beige Shorts',
								image: invertedTriangleBeigeShortsImg,
							},
						]
					case 'Pear':
						return [
							{
								id: 1,
								name: 'Tailored Black Pants',
								image: pearTailoredBlackPants,
							},
							{
								id: 2,
								name: 'Tailored Casual Pants',
								image: pearTailoredCasualPants,
							},
							{
								id: 3,
								name: 'Formal Skirt',
								image: pearFormalSkirt,
							},
							{
								id: 4,
								name: 'Denim Jeans',
								image: pearDenimJeans,
							},
							{
								id: 5,
								name: 'Casual Skirt',
								image: pearCasualSkirt,
							},
							{
								id: 6,
								name: 'Beige Shorts',
								image: pearBeigeShortsImg,
							},
						]
					case 'Rectangle':
						return [
							{
								id: 1,
								name: 'Tailored Black Pants',
								image: rectangleTailoredBlackPants,
							},
							{
								id: 2,
								name: 'Tailored Beige Pants',
								image: rectangleTailoredBeigePants,
							},
							{
								id: 3,
								name: 'Black Formal Skirt',
								image: rectangleBlackFormalSkirt,
							},
							{
								id: 4,
								name: 'Taupe Tailored Pants',
								image: rectangleTaupeTailoredPants,
							},
							{
								id: 5,
								name: 'Denim Jeans',
								image: rectangleDenimJeans,
							},
							{
								id: 6,
								name: 'Casual Skirt',
								image: rectangleCasualSkirt,
							},
							{
								id: 7,
								name: 'Beige Shorts',
								image: rectangleBeigeShortsImg,
							},
						]
					default:
						return []
				}
			case 'Dresses':
				switch (bodyType) {
					case 'Apple':
						return [
							{
								id: 1,
								name: 'Little Black Dress',
								image: appleLittleBlackDress,
							},
							{
								id: 2,
								name: 'Casual Dress',
								image: appleCasualDress,
							},
						]
					case 'Hourglass':
						return [
							{
								id: 1,
								name: 'Black Dress',
								image: hourglassBlackDress,
							},
							{
								id: 2,
								name: 'Casual Dress',
								image: hourglassCasualDress,
							},
						]
					case 'Inverted Triangle':
						return [
							{
								id: 1,
								name: 'Black Dress',
								image: invertedTriangleBlackDress,
							},
							{
								id: 2,
								name: 'Casual Dress',
								image: invertedTriangleCasualDress,
							},
						]
					case 'Pear':
						return [
							{
								id: 1,
								name: 'Black Dress',
								image: pearBlackDress,
							},
							{
								id: 2,
								name: 'Casual Dress',
								image: pearCasualDress,
							},
						]
					case 'Rectangle':
						return [
							{
								id: 1,
								name: 'Black Dress',
								image: rectangleBlackDress,
							},
							{
								id: 2,
								name: 'Casual Dress',
								image: rectangleCasualDress,
							},
						]
					default:
						return []
				}
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
			case 'Shoes':
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

	const handlePlusClick = () => {
		console.log('im a plus button')
	}

	const handleDelete = (itemId: number) => {
		console.log('Delete item:', itemId)
	}

	const handleEdit = (itemId: number) => {
		console.log('Edit item:', itemId)
	}

	const handleFavorite = (id: string) => {
		setFavorites((prev) => ({
			...prev,
			[id]: !prev[id],
		}))
	}

	const handleInfo = (itemId: number) => {
		console.log('Show info for item:', itemId)
	}

	const handleSettings = (itemId: number) => {
		console.log('Show settings for item:', itemId)
	}

	return (
		<div className='inventory-container'>
			<AppNavbar />
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
					<div className='inventory-sidebar-title'>
						<h2>Categories</h2>
					</div>
					<ul className='inventory-categories'>
						{categories.map((category) => (
							<li
								key={category}
								className={`inventory-category ${
									selectedCategory === category
										? 'active'
										: ''
								}`}
								onClick={() => handleCategoryClick(category)}
							>
								{category}
							</li>
						))}
					</ul>
				</div>
				<div className='inventory-content'>
					{categories.map((category) => (
						<div
							key={category}
							ref={(el) => {
								if (el) {
									categoryRefs.current[category] = el
								}
							}}
							className='category-section'
						>
							<h2 className='inventory-category-title'>
								{category}
							</h2>
							<div className='inventory-grid'>
								{getImagesForCategory(category).map((item) => (
									<div
										key={item.id}
										className='inventory-item'
									>
										{/* Delete icon - top left */}
										<div className='inventory-item-icons top'>
											<FaTrash
												className='inventory-item-icon'
												onClick={() =>
													handleDelete(item.id)
												}
											/>
										</div>

										{/* Edit and Favorite icons - top right */}
										<div className='inventory-item-icons top-right'>
											{favorites[item.id.toString()] ? (
												<FaHeart
													className='inventory-item-icon'
													onClick={() =>
														handleFavorite(
															item.id.toString()
														)
													}
													style={{ color: '#ff4d4d' }}
												/>
											) : (
												<FaRegHeart
													className='inventory-item-icon'
													onClick={() =>
														handleFavorite(
															item.id.toString()
														)
													}
												/>
											)}
											<FaEdit
												className='inventory-item-icon'
												onClick={() =>
													handleEdit(item.id)
												}
											/>
										</div>

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

										{/* Info and Settings icons - bottom right */}
										<div className='inventory-item-icons bottom-right'>
											<FaInfoCircle
												className='inventory-item-icon'
												onClick={() =>
													handleInfo(item.id)
												}
											/>
											<FaCog
												className='inventory-item-icon'
												onClick={() =>
													handleSettings(item.id)
												}
											/>
										</div>
									</div>
								))}
								<div
									className='inventory-item add-item'
									onClick={handlePlusClick}
								>
									<div className='plus-sign'>+</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='button-container'>
				<button
					className='next-button'
					onClick={() => navigate('/generate-outfits')}
				>
					Generate Outfits
				</button>
			</div>
		</div>
	)
}

export default Inventory
