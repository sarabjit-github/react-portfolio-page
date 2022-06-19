import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png";
import { ThemeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // const transition = {duration: 2, type: "spring"};

  return (
    <>
      <div className="works">
        <div className="awesome">
          <span style={ darkMode ? {color: 'white'}: {color: "#242D49"}}>Works for All these</span>
          <span>Brands & clients</span>
          <span>
            Lorem ipsum is simpley dummy text of printing Lorem
            <br />
            ispum is simply dummy text of printing
            <br />
            ispum is simply dummy text of printing text of printing
            <br />
            ispum is simply dummy text of printing
          </span>
          <button className="button s-button">Hire me</button>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        {/* right side */}
        <div className="w-right">
            <motion.div
            initial={{rotate:45}}
            whileInView={{rotate:0}}
            viewport={{margin: "-40px"}}
            transition={{duration:3, type: 'spring'}}
            className="w-mainCircle" style={darkMode ? {background: "#3e3e3e"}:{background: "white"}}>
                <div className="w-secCircle" style={darkMode ? {background: "#3e3e3e", borderColor:"#313131"}:{background: "white", borderColor:"#f1f1f1"}}>
                    <img src={Upwork} alt="image" />
                </div>
                <div className="w-secCircle" style={darkMode ? {background: "#3e3e3e", borderColor:"#313131"}:{background: "white", borderColor:"#f1f1f1"}}>
                    <img src={Fiverr} alt="image" />
                </div>
                <div className="w-secCircle" style={darkMode ? {background: "#3e3e3e", borderColor:"#313131"}:{background: "white", borderColor:"#f1f1f1"}}>
                    <img src={Shopify} alt="image" />
                </div>
                <div className="w-secCircle" style={darkMode ? {background: "#3e3e3e", borderColor:"#313131"}:{background: "white", borderColor:"#f1f1f1"}}>
                    <img src={Amazon} alt="image" />
                </div>
                <div className="w-secCircle" style={darkMode ? {background: "#3e3e3e", borderColor:"#313131"}:{background: "white", borderColor:"#f1f1f1"}}>
                    <img src={Facebook} alt="image" />
                </div>
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </>
  );
};

export default Works;
