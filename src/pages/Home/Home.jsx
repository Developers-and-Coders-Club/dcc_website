import './Home.css'

import logo from './logo.png'
import lines from './lines.svg'
import underline from './underline.svg'
import pic from './Rectangle1.png'
import pic2 from './Rectangle2.png'
import box from './box.svg'
import dots from './dots.svg'
import { useEffect } from 'react'

export const Home = ({ page, setPage }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        setPage('home')
        document.title = "Home - DCC"
        document.getElementById("navbarNav").classList.remove("show")
    })

    return (
        <div className="home-wrapper">
            <div className="header row justify-content-center">
                <div className='hidden col-lg-10'>
                    <img src={logo} alt='' />
                </div>
                <div className="content col-lg-10">
                    <span>Dream <span style={{ color: "#02A89A" }}>Code</span> Conqurer</span>
                    <span>Developers & Coder's Club</span>
                    <span>/dɪˈvɛləpɜːz ənd ˈkəʊdɜːz klʌb/</span>
                    <span>An initiative of NIT Agartala to bring like-minded  </span>
                    <span>Coders and Developers of exceptional knowledge </span>
                    <span>and expertise together to encourage college students</span>
                    <span> to code and compete with the world.</span>
                    {/* <span>An initiative of NIT Agartala to bring like-minded</span>
                    <span>Coders and Developers together</span> */}
                    <a href='https://discord.gg/58qJhGtTaa' target='_blank'><button className='btn join-btn'>Join on Discord</button></a>
                </div>
            </div>
            <div className="img-content">
                <img src={lines} alt='' />
            </div>
            <div className='underline-header'>
                <span>What Do We Do</span>
                <img src={underline} alt='' />
            </div>
            <div className='row'>
                <div className='col-lg-3 col-md-9'>
                    <span>About creating awareness:</span>
                    <span>We raise awareness of the multitude of opportunities available, such as internships with tech giants like Google and Microsoft, national coding competitions and hackathons hosted by tech companies, and opportunities to collaborate on projects to develop skills. By highlighting these opportunities, we strive to empower individuals to take advantage of them and reach their full potential.</span>
                </div>
                <div className='col-lg-5 col-md-12'>
                    <img src={pic} alt='' />
                    <img className='box' src={box} alt='' />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-5 col-md-12'>
                    <img src={pic2} alt='' />
                    <img className='box' src={dots} alt='' />
                </div>
                <div className='col-lg-3 col-md-9'>
                    <span>About tech community: </span>
                    <span>We provide a tech community that forms a global network, connecting elite developers and coders to share their knowledge and experience, and learn from one another. Our goal is to help you maximize your learning potential and bring you closer to like-minded individuals. So, pursue your dreams and code robustly - we are here to support you every step of the way.</span>
                </div>
            </div>
        </div>
    )
};