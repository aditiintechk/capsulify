import { useNavigate } from 'react-router-dom'
import { useBodyType } from '../context/BodyTypeContext'
import { useState, useEffect, useRef } from 'react'

// Import images for Apple body type tops
import appleAccentColoredBlouse1 from '../assets/images/clothing-variations/apple/tops/accent-colored-blouse-1.png'
import appleAccentColoredBlouse2 from '../assets/images/clothing-variations/apple/tops/accent-colored-blouse-2.png'
import appleAccentColoredLongSleevedTop from '../assets/images/clothing-variations/apple/tops/accent-colored-long-sleeved-top.png'
import appleBlackLongSleevedTop from '../assets/images/clothing-variations/apple/tops/black-long-sleeved-top.png'
import appleBlackSatinTop from '../assets/images/clothing-variations/apple/tops/black-satin-top.png'
import appleWhiteLongSleevedTop from '../assets/images/clothing-variations/apple/tops/white-long-sleeved-top.png'
import appleWhiteSatinTop from '../assets/images/clothing-variations/apple/tops/white-satin-top.png'

// Import images for Hourglass body type tops
import hourglassAccentColoredBlouse1 from '../assets/images/clothing-variations/hourglass/tops/accent-colored-blouse-1.png'
import hourglassAccentColoredBlouse2 from '../assets/images/clothing-variations/hourglass/tops/accent-colored-blouse-2.png'
import hourglassAccentColoredLongSleevedTop from '../assets/images/clothing-variations/hourglass/tops/accent-colored-long-sleeved-top.png'
import hourglassBlackLongSleevedTop from '../assets/images/clothing-variations/hourglass/tops/black-long-sleeved-top.png'
import hourglassBlackSatinTop from '../assets/images/clothing-variations/hourglass/tops/black-satin-top.png'
import hourglassWhiteLongSleevedTop from '../assets/images/clothing-variations/hourglass/tops/white-long-sleeved-top.png'
import hourglassWhiteSatinTop from '../assets/images/clothing-variations/hourglass/tops/white-satin-top.png'

// Import images for Inverted Triangle body type tops
import invertedTriangleAccentColoredBlouse1 from '../assets/images/clothing-variations/inverted-triangle/tops/accent-colored-blouse-1.png'
import invertedTriangleAccentColoredBlouse2 from '../assets/images/clothing-variations/inverted-triangle/tops/accent-colored-blouse-2.png'
import invertedTriangleAccentColoredLongSleevedTop from '../assets/images/clothing-variations/inverted-triangle/tops/accent-colored-long-sleeved-top.png'
import invertedTriangleBlackLongSleevedTop from '../assets/images/clothing-variations/inverted-triangle/tops/black-long-sleeved-top.png'
import invertedTriangleBlackSatinTop from '../assets/images/clothing-variations/inverted-triangle/tops/black-satin-top.png'
import invertedTriangleWhiteLongSleevedTop from '../assets/images/clothing-variations/inverted-triangle/tops/white-long-sleeved-top.png'
import invertedTriangleWhiteSatinTop from '../assets/images/clothing-variations/inverted-triangle/tops/white-satin-top.png'

// Import images for Pear body type tops
import pearAccentColoredBlouse1 from '../assets/images/clothing-variations/pear/tops/accent-colored-blouse-1.png'
import pearAccentColoredBlouse2 from '../assets/images/clothing-variations/pear/tops/accent-colored-blouse-2.png'
import pearAccentColoredLongSleevedTop from '../assets/images/clothing-variations/pear/tops/accent-colored-long-sleeved-top.png'
import pearBlackLongSleevedTop from '../assets/images/clothing-variations/pear/tops/black-long-sleeved-top.png'
import pearBlackSatinTop from '../assets/images/clothing-variations/pear/tops/black-satin-top.png'
import pearWhiteLongSleevedTop from '../assets/images/clothing-variations/pear/tops/white-long-sleeved-top.png'
import pearWhiteSatinTop from '../assets/images/clothing-variations/pear/tops/white-satin-top.png'

