import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <h1 className="text-white text-4xl absolute top-10 font-extrabold z-10 ">
            Ustedes quemaron vidas
        </h1>
        <Canvas
            shadows
            gl={{ alpha: true }}
            className="flex w-full h-full bg-black"
        >
            <OrbitControls />
            <ambientLight intensity={0.1} />
            <App />
        </Canvas>
    </StrictMode>
);
