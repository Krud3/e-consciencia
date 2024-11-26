import { useGLTF } from "@react-three/drei";

const CO2Bottle = (props) => {
    const {nodes, materials} = useGLTF("3d-models-acidification/co2-bottle.gltf");
    
    return(
        <group 
            {...props} 
            dispose={null}
        >
        <group>
          <group name="CO2_Can" rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0.4, 0.4, 0.156]}>
            <mesh name="Bolt001" geometry={nodes.Bolt001.geometry} material={materials.Material} />
            <mesh
              name="Bolt001_1"
              geometry={nodes.Bolt001_1.geometry}
              material={materials['Material.001']}
            />
          </group>
        </group>
      </group>
    );
  };
  
export default CO2Bottle;

useGLTF.preload("3d-models-acidification/co2-bottle.gltf");