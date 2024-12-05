import { Center, Html, Text, Text3D } from "@react-three/drei";

import "./Estilos.css";

const Conscientization = ({height, title, text, color}) => {

 
    return (
        <>
        <div key={`${title}-${text}`} style={{backgroundColor: color}} className="fade-in">
            <h1 className="text-tittle">{title}</h1>
            <p className="text-info">{text}</p>
        </div>

        </>

    );
};

export default Conscientization;