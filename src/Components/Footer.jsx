import './footer.css';
import logo from './images/Rectangle 10.png';
import insta from './images/instagram (1) 1.png';
import twitter from './images/twitter 1.png';
import linkedin from "./images/linkedin 1.png";
import discord from "./images/linkedin 2.png";

export const Footer = () => {
  return (
    <body>
      <div class="full">
        <div class="firstContainer">
          <div class="logo">
            <img src={logo} alt="logo" width="150" />
          </div>
          <div class="events">
            <p>
              <a href="">Events</a>
            </p>
            <p>
              <a href="">Contact Us</a>
            </p>
            <p>
              <a href="">About Us</a>
            </p>
          </div>
        </div>
        <div class="secondContainer">
          <div class="location">
            <h3>DEVELOPERS AND CODERS CLUB NITA</h3>
            <p>
              National Institute of Technology, Agartala,
              <br />
              Jirania, Tripura - 799046
            </p>
          </div>
          <div class="social">
            <h3>SOCIAL</h3>
            <div class="imgContainer">
              <a href="">
                <img src={insta} alt="" />
              </a>
              <a href="">
                <img src={twitter} alt="" />
              </a>
              <a href="">
                <img src={linkedin} alt="" />
              </a>
              <a href="">
                <img src={discord} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
