import { Center, Html, Text, Text3D } from "@react-three/drei";

import "./Estilos.css";

const Conscientization = ({height, title, text}) => {

 
    return (
        <>
        <Html   
        center
        style={{
            position: "relative",
            top: `${height -(height/2)-300}px`,
            }}    
        >
        <h1 className="text-tittle">
        {title}</h1>
        <p className="text-info">
        {text}</p>

        </Html>
        </>

    );
};

export default Conscientization;