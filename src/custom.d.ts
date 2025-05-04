// src/custom.d.ts
import { FireMaterial } from "./Fire"; // donde lo exportes
import { ReactThreeFiber } from "@react-three/fiber";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            fireMaterial: ReactThreeFiber.Object3DNode<
                FireMaterial,
                typeof FireMaterial
            >;
        }
    }
}
