import '../App.css'
import logo from '/logo.png'

function Navbar() {

    return (
        <>
            <nav>
                <div className="container">
                    <img src={logo} alt="" srcSet="" height="30" />
                    <a href="#about-section">ABOUT ME</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar