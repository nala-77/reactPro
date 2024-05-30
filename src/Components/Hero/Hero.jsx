import "./Hero.css";
import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
export default function Hero() {
    const [typeEffect] = useTypewriter({
        words: ['Hey !! Mario still here, But don’t forget that'],
        loop: {},
        typeSpeed: 70,
        deleteSpeed: 40
    })
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h2>{typeEffect}</h2>
          <div className="flex desc">
            <p>
              At focal X agency, we are working to build somthing different.
              Here you’ll have a group of creative people who specialize in:
              Branding, Digital Marketing, Web/App Development, Ui/Ux Content
              creation, Graphic design, Social media and More...
            </p>
            <p>
              So you can take a tour in our website, OR just{" "}
              <b>Press Start :)</b>
            </p>
          </div>
        </div>
        <div className="hero-bottom flex">
          <div className="hero-icons">
            <a href="https://www.facebook.com/focal.x.agency/">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.behance.net/focal-x-agency">
              <i className="fa-brands fa-behance"></i>
            </a>
            <a href="https://www.linkedin.com/company/focal-x-agency">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://x.com/focal_x_agency">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
          <p>&copy; 2021 - 2022 focal X agency All Right Reserved</p>
        </div>
        <div className="right-img">
            <img src="./../../../public/Images/pattren.png" alt="pattern" />
        </div>
        <div className="mario-img">
            <img src="./../../../public/Images/gameBoy-min.png" alt="gameboy" />
        <div className="press-start">
            <img src="./../../../public/Images/pressStart.svg" alt="press-start" />
            <a className="start" target="_blank" href="http://focal-x.com/mario">Start</a>
        </div>
        </div>
      </div>  {/*end of hero tag*/}
    </>
  );
}
