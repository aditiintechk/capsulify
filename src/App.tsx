import './App.css'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from 'react-router-dom'
import BodyType from './components/BodyType'
import BodyTypeResult from './components/BodyTypeResult'
import CategoryPage from './components/CategoryPage'
import OutfitIntro from './components/OutfitIntro'
import Outfits from './components/Outfits'
import Inventory from './components/Inventory'
import GenerateOutfits from './components/GenerateOutfits'
import Navigation from './components/Navigation'
import { BodyTypeProvider } from './context/BodyTypeContext'

function Home() {
	const navigate = useNavigate()

	return (
		<div className='home-container'>
			<div className='home-content'>
				<h1 className='home-title'>
					Style that attracts what <span>you</span> desire.
				</h1>
				<p className='home-subtitle'>
					We'll help you curate a capsule wardrobe designed for your
					shape - and the next era of your life!
				</p>
				<div className='button-container'>
					<button
						onClick={() => navigate('/body-type')}
						className='next-button'
					>
						Get Me Styled!
					</button>
				</div>
			</div>
		</div>
	)
}

function App() {
	return (
		<BodyTypeProvider>
			<Router>
				<div className='app-container'>
					<Navigation />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/body-type' element={<BodyType />} />
						<Route
							path='/body-type-result'
							element={<BodyTypeResult />}
						/>
						<Route
							path='/tops'
							element={
								<CategoryPage
									title='Tops'
									nextRoute='/bottoms'
								/>
							}
						/>
						<Route
							path='/bottoms'
							element={
								<CategoryPage
									title='Bottoms'
									nextRoute='/dresses'
								/>
							}
						/>
						<Route
							path='/dresses'
							element={
								<CategoryPage
									title='Dresses'
									nextRoute='/layers'
								/>
							}
						/>
						<Route
							path='/layers'
							element={
								<CategoryPage
									title='Layers'
									nextRoute='/bags'
								/>
							}
						/>
						<Route
							path='/bags'
							element={
								<CategoryPage
									title='Bags'
									nextRoute='/footwear'
								/>
							}
						/>
						<Route
							path='/footwear'
							element={
								<CategoryPage
									title='Footwear'
									nextRoute='/outfit-intro'
								/>
							}
						/>
						<Route path='/outfit-intro' element={<OutfitIntro />} />
						<Route path='/outfits' element={<Outfits />} />
						<Route path='/inventory' element={<Inventory />} />
						<Route
							path='/generate-outfits'
							element={<GenerateOutfits />}
						/>
					</Routes>
				</div>
			</Router>
		</BodyTypeProvider>
	)
}

export default App
