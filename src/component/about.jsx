import '../App.css'
import aboutphoto from '/pexels-anna-shvets.jpg'

function About() {

    return (
        <>
            <main className="about-section" id="about-section">
                <div className="caption">
                    <h1>ABOUT ME</h1>
                    <p>Saat ini, saya tengah menempuh tahun kedua di Universitas Pembangunan Nasional
                        “Veteran” Jawa Timur. Saya memiliki keahlian dan minat dalam Web Development, UI/UX Design, dan mahir
                        dalam mengoperasikan Microsoft Office, Figma, dan Adobe Illustrator. Saya adalah orang yang dapat
                        diandalkan dan bertanggungjawab terhadap tugas yang diberikan. Saya juga dapat beradaptasi dengan baik
                        dan memiliki semangat belajar terhadap hal baru dalam lingkup kemajuan teknologi.
                    </p>
                    <small><i>Photo by : Anna Shvets From Pexels.com</i></small>
                </div>
                <figure>
                    <img src={aboutphoto} alt="" height="500" />
                </figure>
            </main>
        </>
    )
}

export default About