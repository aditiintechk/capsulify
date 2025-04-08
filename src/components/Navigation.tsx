import logo from '../assets/images/logo/logo-with-text.svg'

function Navigation() {
	return (
		<nav className='navigation-bar'>
			<div className='navigation-content'>
				<img src={logo} alt='Capsulify Logo' className='logo' />
			</div>
		</nav>
	)
}

export default Navigation
