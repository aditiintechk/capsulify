import logo from '../assets/images/logo/logo.svg'

function Navigation() {
	return (
		<nav className='navigation-bar'>
			<div className='navigation-content'>
				<img src={logo} alt='Capsulify Logo' className='logo' />
				<h1 className='logo-text'>CAPSULIFY</h1>
			</div>
		</nav>
	)
}

export default Navigation
