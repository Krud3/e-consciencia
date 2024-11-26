import React from "react";
import CO2Bottle from "./CO2Bottle";
import { RigidBody } from "@react-three/rapier";
const MultipleCO2Bottles = () => {
    return (
        <>
            {/* Bottle 1 */}
            <RigidBody name="bottle1" gravityScale={0.1}>
             <CO2Bottle position = {[9, 0, -3.5]} scale={[0.2, 0.2, 0.2]}/>
            </RigidBody>

            {/* Bottle 2 */}
            <RigidBody name="bottle2" gravityScale={0.1}>
             <CO2Bottle position = {[8, 0, -0.7]} scale={[0.15, 0.15, 0.15]}/>   
            </RigidBody>
           
            {/* Bottle 3
            <RigidBody>
             <CO2Bottle position = {[4, 3, 1]} scale={[0.25, 0.25, 0.25]}/>  
            </RigidBody>
            */}
        </>
    );
};

export default MultipleCO2Bottles;
