import { Center, Html, Text, Text3D } from "@react-three/drei";

import "./Estilos.css";

const Conscientization = ({height, title, text}) => {

 
    return (
        <>
        <div key={`${title}-${text}`} className="fade-in">
            <h1 className="text-tittle">{title}</h1>
            <p className="text-info">{text}</p>
        </div>

        </>

    );
};

export default Conscientization;