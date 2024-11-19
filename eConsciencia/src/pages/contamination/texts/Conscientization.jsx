import { Center, Html, Text, Text3D } from "@react-three/drei";

import "./Estilos.css";

const Conscientization = ({height, title, text}) => {

 
    return (
        <>
        <Html   
        center
        style={{
            position: "absolute",
            top: `${height -(height/2)-300}px`,
            }}    
        >
        <div key={`${title}-${text}`} className="fade-in">
            <h1 className="text-tittle">{title}</h1>
            <p className="text-info">{text}</p>
        </div>

        </Html>
        </>

    );
};

export default Conscientization;