// Footer.jsx
import React from "react";
import "./Footer.css";
//import { FaEnvelope, FaPhone, FaCopyright } from "react-icons/fa"; 
import Logo from "../../assets/SVG/logo-solo.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icon-container">
                <img src={Logo} alt="Logo" className="footer-logo" /> {/* Logo econscience */}
                <div>
                    <p className="flex items-center gap-1">
                      {/* <FaEnvelope /> */}
                        <span>econciencia@gmail.com</span>
                    </p>
                    <p className="flex items-center gap-1">
                        {/* <FaPhone /> */}
                        <span>3012661811</span>
                    </p>
                </div>
            </div>
            <div className="footer-text">
                <p>Esta página fue creada con el propósito de concienciar sobre el problema real del agua en el mundo a través de una interacción no tradicional.</p>
            </div>
            <div className="footer-icons">
                 {/*<FaCopyright />*/}
                <span>Copyright inc.</span>
            </div>
        </footer>
    );
};

export default Footer;
