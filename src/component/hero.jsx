import '../App.css'
import saya from '/saya.png'
import instagram from '/instagram.svg'
import twitter from '/twitter.svg'
import mail from '/mail.svg'
import whatsapp from '/whatsapp.svg'

function Hero() {

    return (
        <>
            <main className="hero">
                <div className="container">
                    <img src={saya} alt="" height="500" />
                </div>
                <div className="caption">
                    <h1>HELLO;</h1>
                    <h2>
                        Saya,
                        <span>MOCHAMMAD</span>
                        <span> YUSUF PRATAMA</span>
                    </h2>
                    <p>Saya merupakan Front-End Enjoyer</p>
                    <div className="btn-contact">
                        <a target='_blank' href="https://www.instagram.com/portomochammadyusuf/" rel="noreferrer">
                            <img src={instagram} alt="" height="20" /></a>
                        <a target='_blank' href="https://twitter.com/mochamm93375903" rel="noreferrer">
                            <img src={twitter} alt="" height="20" /></a>
                        <a target='_blank' href="mailto:mochammadyusufpratama6@gmail.com" rel="noreferrer">
                            <img src={mail} alt="" height="20" /></a>
                        <a target='_blank' href="https://wa.me/6282233139559" rel="noreferrer">
                            <img src={whatsapp} alt="" height="20" /></a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Hero