import {EffectComposer} from "@react-three/postprocessing";
import { Autofocus } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Vignette } from "@react-three/postprocessing";
import { useRef } from "react";

const PostProcessing = () => {
    const lightRef = useRef();
    return (
        <EffectComposer>
            
            <Vignette
                offset={0.5}
                darkness={0.5}
                eskil={false}
                blendFunction={BlendFunction.NORMAL}
            />
            <Autofocus focalLength ={0.01} focusSpeed={0.05} mouse />
        </EffectComposer>
    );
};

export default PostProcessing;