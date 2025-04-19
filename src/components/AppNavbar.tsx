import logo from '../assets/images/logo/logo.svg'
import { useNavigate } from 'react-router-dom'

function AppNavbar() {
	const navigate = useNavigate()

	return (
		<nav className='inventory-navigation-bar'>
			<div className='inventory-navigation-content'>
				<div className='inventory-logo-container'>
					<img src={logo} alt='Capsulify Logo' className='app-logo' />
					<h1 className='app-logo-text'>CAPSULIFY</h1>
				</div>
				<div className='inventory-profile-button'>
					<button onClick={() => navigate('/profile')}>
						Profile
					</button>
				</div>
			</div>
		</nav>
	)
}

export default AppNavbar
