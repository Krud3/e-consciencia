import { Environment, Cloud } from "@react-three/drei";
const Staging = () => {
    return(
        <>
            <Environment 
                ground = {{
                    height: 5,
                    radius: 120,
                    scale: 60,
                }}
                files={"/acidification_hdri/hdri/puresky_2k.hdr"}
                background={true}
            />
            <Cloud
                seed={4}
                scale={2}
                volume={0.2}
                color="white"
                fade={50}
                segments={80}
                bounds={[10,4,10]}
                position={[-4, 10, 0]}
                opacity={0.8}
                growth={5}
                speed={0.5}
                concentrate={"outside"}
            />
        </>
    );
};

export default Staging;