import React, { useContext } from 'react';
import "./Footer.css";
import Wave from "../../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import { ThemeContext } from '../../Context';

const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
    <div className="footer">
        <img src={Wave} alt="img" style={{width: "100%"}} />
        <div className="f-content">
            <span style={ darkMode ? {color: '#242D49'}: {color: "white"}}>websachin111@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size="3rem" style={ darkMode ? {fill: '#242D49'}: {fill: "white"}} />
                <Facebook color='white' size="3rem" style={ darkMode ? {fill: '#242D49'}: {fill: "white"}} />
                <Github color='white' size="3rem" style={ darkMode ? {fill: '#242D49'}: {fill: "white"}} />
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer