import { Center, Text3D, useCursor } from "@react-three/drei";
import { useState } from 'react';

const Solution = ({ tittle, onClick }) => {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered, 'pointer');

  return (
    <Center position={[0.7, 7, 0]}>
      <group
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Text3D
          font={"/fonts/Mogra_Regular.json"}
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.01}
          height={0.2}
          lineHeight={0.75}
          letterSpacing={0.05}
          size={0.5}
        >
          {tittle}
          <meshNormalMaterial />
        </Text3D>
      </group>
    </Center>
  );
};

export default Solution;
