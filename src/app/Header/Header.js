import './Header.css';

export const Header = () => {
    return <div className='container-fluid position-fixed ' style={{ zIndex: 1050 }}  > {/*zIndex:1050 solve overlaping means any content not hidden navbar */}
        <nav className="navbar navbar-expand-md fixed-top bg-body-tertiary border border-bottom-6 mb-5" data-bs-theme='light' style={{ backgroudColor: ' #e3f2fd ' }}>
            <h3 className='ms-5' >Tech-<span className='text-primary' >web</span></h3>
            {/* Hamburger Button */}
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
                aria-controls="mainNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* collapsible menu */}
            <div className='collapse navbar-collapse' id='mainNavbar' >
            <ul className="navbar-nav  ms-auto me-5 mb-2 mb-md-0 text-center">
                <li className='nav-item' >
                    <a className='nav-link' href='#home'>Home</a>
                </li>
                <li className='nav-item' >
                    <a className='nav-link' href='#about'>About</a>
                </li>
                <li className='nav-item' >
                    <a className='nav-link' href='#services'>Services</a>
                </li>
                <li className='nav-item' >
                    <a className='nav-link' href='#team'>Team</a>
                </li>
                <li className='nav-item' >
                    <a className='nav-link' href='#contact'>Contact</a>
                </li>
            </ul>
            </div>
        </nav>
    </div>

}
