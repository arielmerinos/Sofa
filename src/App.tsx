import { Sofa } from "./compontents/Sofa";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LinearFilter } from "three";
import { Fire } from "./compontents/Fire";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {
    const lightRef = useRef(null);
    const sofaRef = useRef(null);
    useGSAP(() => {
        gsap.to(lightRef.current.position, {
            x: 300,
            duration: 20,
            ease: "power1.inOut",
        });
    });

    useGSAP(() => {
        gsap.to(sofaRef.current.rotation, {
            y: 1,
            duration: 2,
            ease: "power1.inOut",
        });
        console.log(sofaRef.current);
    });

    return (
        <>
            <Sofa scale={[2, 2, 2]} ref={sofaRef} />

            <directionalLight ref={lightRef} intensity={3.5} />
        </>
    );
}

export default App;
