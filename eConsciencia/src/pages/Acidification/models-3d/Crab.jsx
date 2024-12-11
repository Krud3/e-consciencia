import { useAnimations, useGLTF } from "@react-three/drei";
import { useCallback, useRef, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import { useEffect } from "react";
const Crab = (props) => {
    const {nodes, materials, animations} = useGLTF("3d-models-acidification/Turtle.glb");
    const crabRef = useRef();
    const {actions} = useAnimations(animations, crabRef);
    const [currentAction, setCurrentAction]= useState("ArmatureAction");
    console.log(actions);

    useEffect(() => {
        if (actions) {
            Object.keys(actions).forEach((animationName) => {
                console.log("Animación:", animationName);
            });
        } else {
            console.warn("No se encontraron animaciones.");
        }
    }, [actions]);
    
    
    useEffect(() => {
        if (actions["TurtleArmature|TurtleArmature|Idle"]) {
            actions["TurtleArmature|TurtleArmature|Idle"].timeScale = 1.5; // Aumenta la velocidad (1 es velocidad normal, 2 es el doble)
            actions["TurtleArmature|TurtleArmature|Idle"].play();
        } else {
            console.warn("No se encontró la animación 'Idle'.");
        }
        return () => actions["Idle"]?.stop();
    }, [actions]);
    
    return(
        <RigidBody  type="fixed" name="crab">
        <group ref ={crabRef}{...props} dispose={null} >
            <group name="Scene">
                <group name="TurtleArmature" rotation={[0, Math.PI / 6, 0]}>
                    <group name="Turtle">
                        <skinnedMesh
                            name="TurtleMesh"
                            geometry={nodes.TurtleMesh.geometry}
                            material={materials.Turtle}
                            skeleton={nodes.TurtleMesh.skeleton}
                        />
                        <skinnedMesh
                            name="TurtleMesh_1"
                            geometry={nodes.TurtleMesh_1.geometry}
                            material={materials.TurtleShell}
                            skeleton={nodes.TurtleMesh_1.skeleton}
                        />
                    </group>
                    <primitive object={nodes.Bone} />
                    <primitive object={nodes.Bone001} />
                    <primitive object={nodes.Bone009} />
                    <primitive object={nodes.Bone011} />
                </group>
            </group>
        </group>
      </RigidBody>
    );
};

export default Crab;

useGLTF.preload("3d-models-acidification/Turtle.glb");