// Import images for Rectangle body type tops
import rectangleAccentColoredBlouse1 from '../assets/images/clothing-variations/rectangle/tops/accent-colored-blouse-1.png'
import rectangleAccentColoredBlouse2 from '../assets/images/clothing-variations/rectangle/tops/accent-colored-blouse-2.png'
import rectangleAccentColoredLongSleevedTop from '../assets/images/clothing-variations/rectangle/tops/accent-colored-long-sleeved-top.png'
import rectangleBlackLongSleevedTop from '../assets/images/clothing-variations/rectangle/tops/black-long-sleeved-top.png'
import rectangleBlackSatinTop from '../assets/images/clothing-variations/rectangle/tops/black-satin-top.png'
import rectangleWhiteLongSleevedTop from '../assets/images/clothing-variations/rectangle/tops/white-long-sleeved-top.png'
import rectangleWhiteSatinTop from '../assets/images/clothing-variations/rectangle/tops/white-satin-top.png'

// Apple bottoms
import appleCasualSkirt from '../assets/images/clothing-variations/apple/bottoms/casual-skirt.png'
import appleDenimJeans from '../assets/images/clothing-variations/apple/bottoms/denim-jeans.png'
import appleFormalBlackSkirt from '../assets/images/clothing-variations/apple/bottoms/formal-black-skirt.png'
import appleTailoredBlackPants from '../assets/images/clothing-variations/apple/bottoms/tailored-black-pants.png'
import appleTailoredBrownPants from '../assets/images/clothing-variations/apple/bottoms/tailored-brown-pants.png'

// Apple dresses
import appleCasualDress from '../assets/images/clothing-variations/apple/dresses/casual-dress.png'
import appleLittleBlackDress from '../assets/images/clothing-variations/apple/dresses/little-black-dress.png'

// Hourglass bottoms
import hourglassBeigeTailoredPants from '../assets/images/clothing-variations/hourglass/bottoms/beige-tailored-pants.png'
import hourglassBlackTailoredPants from '../assets/images/clothing-variations/hourglass/bottoms/black-tailored-pants.png'
import hourglassCasualSkirt from '../assets/images/clothing-variations/hourglass/bottoms/casual-skirt.png'
import hourglassDenimJeans from '../assets/images/clothing-variations/hourglass/bottoms/denim-jeans.png'
import hourglassFormalBlackSkirt from '../assets/images/clothing-variations/hourglass/bottoms/formal-black-skirt.png'
import hourglassTaupeCasualPants from '../assets/images/clothing-variations/hourglass/bottoms/taupe-casual-pants.png'

// Hourglass dresses
import hourglassBlackDress from '../assets/images/clothing-variations/hourglass/dresses/black-dress.png'
import hourglassCasualDress from '../assets/images/clothing-variations/hourglass/dresses/casual-dress.png'

// Inverted Triangle bottoms
import invertedTriangleBeigeTailoredPants from '../assets/images/clothing-variations/inverted-triangle/bottoms/beige-tailored-pants.png'
import invertedTriangleBeigeShortsImg from '../assets/images/clothing-variations/inverted-triangle/bottoms/beige-shorts.png'
import invertedTriangleBlackFormalSkirt from '../assets/images/clothing-variations/inverted-triangle/bottoms/black-formal-skirt.png'
import invertedTriangleBlackTailoredPants from '../assets/images/clothing-variations/inverted-triangle/bottoms/black-tailored-pants.png'
import invertedTriangleCasualSkirt from '../assets/images/clothing-variations/inverted-triangle/bottoms/casual-skirt.png'
import invertedTriangleDenimJeans from '../assets/images/clothing-variations/inverted-triangle/bottoms/denim-jeans.png'
import invertedTriangleTaupeCasualPants from '../assets/images/clothing-variations/inverted-triangle/bottoms/taupe-casual-pants.png'

// Inverted Triangle dresses
import invertedTriangleBlackDress from '../assets/images/clothing-variations/inverted-triangle/dresses/black-dress.png'
import invertedTriangleCasualDress from '../assets/images/clothing-variations/inverted-triangle/dresses/casual-dress.png'

// Pear bottoms
import pearBeigeShortsImg from '../assets/images/clothing-variations/pear/bottoms/beige-shorts.png'
import pearCasualSkirt from '../assets/images/clothing-variations/pear/bottoms/casual-skirt.png'
import pearDenimJeans from '../assets/images/clothing-variations/pear/bottoms/denim-jeans.png'
import pearFormalSkirt from '../assets/images/clothing-variations/pear/bottoms/formal-skirt.png'
import pearTailoredBlackPants from '../assets/images/clothing-variations/pear/bottoms/tailored-black-pants.png'
import pearTailoredCasualPants from '../assets/images/clothing-variations/pear/bottoms/tailored-casual-pants.png'

// Pear dresses
import pearBlackDress from '../assets/images/clothing-variations/pear/dresses/black-dress.png'
import pearCasualDress from '../assets/images/clothing-variations/pear/dresses/casual-dress.png'

