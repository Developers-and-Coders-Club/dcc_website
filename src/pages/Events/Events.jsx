import { useEffect } from 'react';
import './Events.css'


import underline from './underline.svg'

export const Events = ({ page, setPage }) => {

    useEffect(() => {
        document.title = "Events - DCC"
        window.scrollTo(0, 0);
        setPage('events')
        document.getElementById("navbarNav").classList.remove("show")
    })



    return (
        <div className='events-wrapper'>
            <div className='underline-header'>
                <span>Events</span>
                <img src={underline} alt='' />
            </div>
            <div class="card">
                <img
                    class="eventImg hidden"
                    src='https://firebasestorage.googleapis.com/v0/b/dcc-nita.appspot.com/o/2.png?alt=media&token=3ab8069b-e0b3-4e23-b1b0-cae7dd8602d0'
                    alt="event img"
                />
                <img
                    class='eventImg eventImgAlt'
                    src='https://firebasestorage.googleapis.com/v0/b/dcc-nita.appspot.com/o/poster1.png?alt=media&token=17fc460d-7945-47bf-888b-9aff12ad54ee'
                    alt=''
                />
                <div class="text-content">
                    <div class="text-container">
                        <h4 class="heading">Hack the Future: HACK-NITA</h4>
                        <p>


                            A statewide hackathon coming to Aayam 8.0, and it's sure to be a smashing success! Teams from all corners of the state will come together to collaborate and create groundbreaking projects. Participants will have the chance to demonstrate their abilities, network with peers, and make invaluable connections.

                        </p>
                    </div>
                    <a href="https://hacknita.dccnita.tech/" class="btn">Know more</a>
                </div>
            </div>
            <div class="card card-2">
                <div class="text-content">
                    <div class="text-container">
                        <h2 class="heading">The Game of Codes</h2>
                        <p>


                            The Game of Codes is an open-for-all coding contest where all participants are invited to code solutions for a set of problems in any programming language of their choice. It is an excellent opportunity for beginners to gain valuable coding experience and compete for prizes. This is a great chance to hone your coding skills and potentially take home a reward!

                        </p>
                    </div>
                    <a href="" class="btn">Know more</a>
                </div>
                <img
                    class="eventImg hidden"
                    src='https://firebasestorage.googleapis.com/v0/b/dcc-nita.appspot.com/o/1.png?alt=media&token=04a2c35c-9f13-470d-af25-f45696c9f43d'
                    alt="event img"
                />
                <img
                    class='eventImg eventImgAlt'
                    src='https://firebasestorage.googleapis.com/v0/b/dcc-nita.appspot.com/o/poster2.png?alt=media&token=f556ab17-2c46-4299-88a3-e52f845f9df0'
                    alt=''
                />
            </div>
            <div class="card">
                <img
                    class="eventImg"
                    src="https://source.unsplash.com/random/640x480/?wallpaper,landscape"
                    alt="event img"
                />
                <div class="text-content">
                    <div class="text-container">
                        <h2 class="heading">Capture The Flag (CTF)</h2>
                        <p>

                            Capture the Flag (CTF) is a two-day event packed with stimulating puzzles and riddles to solve and enjoy as you progress through the game. It will be an exhilarating experience to explore and demistify various challenges with your skills and ingenuity, ultimately culminating in victory.
                        </p>
                    </div>
                    <a href="#" class="btn">Know more</a>
                </div>
            </div>
        </div>
    )
};