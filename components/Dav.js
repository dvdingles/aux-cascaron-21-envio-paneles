/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dav(props) {
  const { nodes, materials } = useGLTF("/4D ENVIO PANELES.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.01, 0.03, -0.01]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ENVIO_PANELES_ARD-geom"].geometry}
          material={materials.ENVIO_PANELES_ARD_front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ENVIO_PANELES_ARD-geom_1"].geometry}
          material={materials.ENVIO_PANELES_ARD_back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ENVIO_PANELES_ARD-geom_2"].geometry}
          material={materials.ENVIO_PANELES_ARD_edge}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/4D ENVIO PANELES.gltf");