// Rectangle bottoms
import rectangleBeigeShortsImg from '../assets/images/clothing-variations/rectangle/bottoms/beige-shorts.png'
import rectangleBlackFormalSkirt from '../assets/images/clothing-variations/rectangle/bottoms/black-formal-skirt.png'
import rectangleCasualSkirt from '../assets/images/clothing-variations/rectangle/bottoms/casual-skirt.png'
import rectangleDenimJeans from '../assets/images/clothing-variations/rectangle/bottoms/denim-jeans.png'
import rectangleTailoredBeigePants from '../assets/images/clothing-variations/rectangle/bottoms/tailored-beige-pants.png'
import rectangleTailoredBlackPants from '../assets/images/clothing-variations/rectangle/bottoms/tailored-black-pants.png'
import rectangleTaupeTailoredPants from '../assets/images/clothing-variations/rectangle/bottoms/taupe-tailored-pants.png'

// Rectangle dresses
import rectangleBlackDress from '../assets/images/clothing-variations/rectangle/dresses/black-dress.png'
import rectangleCasualDress from '../assets/images/clothing-variations/rectangle/dresses/casual-dress.png'

// Import images for bags
import blackClutch from '../assets/images/bags/black-clutch.png'
import blackTote from '../assets/images/bags/black-tote.png'
import brownTote from '../assets/images/bags/brown-tote.png'

// Import images for footwear
import blackBalletFlats from '../assets/images/footwear/black-ballet-flats.png'
import blackPumps from '../assets/images/footwear/black-pumps.png'
import blackStrappyHeels from '../assets/images/footwear/black-strappy-heels.png'
import goldStrappySandals from '../assets/images/footwear/gold-strappy-sandals.png'
import nudeWedges from '../assets/images/footwear/nude-wedges.png'

// Import images for layers
import beigeBlazer from '../assets/images/layers/beige-blazer.png'
import blackBlazer from '../assets/images/layers/black-blazer.png'
import blackCardigan from '../assets/images/layers/black-cardigan.png'
import casualJacket from '../assets/images/layers/casual-jacket.png'

type Category = 'Tops' | 'Bottoms' | 'Dresses' | 'Layers' | 'Bags' | 'Footwear'
type BodyType =
	| 'Inverted Triangle'
	| 'Rectangle'
	| 'Apple'
	| 'Pear'
	| 'Hourglass'
type CategoryTips = Record<Category, string>

function getVisibilityPercentage(rect: DOMRect): number {
	return (
		Math.min(Math.max(0, rect.bottom), window.innerHeight) -
		Math.max(0, rect.top)
	)
}

