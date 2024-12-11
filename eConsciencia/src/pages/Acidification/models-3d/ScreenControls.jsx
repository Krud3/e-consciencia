import React from "react";
import "./ScreenControls.css"; // Archivo CSS opcional para estilos específicos

import React from "react";
import { Canvas } from "@react-three/fiber";
import ScreenControls from "./ScreenControls";


const ScreenControls = ({ onMove }) => {
    return (
        <div className="screen-controls">
            <button className="arrow up" onClick={() => onMove("up")}>
                ↑
            </button>
            <div className="horizontal-buttons">
                <button className="arrow left" onClick={() => onMove("left")}>
                    ←
                </button>
                <button className="arrow right" onClick={() => onMove("right")}>
                    →
                </button>
            </div>
            <button className="arrow down" onClick={() => onMove("down")}>
                ↓
            </button>
        </div>
    );
};

export default ScreenControls;
