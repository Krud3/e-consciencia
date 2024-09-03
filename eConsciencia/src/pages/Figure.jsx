
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Figure = ({ height = 1, distance = 0, direction = 1, speed = 1, amplitude = 1, frequency = 1, boundary = 5 }) => {
    const boxRef = useRef();
    const directionRef = useRef(direction);
    
    useFrame((state, delta)=>{
        const time = state.clock.getElapsedTime();
        boxRef.current.position.x += directionRef.current * speed * delta;
  
        boxRef.current.rotation.x += 1 * delta;

        if (Math.abs(boxRef.current.position.x) > boundary) {
            directionRef.current = -directionRef.current;
          }
        boxRef.current.position.y = height + amplitude * Math.cos(time * frequency);
    
    });
    console.log(boxRef);

    return (
      
        <mesh
        ref = {boxRef}
        position={[0,1,0]}
        rotation={[0, Math.PI*0.25, 0]}
        scale = {1.5}>
            <boxGeometry args = {[1, 1, 1]}/>
            <meshPhysicalMaterial color = {"lightblue"}/>
        </mesh>
    );
};

export default Figure;