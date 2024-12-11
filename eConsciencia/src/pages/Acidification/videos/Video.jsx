import { useVideoTexture } from "@react-three/drei";
import { PlaneGeometry } from "three";

const Video = (props)=> {
    const texture = useVideoTexture("public/videos/sick_corals_video.mp4", {
        muted: true, 
        loop: true,
        start: true
    });
    return (
        <mesh 
            {...props}
            rotation={[0, Math.PI/2, 0]} //90
            
        >
            <planeGeometry args={[2,1]}/>
            <meshBasicMaterial map={texture} toneMapped={false}/>
        </mesh>
    );
};

export default Video;