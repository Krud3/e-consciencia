import { Center, Html, Text, Text3D } from "@react-three/drei";

const Bienvenida = () => {
    return (
        <>
        <Text
        position={[1, 30, 0]}
        color={"blue"}
        anchorX={"center"}
        anchorY={"bottom"}
        center
        font="/fonts/Mogra-Regular.ttf"
        fontSize={2}
        >
        {" "}
        Welcome to the World of Water Contamination!
        {" "}
        </Text>
        
        <Text
        position={[1, 27, 0]}
        color={"blue"}
        anchorX={"center"}
        anchorY={"bottom"}
        center
        font="/fonts/Mogra-Regular.ttf"
        // fontSize={2}
        >
        Embark on an interactive journey to understand the pressing issue of water contamination, {"\n"}its causes, and its profound effects on our planet.
        </Text>
        </>

    );
};

export default Bienvenida;