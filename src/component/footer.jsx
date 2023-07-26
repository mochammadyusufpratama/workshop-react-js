import '../App.css'
import logopers from '/logo-pers.jpg'
import instagram from '/instagram.svg'
import twitter from '/twitter.svg'
import mail from '/mail.svg'
import whatsapp from '/whatsapp.svg'

function Footer() {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="contact">
                        <h1>CONTACT</h1>
                        <ul>
                            <li>
                                <a target='_blank' href="https://www.instagram.com/portomochammadyusuf/" rel="noreferrer">
                                    <img src={instagram} alt="" height="20" width="20" />
                                    <p>portomochammadyusuf</p>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href="https://twitter.com/mochamm93375903" rel="noreferrer">
                                    <img src={twitter} alt="" height="20" width="20" />
                                    <p>mochammadyusuf</p>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href="mailto:mochammadyusufpratama6@gmail.com" rel="noreferrer">
                                    <img src={mail} alt="" height="20" width="20" />
                                    <p>mochammadyusufpratama6@gmail.com</p>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href="https://wa.me/6282233139559" rel="noreferrer">
                                    <img src={whatsapp} alt="" height="20" width="20" />
                                    <p>+62 822 3313 9559</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img src={logopers} alt="" height="350" className="logo-pers" />
                </div>
                <div className="copyright">
                    Copyright by YP Design
                </div>
            </footer>
        </>
    )
}

export default Footer