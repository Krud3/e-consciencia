// Footer.jsx
import React from "react";
import "./Footer.css";
//import { FaEnvelope, FaPhone, FaCopyright } from "react-icons/fa"; 
import Logo from "../../assets/SVG/logo-solo.svg";
import Univalle from "../../assets/SVG/Univalle.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icon-container">
                <img src={Logo} alt="Logo" className="footer-logo" /> {/* Logo econscience */}
                <div>
                    <p className="flex items-center gap-1">
                      {/* <FaEnvelope /> */}
                        <span> econsciencia</span>
                    </p>
                </div>
            </div>
            <div className="footer-text">
                <p>Esta página fue creada por: </p> 
                <p>Maria Alejandra Moya Carvajal-2178495,</p>
                <p> Juan Sebastián Molina Cuéllar-202224491,</p>
                <p> Andrés Camilo Henao Hidalgo-202227887</p>
            </div>
            <div className="footer-icons">
                 {/*<FaCopyright />*/}
                <img src={Univalle} alt="Logo" className="footer-logo" />
                
            </div>
        </footer>
    );
};

export default Footer;