function CategoryPage() {
	const [selectedCategory, setSelectedCategory] = useState<string>('Tops')
	const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
	const navigate = useNavigate()
	const { bodyType } = useBodyType()

	useEffect(() => {
		const handleScroll = () => {
			let maxVisibility = 0
			let mostVisibleCategory = selectedCategory

			Object.entries(categoryRefs.current).forEach(
				([category, element]) => {
					if (!element) return

					const rect = element.getBoundingClientRect()
					const visibility = getVisibilityPercentage(rect)

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

	const handleCategoryClick = (category: Category) => {
		setSelectedCategory(category)
		categoryRefs.current[category]?.scrollIntoView({ behavior: 'smooth' })
	}

	const categories: Category[] = [
		'Tops',
		'Bottoms',
		'Dresses',
		'Layers',
		'Bags',
		'Footwear',
	]

	const stylingTips: Record<BodyType, CategoryTips> = {
		'Inverted Triangle': {
			Tops: 'Soft necklines and sleek sleeves to tone down the upper half.',
			Bottoms: 'Shapes and textures that add volume and balance below.',
			Dresses: 'Flowy or flared cuts that create symmetry and movement.',
			Layers: 'Light, hip-length layers that streamline and soften the frame.',
			Bags: 'Bold accents below to draw attention downward and ground your style.',
			Footwear:
				'Bold accents below to draw attention downward and ground your style.',
		},
		Rectangle: {
			Tops: 'Ruching, necklines, and cuts that add curves and femininity.',
			Bottoms: 'Pieces that cinch the waist or flare slightly for shape.',
			Dresses: 'Curve-creating styles that sculpt a softer silhouette.',
			Layers: 'Shapely jackets and cardigans to contour your figure.',
			Bags: 'Statement pieces that inject personality and visual interest.',
			Footwear:
				'Statement pieces that inject personality and visual interest.',
		},
		Apple: {
			Tops: 'Flowy fits and strategic details that skim the midsection.',
			Bottoms: 'Structured shapes that define your legs and add length.',
			Dresses:
				'Empire and wrap styles that highlight your neckline and legs.',
			Layers: 'Lightweight outerwear that creates gentle shape and elongation.',
			Bags: 'Elevated accessories to refine your look without adding bulk.',
			Footwear:
				'Elevated accessories to refine your look without adding bulk.',
		},
		Pear: {
			Tops: 'Eye-catching details and necklines that bring focus upward.',
			Bottoms:
				'Flattering fits that smooth the hips and elongate your legs.',
			Dresses:
				'A-line and structured styles that glide over the lower half.',
			Layers: 'Shoulder-enhancing toppers to create harmony and shape.',
			Bags: 'Strategic accents that balance your look and lift the eye.',
			Footwear:
				'Strategic accents that balance your look and lift the eye.',
		},
		Hourglass: {
			Tops: 'Necklines and fits that draw attention to your waist while balancing curves.',
			Bottoms:
				'Streamlined shapes that hug your curves and highlight your symmetry.',
			Dresses:
				'Timeless silhouettes that follow your natural shape with elegance.',
			Layers: 'Waist-defining layers that enhance your proportion without bulk.',
			Bags: 'Classic staples and accents to keep your look balanced and polished.',
			Footwear:
				'Classic staples and accents to keep your look balanced and polished.',
		},
	}

	const getBodyTypeImages = (bodyType: string, category: string) => {
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
					{
						id: 1,
						name: 'Black Blazer',
						image: blackBlazer,
					},
					{
						id: 2,
						name: 'Beige Blazer',
						image: beigeBlazer,
					},
					{
						id: 3,
						name: 'Black Cardigan',
						image: blackCardigan,
					},
					{
						id: 4,
						name: 'Casual Jacket',
						image: casualJacket,
					},
				]
			case 'Bags':
				return [
					{
						id: 1,
						name: 'Black Clutch',
						image: blackClutch,
					},
					{
						id: 2,
						name: 'Black Tote',
						image: blackTote,
					},
					{
						id: 3,
						name: 'Brown Tote',
						image: brownTote,
					},
				]
			case 'Footwear':
				return [
					{
						id: 1,
						name: 'Black Ballet Flats',
						image: blackBalletFlats,
					},
					{
						id: 2,
						name: 'Black Pumps',
						image: blackPumps,
					},
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
					{
						id: 5,
						name: 'Nude Wedges',
						image: nudeWedges,
					},
				]
			default:
				return []
		}
	}

	return (
		<div className='category-container'>
			<div className='category-tabs-container'>
				<div className='category-tabs'>
					{categories.map((category) => (
						<button
							key={category}
							className={`category-tab ${
								selectedCategory === category ? 'active' : ''
							}`}
							onClick={() =>
								handleCategoryClick(category as Category)
							}
						>
							{category}
						</button>
					))}
				</div>
			</div>

			<select
				className='category-select-mobile'
				value={selectedCategory}
				onChange={(e) =>
					handleCategoryClick(e.target.value as Category)
				}
			>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>

			<div className='category-section'>
				<div className='category-content'>
					{categories.map((category) => {
						const items = getBodyTypeImages(
							bodyType || 'hourglass',
							category
						)
						const currentStylingTip = bodyType
							? stylingTips[bodyType as BodyType]?.[
									category as Category
							  ]
							: ''

						return (
							<div
								key={category}
								className='category-block'
								ref={(el) => {
									categoryRefs.current[category] = el
								}}
							>
								{currentStylingTip && (
									<div className='styling-tip'>
										<p className='styling-tip-text'>
											<span className='category'>
												{category}
											</span>
											{currentStylingTip}
										</p>
									</div>
								)}

								<div className='category-grid'>
									{items.map((item) => (
										<div
											key={item.id}
											className='category-item'
											data-category={category}
										>
											<div className='image-wrapper'>
												<img
													src={item.image}
													alt={item.name}
													className='category-image'
												/>
											</div>
											<p className='category-name'>
												{item.name}
											</p>
										</div>
									))}
								</div>
							</div>
						)
					})}
				</div>
			</div>

			<div className='button-container'>
				<button
					className='next-button'
					onClick={() => navigate('/outfit-intro')}
				>
					Next
				</button>
			</div>
		</div>
	)
}

export default CategoryPage
