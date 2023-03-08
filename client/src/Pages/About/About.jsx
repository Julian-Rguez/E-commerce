import React from "react";
import Logo from "../../assets/images/logo.png"
import NavBar from "../../components/Nav/NavBar";
import "./About.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="background">
        <div className="text">
          <h1>About us:</h1>
          <h5>The founders of all these fast food chains are [part of] what we
            would call the quintessential American Dream. They were, by and
            large, from humble beginnings. They often grew up poor, didnt
            achieve success until late in their life, and had all these
            setbacks. Colonel Sanders is a key example of somebody who struggled
            his entire life and then struck it rich with a chicken recipe he
            perfected while working at a gas station in southeastern Kentucky.
            There are all of these really impressive stories that I think, in
            another era, we would hold up as the ideal of American success. And
            then theres the food. The food is terrible, and its delicious, and
            its completely ridiculous and we love it. I mean, not everybody
            loves it, but it has this element of hucksterism to it, these insane
            ideas that get made. Its a very American idea to just have the
            biggest, craziest burger or the wildest things. There are all of
            these really impressive stories that I think, in another era, we
            would hold up as the ideal of American success. And then theres the
            food. The food is terrible, and its delicious, and its completely
            ridiculous and we love it.They often grew up poor, didnt achieve
            success until late in their life, and had all these setbacks.
            Colonel Sanders is a key example of somebody who struggled his
            entire life and then struck it rich with a chicken recipe he
            perfected while working at a gas station in southeastern Kentucky.</h5>
        </div>
        <div className="boxing">
          <h1>Our Team</h1>
          <div className="img-devs">
            <div className="devs">
              <img src="https://i.ibb.co/nfDDBNz/TPRS7-H4-PN-U03-NA4-SG9-C7-c1fea3c8ebcb-512.png"></img>
              <h3>Adrián Suárez Scarnato</h3>
              <p className="titulo">Full Stack Developer</p>
              <a className='Github' href='https://github.com/zevek' target="_blank"><FaGithub /></a>
              <a className='Linkedin' href='https://www.linkedin.com/in/adrianrsuarez/' target="_blank"><FaLinkedinIn /></a>
            </div>
            <div className="devs">
              <img src="https://i.ibb.co/dG2zP9K/TPRS7-H4-PN-U02-UM629-R24-debb8ebbae9c-512.jpg"></img>
              <h3>Julian Rodriguez</h3>
              <p className="titulo">Full Stack Developer</p>
              <a className='Github' href='https://github.com/Julian-Rguez' target="_blank"><FaGithub /></a>
              <a className='Linkedin' href='#' /*target="_blank"*/><FaLinkedinIn /></a>
            </div>
            <div className="devs">
              <img src="https://i.ibb.co/kmV5DW9/Leydi.jpg"></img>
              <h3>Leydi Pretell</h3>
              <p className="titulo">Full Stack Developer</p>
              <a className='Github' href='https://github.com/SaurusSaurusSaurus' target="_blank"><FaGithub /></a>
              <a className='Linkedin' href='https://www.linkedin.com/in/leydi-pretell-99a9a2256/' target="_blank"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="img-devs2">
            <div className="devs">
              <img src="https://i.ibb.co/2tRDjmz/TPRS7-H4-PN-U03-UB8-K6-ECC-c8297bea315d-512.jpg"></img>
              <h3>Will Sierra</h3>
              <p className="titulo">Full Stack Developer</p>
              <a className='Github' href='https://github.com/willsierra24' target="_blank"><FaGithub /></a>
              <a className='Linkedin' href='https://www.linkedin.com/in/will-sierra-dev/' target="_blank"><FaLinkedinIn /></a>
            </div>
            <div className="devs">
              <img src="https://i.ibb.co/101Q5Sh/TPRS7-H4-PN-U0378-FX2-Z5-M-b7ef42492a1c-512.jpg"></img>
              <h3>Eduardo Gómez</h3>
              <p className="titulo">Full Stack Developer</p>
              <a className='Github' href='https://github.com/Eduman8' target="_blank"><FaGithub /></a>
              <a className='Linkedin' href='https://www.linkedin.com/in/eduardo-dami%C3%A1n-g%C3%B3mez-89a432217/' target="_blank"><FaLinkedinIn /></a>
            </div>
            <div className="devs">
              <img src="https://i.ibb.co/4Mbn2Wk/Santiago.jpg"></img>
              <h3>Santiago Espinosa</h3>
              <p className="titulo">Full Stack Developer</p>
              <a className='Github' href='https://github.com/Santiago666espinosa' target="_blank"><FaGithub /></a>
              <a className='Linkedin' href='#' /*target="_blank"*/><FaLinkedinIn /></a>
            </div>
            <div className="devs">
              <img src="https://i.ibb.co/gV8JGsw/Juanca.jpg"></img>
              <h3>Juan Camilo Morales</h3>
              <p className="titulo">Full Stack Developer</p>
              <a className='Github' href='https://github.com/juancamorales' target="_blank"><FaGithub /></a>
              <a className='Linkedin' href='#' /*target="_blank"*/><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default About;